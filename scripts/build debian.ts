import chalk from "chalk";
import fs from "fs";
import { join, dirname, basename, resolve } from "path";
import child_process from "child_process";
import md5file from "md5-file";
import semver from "semver";
import fg from "fast-glob"

const PATH_ROOT = resolve(__dirname, "..")
const PATH_BUILD_PACKAGES = join(PATH_ROOT, ".build-packages");
const PATH_DEBIAN = join(PATH_ROOT, "debian");
const PATH_FILE_PACKAGES = join(PATH_ROOT, "Packages");
const ORIGIN = "https://tachibana-shin.github.io";
const HOMEPAGE = "https://tachibana-shin.github.io/repo";
const PATH_TMP_UNPACK_DEBIAN = join(PATH_ROOT, ".tmp");

type ControlJSON = {
  [key: string]: string;
} & {
  Package: string;
  Version: string;
  Homepage?: string;
  Maintainer?: string;
  Sponsor?: string;
  Depiction?: string;
};
type ControlJSONFile = {
  filepath: string;
  control: ControlJSON;
};

// load split file or chunks

console.clear();
console.log(chalk.grey("reading packages..."));

function parseControl(control: string): ControlJSON {
  const obj = {} as any;

  control
    .split("\n")
    .filter((item) => !!item.replace(/\s/g, ""))
    .forEach((line) => {
      const split = line.split(": ");

      obj[split[0].trim()] = split.slice(1).join(": ").trim();
    });

  return obj;
}

function stringifyControl(obj: ControlJSON): string {
  return Object.entries(obj).reduce((prev, [key, val]) => {
    return `${prev}${key.trim()}: ${val.trim()}\n`;
  }, "");
}

async function main() {
  if (
    fs.existsSync(PATH_DEBIAN) === false ||
    fs.lstatSync(PATH_DEBIAN).isDirectory() === false
  ) {
    throw new Error(`${PATH_DEBIAN} is not directory`);
  }

  // auto fix packages
  const controlPackages = autoFixDebians(
    await getListPackages()
  );

  // get list packages merged version
  createDepictionPackages(controlPackages);

  // all package ready, create Packages, Packages.bz2
  createFilePackages();

  // create Release
  createFileRelease();
}
main();
function createDepictionPackages(controls: ControlJSONFile[]): void {
  const packages = uniqueListPackages(controls);

  fs.mkdirSync(join(PATH_ROOT, "pages/package"), {
    recursive: true,
  });

  packages.forEach((versions) => {
    // write JSON to depiction
    fs.writeFileSync(
      join(PATH_ROOT, "pages/package", versions[0].control.Package),
      JSON.stringify(
        versions.map((item) => {
          const { size, birthtimeMs, uid } = fs.lstatSync(item.filepath);

          return {
            ...item.control,
            MD5sum: md5file.sync(item.filepath),
            size,
            birthtimeMs,
            uid,
          };
        })
      )
    );
  });
}

function uniqueListPackages(
  controls: ControlJSONFile[]
): Map<string, ControlJSONFile[]> {
  const packages = new Map<string, ControlJSONFile[]>();

  controls.forEach((controlFile) => {
    if (packages.has(controlFile.control.Package) === false) {
      packages.set(controlFile.control.Package, []);
    }

    const indexInsert =
      packages
        .get(controlFile.control.Package)!
        .findIndex(({ control: { Version } }) =>
          semver.gt(Version, controlFile.control.Version)
        ) || packages.get(controlFile.control.Package)!.length;

    packages
      .get(controlFile.control.Package)!
      .splice(indexInsert, 0, controlFile);
  });

  return packages;
}

function unpackDebianToTmp(src: string): void {
  try {
    fs.rmSync(`${PATH_TMP_UNPACK_DEBIAN}`, {
      recursive: true,
    }); // rm .tmp why?
  } catch {}
  
  child_process.execSync(
    `dpkg-deb -R "${src}" "${PATH_TMP_UNPACK_DEBIAN}"`
  );
}
function readFileControlFromTmp(): string {
  return fs.readFileSync(join(PATH_TMP_UNPACK_DEBIAN, "DEBIAN/control"), "utf8")
}
function writeFileControlToTmp(control: ControlJSON): void {
  fs.writeFileSync(join(PATH_TMP_UNPACK_DEBIAN, "DEBIAN/control"), stringifyControl(control));
}
function packDebianFromTmp(filepath: string): void {
  const pathTmpControl = join(PATH_TMP_UNPACK_DEBIAN, "DEBIAN/control");
  
  if (fs.statSync(pathTmpControl).mode < 644) {
    fs.chmodSync(pathTmpControl, "0644");
  }
  
  fs.readdirSync(join(PATH_TMP_UNPACK_DEBIAN, "DEBIAN"))
  .forEach((filename) => {
    if (filename !== "control") {
      fs.chmodSync(join(PATH_TMP_UNPACK_DEBIAN, "DEBIAN", filename), "0755");
    }
  });
  
  
  child_process.execSync(`dpkg -bR "${PATH_TMP_UNPACK_DEBIAN}" "${filepath}"`);
}

async function getListPackages(): string[] {
  return await fg(`${PATH_DEBIAN}/*.deb`)
}
function autoFixDebians(
  debians: string[]
): ControlJSONFile[] {
  return debians.map((srcDebian) => {
    unpackDebianToTmp(srcDebian)
    
    const control = parseControl(readFileControlFromTmp())
    
    const uniqueControl = JSON.stringify(control);

    if (control.Package.startsWith("git.shin") === false) {
      control.Package = `git.shin.${control.Package}`;
    }
    control.Homepage = HOMEPAGE;
    control.Maintainer = "tachibana-shin<tachib.shin@gmail.com>";
    control.Sponsor = "tachibana-shin<https://tachibana-shin.github.io>";
    control.Depiction = `${HOMEPAGE}/package/${control.Package}`; // no report old versions package

    if (uniqueControl !== JSON.stringify(control)) {
      writeFileControlToTmp(control);
      
      if (
        isValidFilename(
          basename(srcDebian),
          control
        )
      ) {
        packDebianFromTmp(join(dirname(srcDebian), `${control.Package}@${control.Version}.deb`))
        console.log(`pack debian ${control.Package}`)
        
        fs.unlinkSync(srcDebian)
      } else {
        fs.renameSync(
          join(
            dirname(srcDebian),
            `${control.Package}@${control.Version}.deb`
          ),
          srcDebian
        );
      }
    }

    return {
      filepath: srcDebian,
      control
    };
  });
}

function isValidFilename(filepath: string, control: ControlJSON): boolean {
  return basename(filepath) !==
    `${control.Package}@${control.Version}.deb`
}

function createFilePackages(): void {
  child_process.execSync(`sh ./ftparchive-build.sh`);
}

function createFileRelease(): void {
  fs.writeFileSync(
    "Release",
    `Origin: Tachibana Shin (たちばなしん)
Label: Tachibana Shin (たちばなしん)
Suite: stable
Version: 1.0
Codename: ios
Architecture: iphoneos-arm
Components: main
Description: Repo DEBIAN packages for Cydia / Installer 5 of the Tachibana Shin (たちばなしん)
MD5Sum:
 ${md5file.sync(PATH_FILE_PACKAGES)} ${
      fs.statSync(PATH_FILE_PACKAGES).size
    } Packages
 ${md5file.sync(`${PATH_FILE_PACKAGES}.bz2`)} ${
      fs.statSync(`${PATH_FILE_PACKAGES}.bz2`).size
    } Packages.bz2`
  );
}

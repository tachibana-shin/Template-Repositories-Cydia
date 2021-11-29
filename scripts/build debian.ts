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
console.log(chalk.grey("starting build..."));

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
  const controlPackages = await autoFixDebians(
    await getListPackages()
  );

  // get list packages merged version
  await createDepictionPackages(controlPackages);

  // all package ready, create Packages, Packages.bz2
  createFilePackages();

  // create Release
  createFileRelease();
}
main();
async function createDepictionPackages(controls: ControlJSONFile[]): Promise<void> {
  const packages = uniqueListPackages(controls);

  await Promise.all(packages.values().map(async (versions) => {
    const pathToDirDepiction = join(PATH_ROOT, "pages/package", versions[0].control.Package)
    
    fs.mkdirSync(pathToDirDepiction, {
      recursive: true,
    });

    if (
      !fs.existsSync(join(pathToDirDepiction, "index.md")) ||
      !fs.existsSync(join(pathToDirDepiction, "index.vue"))
    ) {
      fs.writeFileSync(join(pathToDirDepiction, "index.md"), item.control.Description || `Description for package ${item.control.Package}`)
    }
    // write JSON to depiction
    fs.writeFileSync(
      join(pathToDirDepiction, "control.json"),
      JSON.stringify(
        await Promise.all(
          versions.map(async (item) => {
            const [
              { size, birthtimeMs, uid },
              MD5sum
            ] = await Promise.all([
              fs.promises.lstat(item.filepath),
              md5file(item.filepath)
            ])
  
            return {
              control: item.control,
              MD5sum,
              size,
              birthtimeMs,
              uid,
            };
          })
        ),
        (i, e) => e,
        3
      )
    );
  }));
}

function fixVersion(v: string): string {
  if (semver.valid(v)) {
    return v
  }
  
  return semver.coerce(v)
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
          semver.gt(fixVersion(Version), fixVersion(controlFile.control.Version))
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
  const filepath = join(PATH_TMP_UNPACK_DEBIAN, "DEBIAN/control")
  
   try {
    fs.accessSync(filepath, fs.R_OK)
   } catch {
      child_process.execSync(`chmod +r "${filepath}"`)
    }
  
  return fs.readFileSync(filepath, "utf8")
}
function writeFileControlToTmp(control: ControlJSON): void {
  const filepath = join(PATH_TMP_UNPACK_DEBIAN, "DEBIAN/control")
  
    try {
      fs.accessSync(filepath, fs.W_OK)
    } catch {
      child_process.execSync(`chmod +w "${filepath}"`)
    }
  
  fs.writeFileSync(filepath, stringifyControl(control));
}
function getStat(filepath: string): [number, number, number] {
  return (fs.statSync(filepath).mode & parseInt("777", 8)).toString(8).split("").map(Number)
}
function isR(p: number): boolean {
  return p <= 7 && p >= 4
}
function isW(p: number): boolean {
  return p === 2 || p === 3 || p === 7
}
function isX(p: number): boolean {
  return p % 2 === 1
}

function addX(p: number): number {
  if (isX(p)) {
    return p
  }
  
  if (isR(p)) {
    return 5
  }
  if (isW(p)) {
    return 3
  }
  
  return 7
}

function packDebianFromTmp(filepath: string): void {
  const pathTmpControl = join(PATH_TMP_UNPACK_DEBIAN, "DEBIAN/control");
  
  if (!isR(getStat(pathTmpControl)[0])) {
    fs.chmodSync(pathTmpControl, 0o400)
  }
  
    try {
      fs.accessSync(pathTmpControl, fs.W_OK)
      child_process.execSync(`chmod -w "${pathTmpControl}"`)
    } catch {}
  
  
  fs.readdirSync(join(PATH_TMP_UNPACK_DEBIAN, "DEBIAN"))
  .forEach((filename) => {
    if (filename !== "control") {
      const [p, o, w] = getStat(join(PATH_TMP_UNPACK_DEBIAN, "DEBIAN", filename))
      
      fs.chmodSync(join(PATH_TMP_UNPACK_DEBIAN, "DEBIAN", filename), eval(`0o${addX(p)}${addX(o)}${addX(w)}`));
    }
  });
  
  child_process.execSync(`dpkg -bR "${PATH_TMP_UNPACK_DEBIAN}" "${filepath}"`);
}

async function getListPackages(): string[] {
  return await fg(`${PATH_DEBIAN}/*.deb`)
}
async function autoFixDebians(
  debians: string[]
): Promise<ControlJSONFile[]> {
  const controlJSONFiles = []
  
  for await ( const srcDebian of debians ) {
    console.log(chalk.grey(`unpack ${basename(srcDebian)}`))
    
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
        console.log(chalk.green(`pack ${control.Package}`))
        
        fs.unlinkSync(srcDebian)
      } else {
        fs.renameSync(
          join(
            dirname(srcDebian),
            `${control.Package}@${control.Version}.deb`
          ),
          srcDebian
        );
        console.log(chalk.green(`fix name ${control.Package}`))
      }
    }

    controlJSONFiles.push({
      filepath: srcDebian,
      control
    })
  }
  
  return controlJSONFiles
}

function isValidFilename(filepath: string, control: ControlJSON): boolean {
  return basename(filepath) !==
    `${control.Package}@${control.Version}.deb`
}

function createFilePackages(): void {
  child_process.execSync(`sh "${join(PATH_ROOT, "ftparchive-build.sh")}"`);
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

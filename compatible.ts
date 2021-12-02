import fs from "fs"

const pkgs = new Map<string, string>()

fs.readFileSync("./compatity.txt", "utf8")
.split("\n")
.filter(Boolean)
.forEach(line => {
  pkgs.set(line.split(" ")[0], line.split(" ").slice(1).join(" "))
})

pkgs.forEach((pkg, id) => {
  fs.mkdirSync(`./pages/package/${id}`, {
    recursive: true
  })
  
  fs.writeFileSync(`./pages/package/${id}/compatible.yml`, `lastest: ${pkg}`)
})
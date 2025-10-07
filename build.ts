import * as fs from "@std/fs";
import { getFileDetails } from "./src/getFileDetails.ts";
import { getTemplateString } from "./src/getTemplateString.ts";
// import { insertMainCSS } from "./src/templating/insertMainCss.ts";

const BUILD_DIR: string = "./build";

if (fs.existsSync(BUILD_DIR)) {
  Deno.removeSync(BUILD_DIR, { recursive: true });
}

Deno.mkdirSync(BUILD_DIR);

// Move static files into build DIR
const moveStaticFilesToBuildDir = () => {
  const entries = Deno.readDirSync("./static");
  for (const entry of entries) {
    fs.copySync("./static/" + entry.name, "./build/" + entry.name);
  }
};
moveStaticFilesToBuildDir();

interface BuildRoute {
  htmlPath: string;
  fileName: string;
  folder: string;
  buildDir: string;
}

const getPageRoutes = () => {
  const routes: BuildRoute[] = [];
  const folders = ["./pages"];
  while (folders.length) {
    const currentFolder = folders.shift();
    if (currentFolder === undefined) break;

    const dir = Deno.readDirSync(currentFolder);
    for (const entry of dir) {
      if (entry.isDirectory) {
        folders.push(`${currentFolder}/${entry.name}`);
        continue;
      }
      if (entry.isFile) {
        const filePath = `${currentFolder}/${entry.name}`;
        const { extension } = getFileDetails(entry);
        if (extension === "html") {
          routes.push({
            htmlPath: filePath,
            folder: currentFolder,
            buildDir: currentFolder.replaceAll("./pages", "./build"),
            fileName: entry.name,
          });
        }
      }
    }
  }
  return routes;
};
const routes = getPageRoutes();

// BUILD HTML FILES
const baseTemplate = getTemplateString("./template/template.html");
routes.forEach(({ buildDir, folder, htmlPath, fileName }) => {
  console.log("Building Page " + htmlPath);
  if (buildDir !== BUILD_DIR) {
    Deno.mkdirSync(buildDir, { recursive: true });
  }
  const routeString = getTemplateString(htmlPath);
  const pageString = baseTemplate.replaceAll("<template />", routeString);

  Deno.writeTextFile(`${buildDir}/${fileName}`, pageString);

  // Copy over other files in directory
  const directory = Deno.readDirSync(folder);
  for (const entry of directory) {
    if (entry.isFile) {
      const { extension } = getFileDetails(entry);
      if (extension === "html") continue;
    }
    fs.copySync(folder + "/" + entry.name, `${buildDir}/${entry.name}`, {
      overwrite: true,
    });
  }
});

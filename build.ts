import * as fs from "@std/fs";
import { getFileDetails } from "./src/getFileDetails.ts";
import { getTemplateString } from "./src/getTemplateString.ts";

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
  folder: string;
  buildDir: string;
  relativePath: string;
}

const getPageRoutes = () => {
  const routes: BuildRoute[] = [];
  const folders = ["./pages"];
  let currentLevel = "";
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
            relativePath: currentLevel,
          });
        }
      }
    }
    currentLevel += "../";
  }
  return routes;
};
const routes = getPageRoutes();
console.log(routes);

// BUILD HTML FILES
const baseTemplate = getTemplateString("./template/template.html");
routes.forEach(({ buildDir, folder, htmlPath, relativePath }) => {
  console.log("Building Page " + htmlPath);
  if (buildDir !== BUILD_DIR) {
    Deno.mkdirSync(buildDir, { recursive: true });
  }

  const routeString = getTemplateString(htmlPath);
  let pageString = baseTemplate.replaceAll("<template />", routeString);

  const linkRegex = /<link\b[^>]*rel=["']stylesheet["'][^>]*>/gi;
  pageString = pageString.replaceAll(linkRegex, (match) => {
    if (match.includes('href="main.css"')) {
      return match.replace('href="main.css"', `href=${relativePath}main.css`);
    }
    return match;
  });

  Deno.writeTextFile(buildDir + "/index.html", pageString);
});

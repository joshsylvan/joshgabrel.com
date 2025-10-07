import { getTemplateString } from "./getTemplateString.ts";
import { RouteMap } from "./types.ts";

const MIME_TYPE_MAP: Record<string, string> = {
  png: "image/png",
  svg: "image/svg+xml",
  jpeg: "image/jpeg",
  css: "text/css",
  js: "text/javascript",
  ttf: "font/ttf",
  mp3: "audio/mpeg",
  wav: "audio/wav",
  mime: "application/wasm",
  json: "application/json",
};

export const buildRoutes = (): RouteMap => {
  const routes: RouteMap = {
    "/": {
      isHtml: true,
      body: getTemplateString("./pages/index.html"),
      filePath: "./pages/index.html",
      headers: { "Content-Type": "text/html" },
    },
  };
  // Load the template data

  // Load the pages directories
  const folders = ["./pages", "./static"];
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
        const regex = entry.name.matchAll(/^([^\\]*)\.(\w+)$/g);
        if (!regex) continue;
        const [_file, name, extension] = regex.toArray()[0];

        if (extension === "html") {
          const templateString = getTemplateString(filePath);
          // Add direct file path /folder/template/template.html

          const routeFolder = currentFolder
            .replaceAll("./static", "")
            .replaceAll("./pages", "");
          const routePath = `${routeFolder}/${entry.name}`;

          routes[routePath] = {
            body: templateString,
            isHtml: true,
            filePath: filePath,
            headers: { "Content-Type": "text/html" },
          };
          // Add direct folder path /folder/template
          routes[`${routeFolder}/${name}`] = {
            body: templateString,
            isHtml: true,
            filePath: filePath,
            headers: { "Content-Type": "text/html" },
          };
          // Add folder level route ignoreing the root page?
          if (routeFolder !== "") {
            routes[routeFolder] = {
              body: templateString,
              isHtml: true,
              filePath: filePath,
              headers: { "Content-Type": "text/html" },
            };
          }
        } else {
          const routeFolder = currentFolder
            .replace("./static", "")
            .replace("./pages", "");
          const routePath = `${routeFolder}/${entry.name}`;
          routes[routePath] = {
            body: Deno.readFileSync(filePath),
            headers: {
              "Content-Type": MIME_TYPE_MAP[extension] ?? "text/plain",
            },
            isHtml: false,
            filePath: filePath,
          };
        }
      }
    }
  }
  console.log(
    Object.entries(routes).map(([key, value]) =>
      [key, value.filePath].toString()
    )
  );
  return routes;
};

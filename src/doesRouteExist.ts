interface FileRoute {
  filePath: string;
  file: string;
}

/**
 * @deprecated Not sure I need this anymore but don't use for now.

 */
export const doesRouteExist = (url: URL): FileRoute | null => {
  const parts = url.pathname.split("/");

  let currentPath = "./pages";

  while (parts.length > 0) {
    const part = parts.shift();
    currentPath += `/${part}`;
    const dir = Deno.readDirSync(currentPath);

    let hasFound = false;
    for (const entry of dir) {
      if (entry.isDirectory && entry.name === parts[0]) {
        hasFound = true;
        break;
      }
      if (entry.isFile && entry.name === `${parts[0]}.html`) {
        return { filePath: currentPath, file: `${parts[0]}.html` };
      }
    }
    if (parts.length === 0) {
      const route: FileRoute = {
        filePath: currentPath,
        file: "",
      };
      const dir = Deno.readDirSync(currentPath);
      for (const entry of dir) {
        if (
          entry.isFile &&
          (entry.name === `${part}.html` || entry.name === "index.html")
        ) {
          route.file = entry.name;
        }
      }

      if (!route.file) {
        console.error(
          `ERROR: No html file found for route. Please add and index.html or ${part}.html`
        );
        return null;
      }
      return route;
    }
    if (!hasFound) {
      break;
    }
  }

  return null;
};

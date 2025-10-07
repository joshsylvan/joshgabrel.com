import { buildRoutes } from "./src/buildRoutes.ts";
import { getTemplateString } from "./src/getTemplateString.ts";
import { insertMainCSS } from "./src/templating/insertMainCss.ts";
import { RouteMap } from "./src/types.ts";

console.log("Loading static assets");

const errorTemplate = await Deno.readFile("./pages/404.html");
const encoder = new TextEncoder();
const decoder = new TextDecoder("utf-8");

const ROUTE_MAP: RouteMap = buildRoutes();

Deno.serve({ port: 8080 }, async (req) => {
  const url = new URL(req.url);
  console.log(`[REQUEST]: ${url.pathname}`);

  const route = ROUTE_MAP[url.pathname];
  if (route) {
    if (route.isHtml) {
      console.log("current url ", url.pathname);
      const temaplteString = await getTemplateString(
        "./template/template.html"
      );
      let fullPageString = temaplteString.replace(
        "<template />",
        Deno.readTextFileSync(route.filePath ?? "") as string
      );
      // TODO: a bit hacky but works to keep it simple "././"
      fullPageString = insertMainCSS(fullPageString, "././" + route.filePath);

      return new Response(encoder.encode(fullPageString));
    } else {
      return new Response(
        route.filePath ? Deno.readFileSync(route.filePath) : route.body,
        {
          status: 200,
          headers: route.headers,
        }
      );
    }
  }

  console.log(url.hostname);

  const temaplteString = getTemplateString("./template/template.html");
  const errorString = decoder.decode(errorTemplate);
  const response = temaplteString.replaceAll("<template />", errorString);

  return new Response(encoder.encode(response), {
    status: 404,
    statusText: "Not Found",
  });
});

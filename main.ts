import { buildRoutes } from "./src/buildRoutes.ts";
import { getTemplateString } from "./src/getTemplateString.ts";
import { RouteMap } from "./src/types.ts";

console.log("Loading static assets");

const errorTemplate = await Deno.readFile("./pages/404.html");
const encoder = new TextEncoder();
const decoder = new TextDecoder("utf-8");

const ROUTE_MAP: RouteMap = buildRoutes();

Deno.serve({ port: 8080 }, async (req) => {
  const url = new URL(req.url);
  console.log(`REQUEST TO -> ${url.pathname}`);

  const route = ROUTE_MAP[url.pathname];
  if (route) {
    if (route.isHtml) {
      const temaplteString = await getTemplateString(
        "./template/template.html"
      );
      const fullPageString = temaplteString.replace(
        "<template />",
        Deno.readTextFileSync(route.filePath ?? "") as string
      );

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

  const temaplteString = getTemplateString("./template/template.html");
  const errorString = decoder.decode(errorTemplate);
  const response = temaplteString.replaceAll("<template />", errorString);
  return new Response(encoder.encode(response), {
    status: 404,
    statusText: "Not Found",
  });
});

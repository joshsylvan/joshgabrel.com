import { existsSync } from "@std/fs/exists";

Deno.serve({ port: 8080 }, (req) => {
  const url = new URL(req.url);
  const filePath = `./build${url.pathname}`;
  console.log(filePath);
  if (!existsSync(filePath)) {
    console.error("Does not exist!");
    return new Response("ERROR", { status: 404, statusText: "Not Found!" });
  }

  const stat = Deno.lstatSync(filePath);
  if (stat.isDirectory) {
    console.log(`FINDING INDEX FILE -> ${filePath}/index.html`);
    if (existsSync(`${filePath}/index.html`)) {
      return new Response(Deno.readFileSync(`${filePath}/index.html`));
    }
  }

  return new Response(Deno.readFileSync(filePath));
});

import { createServer } from "node:http";

const port = Number(process.env.PORT ?? 8080);
createServer((request, response) => {
  console.log(`${new Date().toISOString()} ${request.method} ${request.url}`);
  response.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
  response.end(JSON.stringify({ app: "CloudDeploy sample", hostname: process.env.HOSTNAME ?? "local", ok: true }));
}).listen(port, "0.0.0.0", () => console.log(`Sample app listening on ${port}`));

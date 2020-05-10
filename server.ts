import { Drash } from "https://deno.land/x/drash@v0.42.0/mod.ts";

//Routes
import { Home } from "./routes/Home.ts";
import { About } from "./routes/About.ts";

const server = new Drash.Http.Server({
  response_output: "text/html",
  resources: [Home, About],
});

server.run({
  hostname: "localhost",
  port: 3000,
});

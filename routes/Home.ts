import { Drash } from "https://deno.land/x/drash@v0.42.0/mod.ts";

export class Home extends Drash.Http.Resource {
  static paths = ["/"];

  public GET() {
    this.response.body = "The home page!";
    return this.response;
  }
}

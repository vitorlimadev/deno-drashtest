import { Drash } from "https://deno.land/x/drash@v0.42.0/mod.ts";

export class About extends Drash.Http.Resource {
  static paths = ["/about"];

  public GET() {
    this.response.body = "The about page!";
    return this.response;
  }
}

import { Novel as NovelModel } from "../models/novel.ts";
import { stdout } from "../main.ts";

export class Novel {
  public index() {
    const title = "Simple Dream Novel\nリスト";
    stdout(title);
    // await Deno.stdout.write(new TextEncoder().encode(title));
  }
}

import { question } from "../main.ts";
import { Novel as NovelModel } from "../models/novel.ts";

export class Novel {
  public async index() {
    const title = "Simple Dream Novel\nリスト";
    await Deno.stdout.write(new TextEncoder().encode(title));
  }
}

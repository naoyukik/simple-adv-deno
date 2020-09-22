import { Novel as NovelModel } from "../models/novel.ts";
import { stdout } from "../main.ts";

export class Novel {
  public index(): string {
    const content =
      "Simple Dream Novel\n\nSelectの選択肢の[]内の文字列を入力してください。\n\nSelect\nリストトップ[novelIndex]\ninput:";
    return content;
  }

  public novelIndex(): string {
    const content =
      "Simple Dream Novel\nリスト\n\n第1話 夏の終わり[n1]\n第2話 それは誰が決めるのか(公開日未定)\ninput:";
    return content;
  }

  public page(pagePath: string): string {
    const content = `function page: ${pagePath}`;
    return content;
  }
}

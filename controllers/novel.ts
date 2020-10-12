import { Novel as NovelModel } from "../models/novel.ts";
import { NovelStateItem } from "../states/novelState.ts";
import { stdout } from "../main.ts";

export class Novel {
  /**
   * pagePath文字列のパーサー
   *
   * pagePath仕様
   * 左から順に
   * {アルファベット1文字}{数字orアルファベット1文字}{数字桁数上限無し}
   * 左2文字文はノベルID、残り数字はノベルのページIDなる
   * ex.) n2111 -> n2、111
   *
   * @param {string} routePath ユーザーが入力した文字列
   * @returns RegExpMatchArray | null
   */
  public static parsePagePath(routePath: string): RegExpMatchArray | null {
    const regex = /([a-z])([a-z0-9])(\d+)/;
    const found: RegExpMatchArray | null = routePath.match(regex);
    return found;
  }

  public static exit(): void {
    stdout("bye.").then(Deno.exit(0));
  }

  public index(): string {
    const content =
      "Simple Dream Novel\n\nSelectの選択肢の[]内の文字列を入力してください。\n\nSelect\nリストトップ[novelIndex]\ninput:";
    return content;
  }

  public novelIndex(): string {
    const content =
      "Simple Dream Novel\nリスト\n\n第1話 夏の終わり[n10]\n第2話 それから……[n20]\ninput:";
    return content;
  }

  /**
   *
   * @param routePath
   */
  public page(routePath: string): string | undefined {
    let categoryId: string = "",
      subId: string = "",
      contentIdStr: string = "",
      contentId: number = 0;
    const parsePagePaths = Novel.parsePagePath(routePath);
    if (parsePagePaths !== null) {
      [, categoryId, subId, contentIdStr] = parsePagePaths;
    }
    contentId = Number(contentIdStr);
    const novelModel = new NovelModel();
    const novelItem: NovelStateItem[] = novelModel.get(`${categoryId}${subId}`);
    const novel: NovelStateItem = novelItem[0];
    const body: string | undefined = novel.contents[contentId];
    if (body === undefined) {
      return undefined;
    }
    const content = `${novel.title}\n\n${novel.contents[contentId]}\n\n`;
    return content;
  }
}

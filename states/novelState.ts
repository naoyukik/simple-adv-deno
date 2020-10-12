export interface NovelStateItem {
  id: string;
  title: string;
  contents: Array<string>;
}

export class NovelState {
  /**
   * 小説情報の格納
   * @private
   */
  private static NovelStateItems: Array<NovelStateItem> = [
    {
      id: "n1",
      title: "夏の終わり",
      contents: [
        "夏の終わり、{{iam}}は{{she}}に出会った。\n\nSelect\nNext[n11]",
        "出会って一ヶ月が経つ頃には、{{iam}}は{{she}}を忘れられなくなった。\n\nSelect\nNext[n12]",
        "{{she}}は「さよなら、またね」\nと{{iam}}に告げた。\nEnd\n\nSelect\nIndex[novelIndex]",
      ],
    },
    {
      id: "n2",
      title: "それから……",
      contents: [
        "それから、10年経って{{iam}}は{{she}}に再び出会った。\n\nSelect\nNext[n21]",
        "再会してすぐ、{{iam}}は{{she}}を忘れられなくなった。\n\nSelect\nNext[n22]",
        "再会してすぐ、{{she}}は{{iam}}を忘れられなくなった。\n\nSelect\nNext[n23]",
        "{{iam}}は「ぼくは、結婚してしまったよ」\nと{{she}}に告げた。\nEnd\n\nSelect\nIndex[novelIndex]",
      ],
    },
  ];

  /**
   * データの取得
   */
  public get() {
    return NovelState.NovelStateItems;
  }
}

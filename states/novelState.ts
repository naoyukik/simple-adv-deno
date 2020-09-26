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
        "出会って一ヶ月が経つ頃には、{{iam}}は{{she}}を忘れられなくなった。\nNext[n12]",
        "{{she}}は「さよなら、またね」<br>と{{iam}}に告げた。\nEnd\nIndex[novelIndex]",
      ],
    },
    {
      id: "n2",
      title: "それから……",
      contents: [
        "それから、10年経って{{iam}}は{{she}}に再び出会った。",
        "再会してすぐ、{{iam}}は{{she}}を忘れられなくなった。",
        "再会してすぐ、{{she}}は{{iam}}を忘れられなくなった。",
        "{{iam}}は「ぼくは、結婚してしまったよ」<br>と{{she}}に告げた。",
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

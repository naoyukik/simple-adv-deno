export interface NovelStateItem {
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
      title: "夏の終わり",
      contents: [
        "夏の終わり、{{iam}}は{{she}}に出会った。",
        "出会って一ヶ月が経つ頃には、{{iam}}は{{she}}を忘れられなくなった。",
        "{{she}}は「さよなら、またね」<br>と{{iam}}に告げた。",
      ],
    },
    {
      title: "それから……",
      contents: [
        "それから、10年経って{{iam}}は{{she}}に再び出会った。",
        "出会って一ヶ月が経つ頃には、{{iam}}は{{she}}を忘れられなくなった。",
        "{{she}}は「さよなら、またね」<br>と{{iam}}に告げた。",
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

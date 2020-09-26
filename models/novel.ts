import { NovelState, NovelStateItem } from "../states/novelState.ts";
import { setRoutePathType } from "../main.ts";

export class Novel {
  public novels: NovelStateItem[];
  // public novel: NovelStateItem;

  public constructor() {
    const novelState = new NovelState();
    this.novels = novelState.get();
  }

  /**
   * 指定idのデータを返す
   *
   * @param id
   */
  public get(id: string) {
    return this.novels.filter(function (item, index) {
      if (item["id"] === id) return true;
    });
  }
}

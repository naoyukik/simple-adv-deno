import { NovelState, NovelStateItem } from "../states/novelState.ts";

export class Novel {
  public novels: NovelStateItem[];
  public novel: NovelStateItem;

  public constructor(id: number) {
    const novelState = new NovelState();
    this.novels = novelState.get();
    this.novel = this.novels[id];
  }
}

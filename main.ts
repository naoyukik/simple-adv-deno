import { readLines } from "https://deno.land/std/io/bufio.ts";
import { Novel } from "./controllers/novel.ts";

interface RouteParam {
  route: string;
  controller: (page: any) => string;
}

/**
 * 設問
 * @param params
 * @return Promise<string | undefined>
 */
export async function question(
  params: { body: string },
): Promise<string | undefined> {
  await stdout(params.body);

  for await (const line of readLines(Deno.stdin)) {
    await stdout(line);
    return line;
  }
}

/**
 * ルート一覧
 */
export function routes() {
  const novelController = new Novel();
  const route: RouteParam[] = [
    {
      route: "index",
      controller: (route) => {
        return novelController.index();
      },
    },
    {
      route: "novelIndex",
      controller: (route) => {
        return novelController.novelIndex();
      },
    },
    {
      route: "n{number}",
      controller: (route) => {
        return novelController.page(route);
      },
    },
  ];

  return route;
}

let previousRoutePath = "index";

/**
 * ルーティング
 *
 * @param routePath routes()関数内部で設定した"route"の値
 */
export function routing(routePath: string) {
  const route = getRoute(routePath);
  if (route.length <= 0) {
    // 選択肢が存在しなかったら同じrouteを無限ループ
    routing(previousRoutePath);
  }
  const content: string = route[0].controller(routePath);
  question({ body: content }).then(
    (result) => {
      if (result !== undefined) {
        previousRoutePath = routePath;
        routing(result);
      }
    },
  );
  return true;
}

/**
 * @param routePath
 * @returns RouteParam[]
 */
function getRoute(routePath: string) {
  const routeList: RouteParam[] = routes();
  return routeList.filter(function (item, index) {
    if (item["route"] === routePath) return true;
    if (item["route"] === parseRoutePath(routePath)) return true;
  });
}

export function parseRoutePath(routePath: string) {
  let suffixNum: number = 0;
  // n1 -> n,numberに分割する
  const prefix: string = routePath.substring(0, 1);
  const suffix: string = routePath.substring(1);
  if (suffix === undefined) {
    suffixNum = Number(suffix);
  }
  const suffixType: string = typeof suffixNum;
  return `${prefix}{${suffixType}}`;
}

routing(previousRoutePath);
// const answer = await question({ body: "Name?: " });
// console.log(answer);

export async function stdout(str: string) {
  await Deno.stdout.write(new TextEncoder().encode(str));
}

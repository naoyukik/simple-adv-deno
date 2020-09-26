import { readLines } from "https://deno.land/std/io/bufio.ts";
import { Novel } from "./controllers/novel.ts";

interface RouteParam {
  route: string;
  controller: (page: any) => string | undefined;
}

/**
 * 設問
 * @param params
 * @param params.body
 * @return Promise<string | undefined>
 */
export async function question(
  params: { body: string | undefined },
): Promise<string | undefined> {
  if (params.body === undefined) {
    throw new Error("body undefined");
  }
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
    {
      route: "n{string}",
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
  if (routePath === "exit") {
    Novel.exit();
    return true;
  }
  const route = getRoute(routePath);
  if (route.length <= 0) {
    // 選択肢が存在しなかったら同じrouteを無限ループ
    routing(previousRoutePath);
  }
  const content: string | undefined = route[0].controller(routePath);
  question({ body: content }).then(
    (result) => {
      if (result !== undefined) {
        previousRoutePath = routePath;
        routing(result);
      }
    },
  ).catch(() => {
    routing(previousRoutePath);
  });
  return true;
}

/**
 * @param {string} routePath
 * @returns RouteParam[]
 */
function getRoute(routePath: string) {
  const routeList: RouteParam[] = routes();
  return routeList.filter(function (item, index) {
    if (item["route"] === routePath) return true;
    if (item["route"] === setRoutePathType(routePath)) return true;
  });
}

/**
 *
 * @param {string} routePath
 */
export function setRoutePathType(routePath: string) {
  let categoryId: string = "",
    subIdStr: string = "",
    contentId: number = 0;
  const parsePagePaths = Novel.parsePagePath(routePath);
  if (parsePagePaths !== null) {
    [, categoryId, subIdStr] = parsePagePaths;
  }
  contentId = Number(subIdStr);
  const contentIdType: string = typeof contentId;
  return `${categoryId}{${contentIdType}}`;
}

export async function stdout(str: string) {
  await Deno.stdout.write(new TextEncoder().encode(str));
}

routing(previousRoutePath);

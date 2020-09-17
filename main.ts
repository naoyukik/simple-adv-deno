import { readLines } from "https://deno.land/std/io/bufio.ts";
import { Novel } from "./controllers/novel.ts";

interface RouteParam {
  route: string;
  controller: () => void;
}

/**
 * 設問
 * @param params
 * @return Promise<string | undefined>
 */
export async function question(
  params: { body: string },
): Promise<string | undefined> {
  // console.log(params["title"]);
  // console.log("question");
  // console.log(params);
  // await Deno.stdout.write(new TextEncoder().encode(params.body));
  await stdout(params.body);

  for await (const line of readLines(Deno.stdin)) {
    await stdout(line);
    return line;
  }
  // return "false";
}

/**
 * ルート一覧
 */
export function routes() {
  const novelController = new Novel();
  const route: RouteParam[] = [
    {
      route: "index",
      controller: () => {
        novelController.index();
      },
    },
  ];

  return route;
}

// export async function routing(params: { route: string }) {
//   question(params);
//   const routes: RouteParam[] = routes();
//   const route = routes.filter(function (item, index) {
//     if (item["route"] === params["route"]) return true;
//   });
// }

// await routing({ body: "Next?: " });
// const answer = await question({ body: "Name?: " });
// console.log(answer);

export async function stdout(str: string) {
  await Deno.stdout.write(new TextEncoder().encode(str));
}

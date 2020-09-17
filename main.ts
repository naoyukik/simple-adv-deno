import { readLines } from "https://deno.land/std/io/bufio.ts";
import { Novel } from "./controllers/novel.ts";

interface QuestionParam {
  route: string;
  title: string;
  controller: Promise<void>;
}

/**
 * 設問
 * @param params
 */
async function question(params: QuestionParam) {
  // console.log(params["title"]);
  console.log("question");
  await Deno.stdout.write(new TextEncoder().encode(params["title"]));

  for await (const line of readLines(Deno.stdin)) {
    await stdout(line);
    return 0;
  }
}

/**
 * ルート一覧
 * @param params
 */
function route() {
  // const route = params["route"];
  // const title = params["title"];
  console.log("route");
  // console.log(params);
  // ({ route, title } = params);
  const novelController = new Novel();
  const route: QuestionParam[] = [
    { route: "index", title: "index", controller: novelController.index() },
  ];

  return route;
}

async function routing(params: ) {
}

await routing({ route: "index", title: "Name?: " });
// const answer = await question({ route: "0-1", title: "Name?: " });
// console.log(answer);

function stdout(str: string) {
  Deno.stdout.write(new TextEncoder().encode(str));
}

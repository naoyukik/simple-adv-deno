import { readLines } from "https://deno.land/std/io/bufio.ts";

interface QuestionParam {
  title: string | undefined;
}

/**
 * 設問
 * @param params
 */
export async function question(params: QuestionParam) {
  // console.log(params["title"]);
  await Deno.stdout.write(new TextEncoder().encode(params["title"]));

  for await (const line of readLines(Deno.stdin)) {
    await stdout(line);
    return 0;
  }
}

async function route() {
}

const answer = await question({ title: "Name?: " });
// console.log(answer);

function stdout(str: string) {
  Deno.stdout.write(new TextEncoder().encode(str));
}

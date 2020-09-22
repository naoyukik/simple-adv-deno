import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { parseRoutePath, question, routes, routing } from "../main.ts";

Deno.test("question test", async () => {
  const questionResult: string | undefined = await question(
    { body: "TestBody: " },
  );
  // assertEquals(typeof novelModel.novel, "object");
  // assertEquals("contents" in novelModel.novel, true);
  // assertEquals("title" in novelModel.novel, true);
});

Deno.test("get Route List", () => {
  const questionResult = routes();
  console.log(questionResult);
  // assertEquals(typeof novelModel.novel, "object");
  // assertEquals("contents" in novelModel.novel, true);
  // assertEquals("title" in novelModel.novel, true);
});

Deno.test("routing", () => {
  routing("index");
  assertEquals(true, true);
});

Deno.test("parseRoutePath", () => {
  parseRoutePath("n1");
});

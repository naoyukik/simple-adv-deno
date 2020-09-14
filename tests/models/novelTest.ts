import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { Novel } from "../../models/novel.ts";

Deno.test("get novel data", () => {
  const novelModel = new Novel(1);
  assertEquals(typeof novelModel.novel, "object");
  assertEquals("contents" in novelModel.novel, true);
  assertEquals("title" in novelModel.novel, true);
});

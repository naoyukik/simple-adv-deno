import { assertEquals } from "https://deno.land/std/testing/asserts.ts";

import { Novel } from "../../controllers/novel.ts";

Deno.test("index", () => {
  const novelController = new Novel();
  novelController.index();

  // assertEquals(typeof novelController.novel, "object");
  // assertEquals("contents" in novelController.novel, true);
  // assertEquals("title" in novelController.novel, true);
});

Deno.test("parsePagePath", () => {
  const novelController = new Novel();
  novelController.parsePagePath("n11");
  novelController.parsePagePath("na111");
});

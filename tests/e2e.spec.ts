import { test, expect } from "@playwright/test";

test("should show search", async ({ page }) => {
  await page.goto("/");

  await page.getByRole("searchbox", { name: "Search Wikipedia" }).click();
});

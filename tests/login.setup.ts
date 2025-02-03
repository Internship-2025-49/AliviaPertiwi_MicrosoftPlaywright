import { test as setup, expect } from "@playwright/test";
import { STORAGE_STATE } from "../playwright.config";

setup("do login", async ({ page }) => {
  await page.goto("https://en.wikipedia.org");
  await page.goto("https://en.wikipedia.org/wiki/Main_Page");

  await page.getByRole("link", { name: "Log in" }).click();
  await page.getByRole("textbox", { name: "Username" }).click();
  await page.getByRole("textbox", { name: "Username" }).fill("Lipia2302");
  await page.getByRole("textbox", { name: "Password" }).click();
  await page.getByRole("textbox", { name: "Password" }).fill("aliviapertiwi");
  //   await page.getByRole("textbox", { name: "CAPTCHA Security check" }).click();
  //   await page
  //     .getByRole("checkbox", { name: "Keep me logged in (for up to" })
  //     .check();
  //   await page.getByRole("textbox", { name: "CAPTCHA Security check" }).click();
  //   await page
  //     .getByRole("textbox", { name: "CAPTCHA Security check" })
  //     .fill("emacsmeets");
  await page.getByRole("button", { name: "Log in" }).click();

  await expect(
    page.getByRole("button", { name: "Personal tools" })
  ).toBeVisible();

  await page.context().storageState({ path: STORAGE_STATE });
});

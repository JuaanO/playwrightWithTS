import { test } from "@playwright/test";

test.describe("The for authorization module", () => {
   test.beforeEach(async ({ page }) => {
      await page.goto("http://localhost:4200/");
      await page.getByRole("link", { name: "Auth" }).click();
   });

   test("Check the login module", async ({ page }) => {
      await page.getByRole("link", { name: "Login" }).click();
   });
});

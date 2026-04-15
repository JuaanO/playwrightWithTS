import { test, expect } from "@playwright/test";

test.describe("Test with charts", () => {
   test.beforeEach(async ({ page }) => {
      await page.goto("http://localhost:4200/");
      await page.getByRole("link", { name: "Charts" }).first().click();
      await page.getByRole("link", { name: "Echarts" }).click();
   });

   test("Echarts", async ({ page }) => {
      const headerMessage = page.getByText("Pie");
      await expect(headerMessage).toHaveText("Pie");
   });
});

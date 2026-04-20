import { test, expect } from "@playwright/test";

test.describe("Test with charts", () => {

   test("Echarts", async ({ page }) => {
      const headerMessage = page.getByText("Pie");
      await expect(headerMessage).toHaveText("Pie");
   });
});

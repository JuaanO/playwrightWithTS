import { test, expect } from "@playwright/test";

test.describe("test for extra component", () => {
   test.beforeEach(async ({ page }) => {
      await page.goto("http://localhost:4200/");
      await page.getByRole("link", { name: "Extra components" }).click();
      await page.getByRole("link", { name: "Calendar" }).click();
   });

   test("Test for calendar", async ({ page }) => {
      //format needed -> Apr 14, 2026
      let date = new Date();
      let day = date.getDate().toString();
      let year = date.getFullYear();
      let expectedMonthShort = date.toLocaleDateString("En-US", {
         month: "short",
      });
      const formateDate = `${expectedMonthShort} ${day}, ${year}`;

      const expectedDate = page
         .locator(".calendar-container")
         .locator("span")
         .first();
      expect(expectedDate).toHaveText(` Selected date: ${formateDate} `);

      const toDay = await page
         .locator("nb-calendar-day-picker")
         .locator("nb-calendar-picker-row")
         .locator("nb-calendar-day-cell")
         .locator(".cell-content")
         .filter({ hasText: "12" })
         .nth(0)
         .click();
         
      expect(expectedDate).toContainText(`${expectedMonthShort} 12, ${year}`);

   });
});

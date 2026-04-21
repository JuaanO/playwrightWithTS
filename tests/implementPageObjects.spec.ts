import { test } from "@playwright/test";
import { PageManager } from "../pageObejects/pageManager";

test.beforeEach(async ({ page }) => {
   await page.goto("http://localhost:4200/");
});

test.describe("Run the entire test suite", () => {
   test.describe("Run all test with forms", () => {
      test("Parametrized methods using the grid", async ({ page }) => {
         const pageManager = new PageManager(page)
         await pageManager.navigateTo().formLayoutsPage();
         await pageManager.onFormsLayoutPage().submitUsingTheGridFormWithCredentials(
            "juanito@gmail.com",
            "secret123**!",
         );
      });

      test("Parametrized method Inline", async ({ page }) => {
         const pageManager = new PageManager(page)
         await pageManager.navigateTo().formLayoutsPage();
         await pageManager.onFormsLayoutPage().submitUsingTheInlineFormWithCredentials(
            "Jos3@hotmail.es",
            "secret321!!*",
         );
      });

      test("Parametrized method basic form", async ({ page }) => {
         const pageManager = new PageManager(page)
         await pageManager.navigateTo().formLayoutsPage();
         await pageManager.onFormsLayoutPage().submitUsingTheFormWithoutLabels(
            "JJStar@hotmail.es",
            "Subject of message",
            "The big message!!",
         );
      });

      test("Parametrized method block form", async ({ page }) => {
         const pageManager = new PageManager(page)
         await pageManager.navigateTo().formLayoutsPage();
         await pageManager.onFormsLayoutPage().submitUsingTheBlockForm(
            "Juan Jose",
            "Star",
            "juan@jose.com",
            "www.jjstar.com.es",
         );
      });

      test("Parametrized method horizontal form", async ({ page }) => {
         const pageManager = new PageManager(page)
         await pageManager.navigateTo().formLayoutsPage();
         await pageManager.onFormsLayoutPage().submitUsingTheHorizontalForm(
            "Juan Jose",
            "secretxx123!",
         );
      });
   });
   test.describe("Run all test with datePicker", () => {
      test("Test for Common Datepicker", async ({ page }) => {
         const pageManager = new PageManager(page)
         await pageManager.navigateTo().datePickerPage();
         await pageManager.picker().selectCommonDatePickerDateFromToday(25);
      });

      test("Test Datepicker with a range", async ({ page }) => {
         const pageManager = new PageManager(page)
         await pageManager.navigateTo().datePickerPage();
         await pageManager.picker().selectDatePickerWithRangeFromToday(22, 33);
      });
   });
});
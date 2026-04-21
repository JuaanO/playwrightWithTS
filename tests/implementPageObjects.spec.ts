import { test } from "@playwright/test";
import { PageManager } from "../pageObejects/pageManager";
import { faker } from "@faker-js/faker";

test.beforeEach(async ({ page }) => {
   await page.goto("http://localhost:4200/");
});

test("Navigate to form page", async ({ page }) => {
   const pageManager = new PageManager(page);
   await pageManager.navigateTo().formLayoutsPage();
   await pageManager.navigateTo().chartsPage();
   await pageManager.navigateTo().extraComponentPage();
   await pageManager.navigateTo().modalsPage();
   await pageManager.navigateTo().smartTablesPage();
   await pageManager.navigateTo().authorizationPage();
});

test.describe("Run the entire test suite", () => {
   const email = faker.internet.email({
      firstName: "juan",
      provider: "hotmail.xxx",
   });
   const fullName = faker.person.fullName({ sex: "female" });
   const pass = faker.internet.password();

   test.describe("Run all test with forms", () => {
      test("Parametrized methods using the grid", async ({ page }) => {
         const pageManager = new PageManager(page);
         await pageManager.navigateTo().formLayoutsPage();
         await pageManager
            .onFormsLayoutPage()
            .submitUsingTheGridFormWithCredentials(fullName, pass);
      });

      test("Parametrized method Inline", async ({ page }) => {
         const pageManager = new PageManager(page);
         await pageManager.navigateTo().formLayoutsPage();
         await pageManager
            .onFormsLayoutPage()
            .submitUsingTheInlineFormWithCredentials(fullName, pass);
      });

      test("Parametrized method basic form", async ({ page }) => {
         const pageManager = new PageManager(page);
         const subject = faker.lorem.words();
         const message = faker.lorem.paragraph();
         await pageManager.navigateTo().formLayoutsPage();
         await pageManager
            .onFormsLayoutPage()
            .submitUsingTheFormWithoutLabels(email, subject, message);
      });

      test("Parametrized method block form", async ({ page }) => {
         const pageManager = new PageManager(page);
         const lastName = faker.person.lastName();
         const website = faker.internet.url();
         await pageManager.navigateTo().formLayoutsPage();
         await pageManager
            .onFormsLayoutPage()
            .submitUsingTheBlockForm(fullName, lastName, email, website);
      });

      test("Parametrized method horizontal form", async ({ page }) => {
         const pageManager = new PageManager(page);
         await pageManager.navigateTo().formLayoutsPage();
         await pageManager
            .onFormsLayoutPage()
            .submitUsingTheHorizontalForm(fullName, pass);
      });
   });
   test.describe("Run all test with datePicker", () => {
      test("Test for Common Datepicker", async ({ page }) => {
         const pageManager = new PageManager(page);
         await pageManager.navigateTo().datePickerPage();
         await pageManager.picker().selectCommonDatePickerDateFromToday(25);
      });

      test("Test Datepicker with a range", async ({ page }) => {
         const pageManager = new PageManager(page);
         await pageManager.navigateTo().datePickerPage();
         await pageManager.picker().selectDatePickerWithRangeFromToday(22, 33);
      });
   });
});

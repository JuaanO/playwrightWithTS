import { test } from "@playwright/test";
import { NavigationPage } from "../pageObejects/navigationPage";
import { FormLayoutsPage } from "../pageObejects/formLayoutsPage";
import {DatePickerPage} from "../pageObejects/datePickerPage"

test.beforeEach(async ({ page }) => {
   await page.goto("http://localhost:4200/");
});

// test("Navigate to form page", async ({ page }) => {
//    const navigateTo = new NavigationPage(page);
//    await navigateTo.formLayoutsPage();
//    await navigateTo.chartsPage();
//    await navigateTo.extraComponentPage();
//    await navigateTo.modalsPage();
//    await navigateTo.smartTablesPage();
//    await navigateTo.authorizationPage();
//    await navigateTo.datePickerPage()
// });

test.describe("Run all test with forms", () => {
   test("Parametrized methods using the grid", async ({ page }) => {
      const navigateTo = new NavigationPage(page);
      const onFormsLayoutPage = new FormLayoutsPage(page);
      await navigateTo.formLayoutsPage();
      await onFormsLayoutPage.submitUsingTheGridFormWithCredentials(
         "juanito@gmail.com",
         "secret123**!",
      );
   });

   test("Parametrized method Inline", async ({ page }) => {
      const navigateTo = new NavigationPage(page);
      const onFormsLayoutPage = new FormLayoutsPage(page);
      await navigateTo.formLayoutsPage();
      await onFormsLayoutPage.submitUsingTheInlineFormWithCredentials(
         "Jos3@hotmail.es",
         "secret321!!*",
      );
   });

   test("Parametrized method basic form", async ({ page }) => {
      const navigateTo = new NavigationPage(page);
      const onFormsLayoutPage = new FormLayoutsPage(page);
      await navigateTo.formLayoutsPage();
      await onFormsLayoutPage.submitUsingTheFormWithoutLabels(
         "JJStar@hotmail.es",
         "Subject of message",
         "The big message!!",
      );
   });

   test("Parametrized method block form", async ({ page }) => {
      const navigateTo = new NavigationPage(page);
      const onFormsLayoutPage = new FormLayoutsPage(page);
      await navigateTo.formLayoutsPage();
      await onFormsLayoutPage.submitUsingTheBlockForm(
         "Juan Jose",
         "Star",
         "juan@jose.com",
         "www.jjstar.com.es",
      );
   });

   test("Parametrized method horizontal form", async ({ page }) => {
      const navigateTo = new NavigationPage(page);
      const onFormsLayoutPage = new FormLayoutsPage(page);
      await navigateTo.formLayoutsPage();
      await onFormsLayoutPage.submitUsingTheHorizontalForm(
         "Juan Jose",
         "secretxx123!",
      );
   });
});

test.describe("Run all test with datePicker", ()=>{
   
   test('datepicker', async ({page})=>{
      const navigateTo = new NavigationPage(page);
      const picker = new DatePickerPage(page)
      await navigateTo.datePickerPage();
      await picker.selectCommonDatePickerDateFromToday(9)
   })
   
   test('datepicker1', async ({page})=>{
      const navigateTo = new NavigationPage(page);
      const picker = new DatePickerPage(page)
      await navigateTo.datePickerPage();
      await picker.selectDatePickerWithRangeFromToday(22,33)
   })
})

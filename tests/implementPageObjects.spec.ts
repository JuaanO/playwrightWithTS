import { test } from "@playwright/test";
import { NavigationPage } from "../pageObejects/navigationPage";

test.beforeEach(async ({ page }) => {
   await page.goto("http://localhost:4200/");
   await page.getByRole("link", { name: "Forms" }).click();
});

test("Navigate to form page", async ({ page }) => {
   const navigateTo = new NavigationPage(page);
   await navigateTo.formLayoutsPage()
   await navigateTo.authorizationPage()
   await navigateTo.chartsPage()
   await navigateTo.extraComponentPage()
   await navigateTo.modalsPage()
   await navigateTo.smartTablesPage()
   
   
});

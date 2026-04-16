import { Page } from "@playwright/test";

export class NavigationPage {
   readonly page: Page;

   constructor(page: Page) {
      this.page = page;
   }

   async formLayoutsPage() {
      await this.page.getByRole("link", { name: "Form Layouts" }).click();
   }

   async authorizationPage() {
      await this.page.getByRole("link", { name: "Auth" }).click();
   }

   async chartsPage() {
      await this.page.getByRole("link", { name: "Charts" }).first().click();
      await this.page.getByRole("link", { name: "Echarts" }).click();
   }

   async extraComponentPage() {
      await this.page.getByRole("link", { name: "Extra components" }).click();
      await this.page.getByRole("link", { name: "Calendar" }).click();
   }

   async modalsPage() {
      await this.page.getByRole("link", { name: "Forms" }).click();
   }

   async smartTablesPage() {
      await this.page.getByRole("link", { name: "Tables & Data" }).first().click();
   }
}

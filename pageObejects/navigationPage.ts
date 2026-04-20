import { Page } from "@playwright/test";

export class NavigationPage {
   readonly page: Page;

   constructor(page: Page) {
      this.page = page;
   }

   async formLayoutsPage() {
      await this.selectGroupMenuItem("forms");
      await this.page.getByRole("link", { name: "Form Layouts" }).click();
   }

   async authorizationPage() {
      await this.selectGroupMenuItem("forms");
      await this.page.getByRole("link", { name: "Auth" }).click();
      await this.page.getByRole("link", { name: "Register" }).click();
   }

   async chartsPage() {
      await this.selectGroupMenuItem("forms");
      await this.page.getByRole("link", { name: "Charts" }).first().click();
      await this.page.getByRole("link", { name: "Echarts" }).click();
   }

   async extraComponentPage() {
      await this.selectGroupMenuItem("forms");
      await this.page.getByRole("link", { name: "Extra components" }).click();
      await this.page.getByRole("link", { name: "Calendar" }).click();
   }

   async modalsPage() {
      await this.selectGroupMenuItem("forms");
      await this.page.getByRole("link", { name: "Modal & Overlays" }).click();
      await this.page.getByRole("link", { name: "Dialog" }).click();
   }

   async smartTablesPage() {
      await this.page
         .getByRole("link", { name: "Tables & Data" })
         .first()
         .click();
      await this.page.getByRole("link", { name: "Smart Table" }).click();
   }

   private async selectGroupMenuItem(groupItemMenu: string) {
      const groupMenuItem = this.page.getByTitle(groupItemMenu);
      const expandedState = await groupMenuItem.getAttribute("aria-expanded");
      if (expandedState == "false") {
         await groupMenuItem.click();
      }
   }
}

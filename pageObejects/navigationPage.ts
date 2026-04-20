import { Locator, Page } from "@playwright/test";

export class NavigationPage {
   readonly page: Page;
   readonly formLayoutsPageItem: Locator
   readonly authorizationPageItemAuth: Locator
   readonly authorizationPageItemRegister:Locator
   readonly chartsPageChartItem:Locator
   readonly chartsPageEchartItem:Locator
   readonly extraComponentPageItem: Locator
   readonly extraComponentPageCalendarItem: Locator
   readonly modalsPageItem:Locator
   readonly modalsPageItemDialog: Locator
   readonly smartTablesPageItem:Locator
   readonly smartTablesPageItemS: Locator
   

   constructor(page: Page) {
      this.page = page;
      this.formLayoutsPageItem = page.getByRole("link", { name: "Form Layouts" })
      this.authorizationPageItemAuth = page.getByRole("link", { name: "Auth" })
      this.authorizationPageItemRegister = this.page.getByRole("link", { name: "Register" })
      this.chartsPageChartItem = page.getByRole("link", { name: "Charts" })
      this.chartsPageEchartItem = page.getByRole("link", { name: "Echarts" })
      this.extraComponentPageItem = page.getByRole("link", { name: "Extra components" })
      this.extraComponentPageCalendarItem = page.getByRole("link", { name: "Calendar" })
      this.modalsPageItem = page.getByRole("link", { name: "Modal & Overlays" })
      this.modalsPageItemDialog = page.getByRole("link", { name: "Dialog" })
      this.smartTablesPageItem = page.getByRole("link", { name: "Tables & Data" })
      this.smartTablesPageItemS = page.getByRole("link", { name: "Smart Table" })
   }

   async formLayoutsPage() {
      await this.selectGroupMenuItem("forms");
      await this.formLayoutsPageItem.click();
   }

   async authorizationPage() {
      await this.selectGroupMenuItem("forms");
      await this.authorizationPageItemAuth.click();
      await this.authorizationPageItemRegister.click();
   }

   async chartsPage() {
      await this.selectGroupMenuItem("forms");
      await this.chartsPageChartItem.first().click();
      await this.chartsPageEchartItem.click();
   }

   async extraComponentPage() {
      await this.selectGroupMenuItem("forms");
      await this.extraComponentPageItem.click();
      await this.extraComponentPageCalendarItem.click();
   }

   async modalsPage() {
      await this.selectGroupMenuItem("forms");
      await this.modalsPageItem.click();
      await this.modalsPageItemDialog.click();
   }

   async smartTablesPage() {
      await this.smartTablesPageItem.first().click();
      await this.smartTablesPageItemS.click();
   }

   private async selectGroupMenuItem(groupItemMenu: string) {
      const groupMenuItem = this.page.getByTitle(groupItemMenu);
      const expandedState = await groupMenuItem.getAttribute("aria-expanded");
      if (expandedState == "false") {
         await groupMenuItem.click();
      }
   }
}

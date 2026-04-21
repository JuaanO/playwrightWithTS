import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class NavigationPage extends HelperBase {
   // readonly formLayoutsPageItem: Locator
   // readonly authorizationPageItemAuth: Locator
   // readonly authorizationPageItemRegister:Locator
   // readonly chartsPageChartItem:Locator
   // readonly chartsPageEchartItem:Locator
   // readonly extraComponentPageItem: Locator
   // readonly extraComponentPageCalendarItem: Locator
   // readonly modalsPageItem:Locator
   // readonly modalsPageItemDialog: Locator
   // readonly smartTablesPageItem:Locator
   // readonly smartTablesPageItemS: Locator
   // readonly datePickerPageItem: Locator

   constructor(page: Page) {
      super(page);
      // this.formLayoutsPageItem = page.getByRole("link", { name: "Form Layouts" })
      // this.datePickerPageItem = page.getByRole("link", { name: "Datepicker" })

      // this.authorizationPageItemAuth = page.getByRole("link", { name: "Auth" })
      // this.authorizationPageItemRegister = this.page.getByRole("link", { name: "Register" })

      // this.chartsPageChartItem = page.getByRole("link", { name: "Charts" })
      // this.chartsPageEchartItem = page.getByRole("link", { name: "Echarts" })

      // this.extraComponentPageItem = page.getByRole("link", { name: "Extra components" })
      // this.extraComponentPageCalendarItem = page.getByRole("link", { name: "Calendar" })

      // this.modalsPageItem = page.getByRole("link", { name: "Modal & Overlays" })
      // this.modalsPageItemDialog = page.getByRole("link", { name: "Dialog" })

      // this.smartTablesPageItem = page.getByRole("link", { name: "Tables & Data" })
      // this.smartTablesPageItemS = page.getByRole("link", { name: "Smart Table" })
   }

   async formLayoutsPage() {
      await this.selectGroupMenuItem("forms");
      await this.waitForNumberOfSeconds(1);
      await this.page.getByRole("link", { name: "Form Layouts" }).click();
      // await this.formLayoutsPageItem.click();
   }

   async datePickerPage() {
      await this.selectGroupMenuItem("forms");
      await this.page.getByRole("link", { name: "Datepicker" }).click();
   }

   async authorizationPage() {
      await this.selectGroupMenuItem("forms");
      await this.page.getByRole("link", { name: "Auth" }).click();
      await this.page.getByRole("link", { name: "Register" }).click();
   }

   async chartsPage() {
      await this.selectGroupMenuItem("forms");
      await this.page.getByRole("link", { name: "Charts" });
      await this.page.getByRole("link", { name: "Echarts" });
   }

   async extraComponentPage() {
      await this.selectGroupMenuItem("forms");
      //       await this.page.getByRole("link", { name: "Modal & Overlays" }).click();
      // await thispage.getByRole("link", { name: "Dialog" }).click();
      await this.page.getByRole("link", { name: "Extra components" }).click();
      await this.page.getByRole("link", { name: "Calendar" }).click();
   }

   async modalsPage() {
      await this.selectGroupMenuItem("forms");
      // await this.modalsPageItem.click();
      // await this.modalsPageItemDialog.click();
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

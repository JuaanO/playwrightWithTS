import { expect, Page, test } from "@playwright/test";

export class HelperBase {
   readonly page: Page;

   constructor(page: Page) {
      this.page = page;
   }

   async waitForNumberOfSeconds(timeInSeconds: number) {
      await this.page.waitForTimeout(1000 * timeInSeconds);
   }
}

import { expect, Page, test } from "@playwright/test";
import { faker } from "@faker-js/faker";

export class HelperBase {
   readonly page: Page;

   constructor(page: Page) {
      this.page = page;
   }

   async waitForNumberOfSeconds(timeInSeconds: number) {
      await this.page.waitForTimeout(1000 * timeInSeconds);
   }

   async methodTestWithFaker() {
      const fullName = faker.person.firstName();
      return fullName;
   }
}

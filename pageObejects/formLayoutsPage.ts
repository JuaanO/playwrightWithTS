import { Page } from "@playwright/test";
import { HelperBase } from "./helperBase";

export class FormLayoutsPage extends HelperBase {
   constructor(page: Page) {
      super(page);
   }

   /**
    * This method will be out the grid form with user details
    * @param email email from user
    * @param password Password from user
    */
   async submitUsingTheGridFormWithCredentials(
      email: string,
      password: string,
   ) {
      const usingTheGridForm = await this.page.locator("nb-card", {
         hasText: "using the grid",
      });
      await usingTheGridForm
         .getByRole("textbox", { name: "email" })
         .fill(email);

      usingTheGridForm
         .getByRole("textbox", { name: "password" })
         .fill(password);

      await usingTheGridForm.getByRole("button", { name: "SIGN IN" }).click();
   }

   async submitUsingTheInlineFormWithCredentials(
      email: string,
      password: string,
   ) {
      const usingTheInlineForm = await this.page.locator("nb-card", {
         hasText: "Inline form",
      });
      await usingTheInlineForm
         .getByRole("textbox", { name: "Jane Doe" })
         .fill(email);

      await usingTheInlineForm
         .getByRole("textbox", { name: "Email" })
         .first()
         .fill(password);

      await usingTheInlineForm
         .getByRole("button", { name: "SUBMIT" })
         .first()
         .click();
   }

   async submitUsingTheBasicForm(email: string, password: string) {
      const usingTheBasicForm = this.page.locator("nb-card", {
         hasText: "Basic form",
      });

      await usingTheBasicForm
         .getByRole("textbox", { name: "email" })
         .fill(email);
      await usingTheBasicForm
         .getByRole("textbox", { name: "password" })
         .fill(password);
      await usingTheBasicForm.getByRole("button", { name: "SUBMIT" }).click();
   }

   async submitUsingTheFormWithoutLabels(
      email: string,
      subject: string,
      message: string,
   ) {
      const usingTheFormWithoutLabels = this.page.locator("nb-card", {
         hasText: "Form without labels",
      });
      await usingTheFormWithoutLabels
         .getByRole("textbox", { name: "Recipients" })
         .fill(email);
      await usingTheFormWithoutLabels
         .getByRole("textbox", { name: "Subject" })
         .fill(subject);
      await usingTheFormWithoutLabels
         .getByRole("textbox", { name: "message" })
         .fill(message);
      await usingTheFormWithoutLabels
         .getByRole("button", { name: "Send" })
         .click();
   }

   async submitUsingTheBlockForm(
      name: string,
      lastName: string,
      email: string,
      website: string,
   ) {
      const usingTheBlackForm = this.page.locator("nb-card", {
         hasText: "Block form",
      });

      await usingTheBlackForm
         .getByRole("textbox", { name: "First Name" })
         .fill(name);
      await usingTheBlackForm
         .getByRole("textbox", { name: "last name" })
         .fill(lastName);
      await usingTheBlackForm
         .getByRole("textbox", { name: "email" })
         .fill(email);
      await usingTheBlackForm
         .getByRole("textbox", { name: "website" })
         .fill(website);
      await usingTheBlackForm.getByRole("button", { name: "SUBMIT" }).click();
   }

   async submitUsingTheHorizontalForm(email: string, password: string) {
      const usingTheHorizontalForm = this.page.locator("nb-card", {
         hasText: "horizontal form",
      });
      await usingTheHorizontalForm
         .getByRole("textbox", { name: "email" })
         .fill(email);
      await usingTheHorizontalForm
         .getByRole("textbox", { name: "password" })
         .fill(password);
      await usingTheHorizontalForm
         .getByRole("button", { name: "Sign in" })
         .click();
   }
}

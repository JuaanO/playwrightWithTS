import { test, expect } from "@playwright/test";

test.describe("Contact form tests", () => {
   test.beforeEach(async ({ page }) => {
      await page.goto("http://localhost:4200/");
      await page.getByRole("link", { name: "Forms" }).click();
   });

   test("Forms Layouts", async ({ page }) => {
      await page.getByRole("link", { name: "Form Layouts" }).click();
      await expect(page.getByText("Inline form")).toHaveText("Inline form");

      //inline
      await page
         .getByRole("textbox", { name: "Jane Doe" })
         .fill("juuan@gmail.com");
      await page
         .getByRole("textbox", { name: "Email" })
         .first()
         .fill("juuan@gmail.com");
      await page.getByRole("button", { name: "SUBMIT" }).first().click();

      //using the grid
      await page
         .locator("nb-card", { hasText: "using the grid" })
         .getByRole("textbox", { name: "email" })
         .fill("juuan@gmail.com");
      await page
         .locator("nb-card", { hasText: "using the grid" })
         .getByRole("textbox", { name: "password" })
         .fill("122345");
      await page
         .locator("nb-card", { hasText: "using the grid" })
         .getByRole("button", { name: "SIGN IN" })
         .click();

      //basic form
      await page
         .locator("nb-card", { hasText: "Basic form" })
         .getByRole("textbox", { name: "email" })
         .fill("juuan@gmail.com");
      await page
         .locator("nb-card", { hasText: "Basic form" })
         .getByRole("textbox", { name: "password" })
         .fill("123445");
      await page
         .locator("nb-card", { hasText: "Basic form" })
         .getByRole("button", { name: "SUBMIT" })
         .click();

      //Form without labels
      await page
         .locator("nb-card", { hasText: "Form without labels" })
         .getByRole("textbox", { name: "Recipients" })
         .fill("juuan@gmail.com");
      await page
         .locator("nb-card", { hasText: "Form without labels" })
         .getByRole("textbox", { name: "Subject" })
         .fill("Subject of test");
      await page
         .locator("nb-card", { hasText: "Form without labels" })
         .getByRole("textbox", { name: "message" })
         .fill("This is a message");
      await page
         .locator("nb-card", { hasText: "Form without labels" })
         .getByRole("button", { name: "Send" })
         .click();

      //block form
      await page
         .locator("nb-card", { hasText: "Block form" })
         .getByRole("textbox", { name: "First Name" })
         .fill("Juan");
      await page
         .locator("nb-card", { hasText: "block form" })
         .getByRole("textbox", { name: "last name" })
         .fill("Estrella");
      await page
         .locator("nb-card", { hasText: "block form" })
         .getByRole("textbox", { name: "email" })
         .fill("juan@gmail.es");
      await page
         .locator("nb-card", { hasText: "block form" })
         .getByRole("textbox", { name: "website" })
         .fill("www.juan.com");
      await page
         .locator("nb-card", { hasText: "Block form" })
         .getByRole("button", { name: "SUBMIT" })
         .click();

      //horizontal form
      await page
         .locator("nb-card", { hasText: "horizontal form" })
         .getByRole("textbox", { name: "email" })
         .fill("Juan@gmail.com");
      await page
         .locator("nb-card", { hasText: "horizontal form" })
         .getByRole("textbox", { name: "password" })
         .fill("12345");
      await page
         .locator("nb-card", { hasText: "horizontal form" })
         .getByRole("button", { name: "Sign in" })
         .click();
   });

   test("Datepicker", async ({ page }) => {
      await page.getByRole("link", { name: "Datepicker" }).click();
      await expect(page.getByText("Common Datepicker")).toHaveText(
         "Common Datepicker",
      );

      const datePicker = page
         .locator("nb-card", { hasText: "Common Datepicker" })
         .getByPlaceholder("Form Picker");
      await datePicker.click();

      const daySelected = page
         .locator("nb-calendar-picker")
         .locator(".cell-content", { hasText: "9" })
         .first();
      await daySelected.click();

      await expect(datePicker).toHaveValue("Mar 29, 2026");
   });
});

import { expect, test } from "@playwright/test";

test.describe("The for authorization module", () => {

   test("Register a new username", async ({ page }) => {
      // await page.getByRole("link", { name: "Register" }).click();
      const headerMessage = page.getByText("Register").first();
      expect(headerMessage).toHaveText("Register");

      await page
         .getByRole("textbox", { name: "Full name" })
         .fill("JuanJo Start");
      await page
         .getByRole("textbox", { name: "Email address" })
         .fill("Juan@gmail.es");
      await page
         .getByRole("textbox", { name: "Password" })
         .first()
         .fill("secret123**");
      await page
         .getByRole("textbox", { name: "Repeat password" })
         .fill("secret123**");

      await page.locator(".custom-checkbox").check();
      await page.getByRole("button", { name: "Register" }).click();
      await expect(
         page.locator("ngx-status-card", { hasText: "Light" }),
      ).toContainText("Light");
   });

   test("Log in with a valid username", async ({ page }) => {
      await page.getByRole("link", { name: "Login" }).click();
      const headerMessage = page.getByText("Hello! Log in with your email.");
      await expect(headerMessage).toContainText("Hello!");

      await page
         .getByRole("textbox", { name: "Email address:" })
         .fill("juan@gmail.com");
      await page
         .getByRole("textbox", { name: "Password:" })
         .fill("secret12345");
      await page.locator("span", { hasText: "Remember me" }).check();
      await page.getByRole("button", { name: "LOG IN" }).click();

      await expect(
         page.locator("ngx-status-card", { hasText: "Light" }),
      ).toContainText("Light");
   });

   test("Request password change", async ({ page }) => {
      await page.getByRole("link", { name: "Request Password" }).click();
      const headerMessage = page.getByText("Forgot Password");
      await expect(headerMessage).toHaveText("Forgot Password");

      await page
         .getByRole("textbox", { name: "Enter your email address:" })
         .fill("juan@gmail.es");
      await page.getByRole("button", { name: "REQUEST PASSWORD" }).click();
   });

   test("change password for logged-in user", async ({ page }) => {
      await page.getByRole("link", { name: "Reset Password" }).click();

      const headerMessage = page.getByText("Change password").first();
      expect(headerMessage).toHaveText("Change password");

      await page
         .getByRole("textbox", { name: "New Password:" })
         .fill("secret12**!");
      await page
         .getByRole("textbox", { name: "Confirm Password:" })
         .fill("secret12**!");
      await page.getByRole("button", { name: "Change password" }).click();
   });
});

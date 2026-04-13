import { test, expect } from "@playwright/test";

test.describe("Modals and Overlays component", () => {
   test.beforeEach(async ({ page }) => {
      await page.goto("http://localhost:4200/");
      await page.getByRole("link", { name: "Forms" }).click();
   });

   test("Modals test", async ({ page }) => {
      await page.getByRole("link", { name: "Modal & Overlays" }).click();
      await page.getByRole("link", { name: "Dialog" }).click();

      //Open dialog
      await page
         .getByRole("button", { name: "Open Dialog with component" })
         .click();
      const dialog = page.locator("nb-dialog-container", {
         hasText: "This is a title passed to the dialog component",
      });
      await expect(dialog).toContainText(
         "This is a title passed to the dialog component",
      );
      await page
         .locator("nb-card-footer", { hasText: "Dismiss Dialog" })
         .locator("button")
         .click();

      //Open Without Backdrop
      await page
         .getByRole("button", { name: "OPEN DIALOG WITH BACKDROP" })
         .first()
         .click();
      const dialogBackdrop = page.locator(
         ':text("This is a title passed to the dialog component")',
      );
      await expect(dialogBackdrop).toHaveText(
         "This is a title passed to the dialog component",
      );
      await page
         .locator("nb-card")
         .getByRole("button", { name: "DISMISS DIALOG" })
         .click();

      //Return result from dialog

      for (let index = 0; index <= 10; index++) {
         await page.getByRole("button", { name: "Enter Name" }).click();
         const enterName = page.locator("nb-card");
         await enterName
            .locator("nb-card-body")
            .getByRole("textbox", { name: "Name" })
            .fill("Juanito Star -> " + index);
         await enterName
            .locator("nb-card-footer")
            .getByRole("button", { name: "SUBMIT" })
            .click();
      }
   });

   test("Windows test", async ({ page }) => {
      await page.getByRole("link", { name: "Modal & Overlays" }).click();
      await page.getByRole("link", { name: "Window" }).click();

      //Window Form
      const windowForm = page
         .locator("nb-card")
         .locator("nb-card-header", { hasText: "Window Form" });
      await expect(windowForm).toHaveText("Window Form");
      await page.getByRole("button", { name: "Open window form" }).click();
      await page.getByRole("textbox", { name: "Subject:" }).fill("Subject");
      await page.getByRole("textbox", { name: "Text:" }).fill("Message");
      await page.getByRole("button").filter({ hasText: /^$/ }).nth(3).click();

      //Window Without Backdrop
      await page
         .getByRole("button", { name: "OPEN WINDOW WITH BACKDROP" })
         .click();
      await expect(
         page.getByText("Here is the text provided via"),
      ).toContainText("template");
      await page.getByRole("button").filter({ hasText: /^$/ }).nth(3).click();
   });

   test("Popover test", async ({ page }) => {
      await page.getByRole("link", { name: "Modal & Overlays" }).click();
      await page.getByRole("link", { name: "Popover" }).click();
   });

   test("Toast test", async ({ page }) => {
      await page.getByRole("link", { name: "Modal & Overlays" }).click();
      await page.getByRole("link", { name: "Toast" }).click();
   });

   test("Tooltip test", async ({ page }) => {
      await page.getByRole("link", { name: "Modal & Overlays" }).click();
      await page.getByRole("link", { name: "Tooltip" }).click();
   });
});

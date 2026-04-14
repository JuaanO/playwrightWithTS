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

      //Popover Position
      const titlePopOver = await page.locator("nb-card-header", {
         hasText: "Popover Position",
      });
      await expect(titlePopOver).toHaveText("Popover Position");

      const popOverPosition = await page.locator("nb-card", {
         hasText: "Popover Position",
      });
      await popOverPosition.getByRole("button", { name: "left" }).hover();
      const popOverMessage = await page.locator("nb-popover").textContent();
      expect(popOverMessage).toEqual("Hello, how are you today?");

      //Another solution, lee elegant for working with popovers
      await expect(
         page.locator("nb-overlay-container", {
            hasText: "Hello, how are you today?",
         }),
      ).toHaveText("Hello, how are you today?");

      //Component Popovers
      const componentPopOver = page.locator("nb-card", {
         hasText: "Component Popovers",
      });
      await componentPopOver.getByRole("button", { name: "With tabs" }).click();
      const messagePopOver = page.locator("nb-tab", {
         hasText: " Such a wonderful day! ",
      });
      await expect(messagePopOver).toHaveText("Such a wonderful day!");

      await page.getByRole("link", { name: "Second Tab" }).click();
      await expect(page.getByText("Indeed!")).toHaveText(" Indeed! ");

      //Component Popovers - With Forms
      await componentPopOver.getByRole("button", { name: "With Card" }).click();
      const messageCard = await page
         .getByText("Far far away, behind the word")
         .textContent();
      await expect(messageCard).toContain("Far far away,");
   });

   test("Toast test", async ({ page }) => {
      await page.getByRole("link", { name: "Modal & Overlays" }).click();
      await page.getByRole("link", { name: "Toast" }).click();

      const messageToaster = await page.locator("nb-card-header", {
         hasText: "Toaster configuration",
      });
      expect(messageToaster).toHaveText("Toaster configuration");

      //no elegant solution lol
      await page.getByRole("button", { name: "top-right" }).click();
      await page.getByText("top-start").click();

      //Elegant solution for chaining two clicks
      await Promise.all([
         page.getByRole("button", { name: "top-start" }).click(),
         page.getByText("top-right").click(),
      ]);

      // title toast
      await page.locator('[name="title"]').fill("New value for toast");
      // content toast
      await page.locator('[name="content"]').fill("New message for the toast");
      // time toast
      await page.locator('[name="timeout"]').fill("1000");

      await page.getByRole("button", { name: "SHOW TOAST" }).click();
      const messageToast = await page.locator("nb-toast").textContent();

      //valudation
      expect(messageToast).toContain("New message");
   });

   test("Tooltip test", async ({ page }) => {
      await page.getByRole("link", { name: "Modal & Overlays" }).click();
      await page.getByRole("link", { name: "Tooltip" }).click();

      const messageTooltip = await page
         .locator("nb-card", { hasText: "Tooltip With Icon" })
         .textContent();
      expect(messageTooltip).toContain("Tooltip With Icon");

      await page.getByRole("button", { name: "SHOW TOOLTIP" }).first().hover();
      const hoverTooltip = await page.locator("nb-tooltip").textContent();
      expect(hoverTooltip).toContain("This is a tooltip");
   });
});

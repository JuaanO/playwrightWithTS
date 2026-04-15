import { test, expect } from "@playwright/test";

test.describe("Smart tables", () => {
   test.beforeEach(async ({ page }) => {
      await page.goto("http://localhost:4200/");
      await page.getByRole("link", { name: "Tables & Data" }).first().click();
   });
   test("Add a new username", async ({ page }) => {
      await page.getByRole("link", { name: "Smart Table" }).click();
      const headerTitle = page.getByText("Smart Table").first();
      expect(headerTitle).toContainText("Table");

      const addUser = page.locator(".ng2-smart-action-add-add");
      addUser.click();

      await page
         .locator("input-editor")
         .getByRole("textbox", { name: "ID" })
         .fill("xx35jje");
      await page
         .locator("input-editor")
         .getByRole("textbox", { name: "First Name" })
         .fill("Juan");
      await page
         .locator("input-editor")
         .getByRole("textbox", { name: "Last Name" })
         .fill("Star");
      await page
         .locator("input-editor")
         .getByRole("textbox", { name: "Username" })
         .fill("xxStarJJ");
      await page
         .locator("input-editor")
         .getByRole("textbox", { name: "E-mail" })
         .fill("juan@gmail.com");
      await page
         .locator("input-editor")
         .getByRole("textbox", { name: "age" })
         .fill("35");

      await page.locator(".nb-checkmark").click();
   });

   test("Edit a username", async ({ page }) => {
      await page.getByRole("link", { name: "Smart Table" }).click();

      const recordToEdit = page
         .getByRole("table")
         .locator("tr", { hasText: "twitter@outlook.com" })
         .locator(".nb-edit");
      await recordToEdit.click();

      await page
         .locator("input-editor")
         .getByRole("textbox", { name: "ID" })
         .fill("xx35jje");
      await page
         .locator("input-editor")
         .getByRole("textbox", { name: "First Name" })
         .fill("Juan");
      await page
         .locator("input-editor")
         .getByRole("textbox", { name: "Last Name" })
         .fill("Star");
      await page
         .locator("input-editor")
         .getByRole("textbox", { name: "Username" })
         .fill("xxStarJJ");
      await page
         .locator("input-editor")
         .getByRole("textbox", { name: "E-mail" })
         .fill("juan@gmail.com");
      await page
         .locator("input-editor")
         .getByRole("textbox", { name: "age" })
         .fill("35");

      await page.locator(".nb-checkmark").click();
   });

   test("Delete a username", async ({ page }) => {
      await page.getByRole("link", { name: "Smart Table" }).click();

      //Working with native dialogues
      page.on("dialog", (dialog) => {
         expect(dialog.message()).toEqual("Are you sure you want to delete?");
         dialog.accept();
      });

      //delete the first record
      const allButtonsDelete = page.locator(".nb-trash");
      await allButtonsDelete.first().click();

      const deleteButton = page
         .getByRole("table")
         .locator("tr", { hasText: "fat@yandex.ru" })
         .locator(".nb-trash");
      await deleteButton.click();
   });

   test("Search a user by ID", async ({ page }) => {
      await page.getByRole("link", { name: "Smart Table" }).click();

      await page
         .locator("input-filter")
         .getByRole("textbox", { name: "ID" })
         .fill("33");

      const emailToVerify = page.locator("table-cell-view-mode", {
         hasText: "johnstonknight@comtours.com",
      });
      await expect(emailToVerify).toContainText("johnstonknight");
   });

   test("Test for Tree Grid", async ({ page }) => {
      await page.getByRole("link", { name: "Tree Grid" }).click();
      const headerTitle = page.locator("nb-card-body", { hasText: "Search:" });
      await expect(headerTitle).toContainText("Search");

      
   });
});

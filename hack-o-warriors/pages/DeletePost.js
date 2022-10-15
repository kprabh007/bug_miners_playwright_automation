import { expect } from "@playwright/test";
const deletePostHdr = "xpath=//h2[contains(text(),'Are you sure')]";
const deletePostBtn = "xpath=//button[text()='Delete']";
const cancelDeletePostBtn = "xpath=//button[text()='Cancel']";

class DeletePostPage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Validate if delete post header is displayed.
   */
  async isDeletePostHeaderDisplayed() {
    console.log(`Validate if delete post header is displayed.`);
    await expect(this.page.locator(deletePostHdr)).toBeVisible();
  }

  /**
   * Validate if delete post button is displayed.
   */
  async isDeletePostButtonDisplayed() {
    console.log(`Validate if delete post button is displayed.`);
    await expect(this.page.locator(deletePostBtn)).toBeVisible();
  }
  /**
   * Validate if cancel button is displayed in delete post pop up.
   */
  async isDeletePostCancelbuttonDisplayed() {
    console.log(
      `Validate if cancel button is displayed in delete post pop up.`
    );
    await expect(this.page.locator(cancelDeletePostBtn)).toBeVisible();
  }

  /**
   * Delete the post
   */
  async deletePost() {
    console.log(`Delete the post`);
    await this.page.locator(deletePostBtn).click();
  }
}
module.exports = DeletePostPage;

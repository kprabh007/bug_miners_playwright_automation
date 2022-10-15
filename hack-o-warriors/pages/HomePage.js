import { expect } from "@playwright/test";

//sections
const profileSection = ".profile";
const postConatinerSection = ".myPostContainer";
const activitySection = ".activitySection";
const similarSection = ".similarSection";

const userName = ".profileName";
const userRole = ".profileDesignation";

//post
const postInput = "id=emailInput";
const postButton = "text=Post";

//icons
const deleteIcon = ":nth-match(:text('Delete'), 1)";
const deleteIcon2 = "xpath=//*[@data-testid ='DeleteIcon' ]";
const bookmarkIcon = ":nth-match(:text('Bookmark'), 1)";
const filterIcon = ":nth-match(:text(' Filters'), 1)";
const filterByBXDIcon = ":nth-match(:text(' BXD'), 1)";

class Homepage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Validate Homepage
   */
  async validateHomePage() {
    console.log(`Validate homepage to confirm succesful login`);
    (await this.isProfileSectionDisplayed()) &&
      (await this.isPostContainerSectionDisplayed()) &&
      (await this.isActivitySectionDisplayed()) &&
      (await this.isSimilarSectionDisplayed());
  }

  /**
   * Validate if profile section is displayed.
   */
  async isProfileSectionDisplayed() {
    console.log(`Validate if profile section is displayed.`);
    await expect(this.page.locator(profileSection)).toBeVisible();
  }

  /**
   * Validate if post container section is displayed.
   */
  async isPostContainerSectionDisplayed() {
    console.log(`Validate if post container section is displayed.`);
    await expect(this.page.locator(postConatinerSection)).toBeVisible();
  }
  /**
   * Validate if activity section is displayed.
   */
  async isActivitySectionDisplayed() {
    console.log(`Validate if activity section is displayed.`);
    await expect(this.page.locator(activitySection)).toBeVisible();
  }
  /**
   * Validate if Similar section is displayed.
   */
  async isSimilarSectionDisplayed() {
    console.log(`Validate if Similar section is displayed.`);
    await expect(this.page.locator(similarSection)).toBeVisible();
  }
  /**
   * Creating a post
   * @param {String} post
   */
  async enterPostInTextBox(post) {
    await this.page.locator(postInput).fill(post);
  }

  /**
   * Click on Post button
   */
  async clickPostButton() {
    console.log(`Click on Post button`);
    await this.page.click(postButton, { force: true });
  }

  async createAPost(post) {
    console.log(`Creating a post`);
    await this.enterPostInTextBox(post);
    await this.clickPostButton();
  }

  async likeAPost() {
    console.log(`Like a post`);
  }

  /**
   * Click on filter button
   */
  async clickFilterButton() {
    console.log(`Click on filter button`);
    await this.page.click(filterIcon);
  }

  /**
   * Click on delete button
   */
  async clickDeleteIcon() {
    console.log(`Click on delete Icon to delete a post`);
    await this.page.click(deleteIcon);
  }

  async clickFilterByBXD() {
    console.log(`Filter post by BXD`);
    await this.page.click(filterByBXDIcon);
  }

  /**
   * Validate user name
   */
  async validateName(fName, lName) {
    console.log(`Validating user name`);
    expect(await this.page.locator(userName)).toContainText(fName);
    expect(await this.page.locator(userName)).toContainText(lName);
  }

  /**
   * Validate user role
   */
  async validateRole(role) {
    console.log(`Validating user role`);
    expect(await this.page.locator(userRole)).toContainText(role);
  }
}

module.exports = Homepage;

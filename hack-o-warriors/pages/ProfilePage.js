import { expect } from "@playwright/test";

//Locators
const signInLbl = "xpath=//label[contains(text(), 'Sign In')]";

//input
const emailTxt = "id=emailInput";
const passwordTxt = "id=passwordInput";

//Button
const signInBtn = "xpath=//button[text()= 'Sign In']";

//Link Text
const forgotPasswordLtxt = "xpath=//div[contains(text(),'Forgot Password')]";
const registerNowLtxt = "xpath=//div[contains(text(),'Register')]";

//Plain Text
const noAccountTxt = "xpath=//div[contains(text(),'account?')]";
const topicHeaderTxt = ".topicHeader";
const topicSummaryTxt = ".topicSummary";

//visual validations
const appHeaderLeft = "css=.appHeaderLeft";
const appHeaderRight = "css=.appHeaderRight";
const leftPanel = "xpath= //div[contains(@class, 'loginLeft')]";
const rightPanel = "xpath= //div[contains(@class, 'loginRight')]";

class ProfilePage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Launch application
   */
  async launchApplication() {
    await this.page.goto("/");
  }

  /**
   * Validate if Sign In label is displayed.
   */
  async isSignInLabelVisible() {
    console.log(`Validate if Sign In label is displayed.`);
    await expect(this.page.locator(signInLbl)).toBeVisible();
  }
  /**
   * Validate if left section is displayed.
   */
  async isLeftSectionLabelVisible() {
    console.log(`Validate if left section is displayed.`);
    await expect(this.page.locator(leftPanel)).toBeVisible();
  }
  /**
   * Validate if right section label is displayed.
   */
  async isRightSectionLabelVisible() {
    console.log(`Validate if right section is displayed.`);
    await expect(this.page.locator(rightPanel)).toBeVisible();
  }

  /**
   * Validate if topic header and topic summary is displayed.
   */
  async isTopicHeaderAndSummaryVisible() {
    console.log(`Validate if topic header and topic summary is displayed.`);
    (await expect(this.page.locator(topicHeaderTxt)).toBeVisible()) &&
      (await expect(this.page.locator(topicSummaryTxt)).toBeVisible());
  }

  /**
   * Validate if app header is displayed correctly in navbar
   * @param {appHeader} username
   */
  async isNavbarAppHeaderDisplayedCorrect(appHeader) {
    console.log(`Validate if app header is displayed correctly in navbar`);
    await expect(appHeaderLeft).toHaveText(appHeader);
  }

  /**
   * Validate if navbar icons are displayed
   */
  async isNavBarIconsDisplayed() {
    console.log(`Validate if navbar icons are displayed`);
    await expect(this.page.locator(appHeaderRight)).toBeVisible();
  }

  /**
   * Validate if Forgot Password link is displayed.
   */
  async isForgotPasswordLinkVisible() {
    console.log(`Validate if Forgot Password link is displayed.`);
    await expect(this.page.locator(forgotPasswordLtxt)).toBeVisible();
  }

  /**
   * Validate if Don't have an account label and Register Now link is displayed.
   */
  async isRegisterNewAccountLinkVisible() {
    console.log(
      `Validate if Don't have an account label and Register Now link is displayed.`
    );
    (await expect(this.page.locator(forgotPasswordLtxt)).toBeVisible()) &&
      (await expect(this.page.locator(noAccountTxt)).toBeVisible()) &&
      (await expect(this.page.locator(registerNowLtxt)).toBeVisible());
  }

  /**
   * Enter the username
   * @param {String} username
   */
  async enterUserName(username) {
    console.log(`Entering the username : ${username}`);
    await this.page.fill(emailTxt, username);
  }

  /**
   * Enter the password
   * @param {String} password
   */
  async enterPassword(password) {
    console.log(`Entering the password.....`);
    await this.page.fill(passwordTxt, password);
  }

  /**
   * Click on Sign In button
   */
  async clickSignIn() {
    console.log(`Click on Sign In button`);
    await this.page.click(signInBtn);
  }
}

module.exports = ProfilePage;

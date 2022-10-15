import { expect } from "@playwright/test";
//locators

const signUpSectionHeader = "text=Sign Up";

//input
const firstNameTxt =
  "xpath=//label[text() = 'Firstname']/following-sibling::div//input";
const lastNameTxt =
  "xpath=//label[text() = 'Lastname']/following-sibling::div//input";
const emailTxt =
  "xpath=//label[text() = 'Email Id']/following-sibling::div//input";
const passwordTxt =
  "xpath=//label[text() = 'Password']/following-sibling::div//input";
const phoneNumberTxt =
  "xpath=//label[text() = 'Phone Number']/following-sibling::div//input";
const roleDD = "xpath=//label[text() = 'Role']/following-sibling::div//input";

const registerBtn = "text=Register";

class SignUpPage {
  constructor(page) {
    this.page = page;
  }

  /**
   * Validate if Sign Up section is displayed.
   */
  async isSignUpSectionHeaderVisible() {
    console.log(`Validate if Sign Up section is displayed.`);
    await expect(this.page.locator(signUpSectionHeader)).toBeVisible();
  }

  /**
   * Enter the firstname
   * @param {String} fname
   */
  async enterFirstName(fname) {
    console.log(`Entering the firstname : ${fname}`);
    await this.page.fill(firstNameTxt, fname);
  }

  /**
   * Enter the lastname
   * @param {String} lname
   */
  async enterLastName(lname) {
    console.log(`Entering the lastname : ${lname}`);
    await this.page.fill(lastNameTxt, lname);
  }

  /**
   * Enter the Email Id
   * @param {String} email
   */
  async enterEmailId(email) {
    console.log(`Entering the Email Id : ${email}`);
    await this.page.fill(emailTxt, email);
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
   * Enter the Phone number
   * @param {String} phone
   */
  async enterPhoneNumber(phone) {
    console.log(`Entering the Phone number : ${phone}`);
    await this.page.fill(phoneNumberTxt, phone);
  }
  /**
   * Select the role
   * @param {String} role
   */
  async selectRole(role) {
    console.log(`Selecting the role : ${role}`);
    await this.page.fill(roleDD, role);
  }

  /**
   * Click on Register button
   */
  async clickRegisterButton() {
    console.log(`Click on Register button`);
    await this.page.click(registerBtn, { force: true });
  }
}

module.exports = SignUpPage;

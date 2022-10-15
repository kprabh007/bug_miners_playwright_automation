import { test, expect } from "@playwright/test";
import { allure, LabelName } from "allure-playwright";

const LoginPage = require("../pages/LoginPage");
const HomePage = require("../pages/HomePage");
const SignUpPage = require("../pages/SignUpPage");
const { generateUser } = require("../util/randomGenerator");

let loginPage;
let homePage;
let signUpPage;

test.describe.serial("New user test cases", () => {
  const user = generateUser();
  test.beforeAll(async () => {
    console.log(`Test Suite execution started`);
  });

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.launchApplication();
  });

  test.afterAll(async () => {
    console.log(`Test Suite execution ended`);
  });

  test("Verify if user is able to register a new account", async ({ page }) => {
    loginPage = new LoginPage(page);

    await test.step("Go to Registration page and validate Sign up page", async () => {
      await loginPage.goToRegisterNewUserPage();
      signUpPage = new SignUpPage(page);
      await signUpPage.isSignUpSectionHeaderVisible();
    });

    await test.step("Provide details and register", async () => {
      signUpPage = new SignUpPage(page);
      await signUpPage.enterFirstName(user.firstName);
      await signUpPage.enterLastName(user.lastName);
      await signUpPage.enterEmailId(user.email);
      await signUpPage.enterPassword(user.password);
      await signUpPage.enterPhoneNumber(user.phone);
      await signUpPage.selectRole(user.role);
      await signUpPage.clickRegisterButton();
      loginPage = new LoginPage(page);
      await loginPage.isSignInLabelVisible();
    });
  });

  test("Verify Login with registered acocunt ", async ({ page }) => {
    loginPage = new LoginPage(page);
    await test.step("Precondition: login into app", async () => {
      await loginPage.loginToApp(user.email, user.password);
      homePage = new HomePage(page);
      await homePage.validateHomePage();
    });

    await test.step("Go to Profile section to validate details", async () => {
      homePage = new HomePage(page);
      await homePage.validateName(user.firstName, user.lastName);
      await homePage.validateRole(user.role);
    });
  });
});

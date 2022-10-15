import { test, expect } from "@playwright/test";
import { allure, LabelName } from "allure-playwright";

const LoginPage = require("../pages/LoginPage");
const HomePage = require("../pages/HomePage");
const { LoginTest: TEST_DATA } = require("../data/testdata.json");

let loginPage;
let homePage;
const PAGE_HEADER = "Arena 4 All";

test.describe("Login test cases", () => {
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

  test("Verify if user is able to login successfully", async ({ page }) => {
    loginPage = new LoginPage(page);

    await test.step("Enter credentials and login", async () => {
      await loginPage.enterUserName(TEST_DATA.USERNAME);
      await loginPage.enterPassword(TEST_DATA.PASSWORD);
      await loginPage.clickSignInButton();
    });

    await test.step("Verify successful login", async () => {
      homePage = new HomePage(page);
      await homePage.isProfileSectionDisplayed();
      await homePage.isPostContainerSectionDisplayed();
    });
  });

  test("Validate UI part", async ({ page }) => {
    loginPage = new LoginPage(page);
    await test.step("Validate Navbar contents", async () => {
      await loginPage.isTopicHeaderAndSummaryVisible();
      await loginPage.isNavbarAppHeaderDisplayedCorrect(PAGE_HEADER);
      await loginPage.isNavBarIconsDisplayed();
    });

    await test.step("Validate left and right sections", async () => {
      loginPage = new LoginPage(page);
      await loginPage.isLeftSectionLabelVisible();
      await loginPage.isRightSectionLabelVisible();
    });

    await test.step("Validate Sign In Form headers and contents", async () => {
      loginPage = new LoginPage(page);
      await loginPage.isSignInLabelVisible();
      await loginPage.isForgotPasswordLinkVisible();
      await loginPage.isRegisterNewAccountLinkVisible();
    });
  });
});

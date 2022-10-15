import { test, expect } from "@playwright/test";
import { allure, LabelName } from "allure-playwright";

const LoginPage = require("../pages/LoginPage");
const HomePage = require("../pages/HomePage");
const DeletePostPage = require("../pages/DeletePost");
const { createASentence } = require("../util/createPost");
const { LoginTest: TEST_DATA } = require("../data/testdata.json");

let loginPage;
let homePage;
let deletePostPage;

test.describe.serial("Post test cases", () => {
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

  test("Verify if user is able to create a new post", async ({ page }) => {
    loginPage = new LoginPage(page);

    await test.step("Precondition: login into app", async () => {
      await loginPage.loginToApp(TEST_DATA.USERNAME, TEST_DATA.PASSWORD);
      homePage = new HomePage(page);
      await homePage.validateHomePage();
    });

    await test.step("Create a Post", async () => {
      let postText = createASentence();
      homePage = new HomePage(page);
      await homePage.createAPost(postText);
    });
  });

  test("Verify delete a post functionality ", async ({ page }) => {
    loginPage = new LoginPage(page);
    await test.step("Precondition: login into app", async () => {
      await loginPage.loginToApp(TEST_DATA.USERNAME, TEST_DATA.PASSWORD);
      homePage = new HomePage(page);
      await homePage.validateHomePage();
    });

    await test.step("Delete post", async () => {
      homePage = new HomePage(page);
      await homePage.clickDeleteIcon();
      deletePostPage = new DeletePostPage(page);
      await deletePostPage.isDeletePostHeaderDisplayed();
      await deletePostPage.isDeletePostButtonDisplayed();
      await deletePostPage.isDeletePostCancelbuttonDisplayed();
      await deletePostPage.deletePost();
      await homePage.validateHomePage();
    });
  });
});

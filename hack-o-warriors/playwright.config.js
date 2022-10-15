const { devices } = require("@playwright/test");

const config = {
  testDir: "./tests",
  timeout: 30 * 1000,
  expect: {
    timeout: 30000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 2,

  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ["list"],
    ["html", { outputFolder: "html-report", open: "never" }],
    [
      "allure-playwright",
      { detail: true, outputFolder: "allure-results", suiteTitle: false },
    ],
  ],
  use: {
    actionTimeout: 0,
    baseURL: "https://hack-o-warriors.netlify.app",
    trace: "on-first-retry",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "Chrome Browser",
      testDir: "tests/",
      timeout: 360 * 1000,
      use: {
        ...devices["chromium"],
        //channel: "msedge",
        headless: false,
        screenshot: "on",
        video: "retain-on-failure",
      },
    },

    {
      name: "Firefox Browser",
      use: {
        ...devices["Desktop Firefox"],
        screenshot: "on",
        video: "retain-on-failure",
      },
    },

    {
      name: "Safari Browser",
      use: {
        ...devices["Desktop Safari"],
        screenshot: "on",
        video: "retain-on-failure",
      },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

module.exports = config;

//Importing the Test and Expect functions from the @playwright/test module
const { test, expect } = require("@playwright/test");

//1. Create a new test case- To test the login functionality of the application - Happy Flow
test("Test that user can successfully log in", async ({ page }) => {
  test("Login Test", async ({ page }) => {
    //Opening the login page
    await page.goto("");

    //Fill in  the username field
    await page.getByPlaceholder("").fill("");

    //Fill in the password field
    await page.locator("").fill("");

    //Click the login button
    await page.getByRole().click();

    //Assert that the login was successful -
    await expect(page.locator("")).toHaveText("Welcome, Denise!");
  });
});

//2. Create test case for when a users try to login with the incorrect password
test("Test that a user with a incorrect password cannot log in", async ({
  page,
}) => {
  //Opening the login page
  //Fill in  the username field
  //Fill in the password field
  //Click the login button
  //Asset that the user could not login and the correct message is displayed
});

//3. Third Test Case - Any ideas??

//Importing the Test and Expect functions from the @playwright/test module
const { test, expect } = require("@playwright/test");

test("Test that user can successfully log in", async ({ page }) => {
  //Opening the login page
  await page.goto("http://www.uitestingplayground.com/sampleapp");

  //Fill in  the username field
  await page.getByPlaceholder("User Name").fill("Denise");

  //Fill in the password field
  await page.locator('input[type="password"]').fill("pwd");

  //Click the login button
  await page.getByRole("button", { name: "Log In" }).click();

  //Assert that the login was successful
  await expect(page.locator("#loginstatus")).toHaveText("Welcome, Denise!");
});

//2. Create test case for Wrong Passwords
test("Login Test - Wrong Password", async ({ page }) => {
  //Opening the login page
  await page.goto("http://www.uitestingplayground.com/sampleapp");

  //Fill in  the username field
  await page.getByPlaceholder("User Name").fill("Denise");

  //Fill in the password field
  await page.locator('input[type="password"]').fill("1234");

  //Click the login button
  await page.locator("#login").click();

  //Asset that the user could not login and the correct message is displayed
  await expect(page.locator("#loginstatus")).toHaveText(
    "Invalid username/password"
  );
});

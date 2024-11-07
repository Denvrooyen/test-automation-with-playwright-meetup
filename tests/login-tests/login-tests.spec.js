//Importing the Test and Expect functions from the @playwright/test module
const { test, expect } = require("@playwright/test");

//1. Create a new test case- To test the login functionality of the application - Happy Flow
test("Login Test", async ({ page }) => {
  //Opening the login page
  //Fill in  the username field
  //Fill in the password field
  //Clicking the login button
  //Assert that the login was successful
});

//2. Create test case for Wrong Passwords
test("Login Test - Wrong Password", async ({ page }) => {
  //Opening the login page
  //Fill in  the username field
  //Fill in the password field
  //Click the login button
  //Asset that the user could not login and the correct message is displayed
});

//3. Create test case for No username - Check required field validation

//4. Create test case for Log out test

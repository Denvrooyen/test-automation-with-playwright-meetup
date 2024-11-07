//Import the Expect Function from the @playwright/test module as we will be using this in our class
import { expect } from "@playwright/test";

//Build our class - we will be exporting to our Playwright test file
export class LoginPage {
  //Every time we create a new class we need to create a constructor which is an Object that contains all our locators
  constructor(page) {
    //Within the constructor we have to have a page fixture
    this.page = page;

    //We will create locators for all the elements we will be interacting with
    this.userNameField = page.locator('input[placeholder="User Name"]');
    this.passwordField = page.locator('input[type="password"]');
    this.loginButton = page.locator("#login");
    this.loginStatus = page.locator("#loginstatus");
  }

  //We will create a methods for each action we want to perform on the page, and that we can reuse across our tests
  async openLoginPage() {
    await this.page.goto("http://www.uitestingplayground.com/sampleapp");
  }

  //Create a resuable method to fill in the username field so instead of using a static value here we will pass the value from our test
  async fillUserName(userName) {
    await this.userNameField.fill(userName);
  }

  //Create a resuable method to fill in the password field so instead of using a static value here we will pass the value from our test
  async fillPassword(password) {
    await this.passwordField.fill(password);
  }

  async clickLoginButton() {
    await this.loginButton.click();
  }

  async expectLoginStatus(expectedStatus) {
    await expect(this.loginStatus).toHaveText(expectedStatus);
  }
}

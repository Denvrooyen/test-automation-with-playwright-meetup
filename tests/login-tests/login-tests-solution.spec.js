//Importing the Test and Expect functions from the @playwright/test module
const { test, expect } = require('@playwright/test');
//Import the LoginPage class from the login-page.model.js file
import { LoginPage } from "../../pages/login-page.model";

test('Login Test', async ({ page }) => {
     //Opening the login page
     await page.goto('http://www.uitestingplayground.com/sampleapp');

     //Fill in  the username field
     await page.getByPlaceholder('User Name').fill('Denise');
 
     //Fill in the password field
     await page.locator('input[type="password"]').fill('pwd');
 
     //Click the login button
     await page.locator('#login').click();
 
     //Assert that the login was successful
     await expect(page.locator('#loginstatus')).toHaveText('Welcome, Denise!');
});

test('Login Test - Using Page Object Model', async ({ page }) => {
    //Creating a new instance of the LoginPage class - this allows us  to access the methods and properties defined in the LoginPage class
    const loginPage = new LoginPage(page);

    //Opening the login page
    await loginPage.openLoginPage();

    //Fill in  the username field
    await loginPage.fillUserName('Denise');

    //Fill in the password field
    await loginPage.fillPassword('pwd');

    //Click the login button
    await loginPage.clickLoginButton();

    //Assert that the login was successful
    await loginPage.expectLoginStatus('Welcome, Denise!');
});

//2. Create test case for Wrong Passwords
test('Login Test - Wrong Password', async ({ page }) => {
    //Opening the login page
    await page.goto('http://www.uitestingplayground.com/sampleapp');

    //Fill in  the username field
    await page.getByPlaceholder('User Name').fill('Denise');
  
    //Fill in the password field
    await page.locator('input[type="password"]').fill('1234');

    //Click the login button
    await page.locator('#login').click();

    //Asset that the user could not login and the correct message is displayed
    await expect(page.locator('#loginstatus')).toHaveText('Invalid username/password');

});
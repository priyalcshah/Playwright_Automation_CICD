//function to Login into the application and select sports

const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('Browser Playwright test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://sfaplay.com/championship/login");
});

test('Page Playwright test', async ({ page }) => {
    // Go to the login page
    await page.goto("https://sfaplay.com/championship/login");

    // Verify the page title
    console.log(await page.title());
    await expect(page).toHaveTitle("SFA Championship");

    // Fill in the mobile number
    await page.locator('input[name="mobile_number"]').last().fill('9999999893');
    
    // Click the 'Get OTP' button
    //await page.locator('button[label="Register"]').click();
    await page.getByRole('button',{name :'Register'}).click();
    await expect(page).toHaveURL('https://sfaplay.com/championship/2024/Pune/registration/athlete/5fc190ef-a5e3-4102-887b-a8b263963e88');
});

// Import Playwright module/package annotation from the node module
const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('Browser Playwright test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://sfaplay.com/championship/login");
});

test.only('Page Playwright test', async ({ page }) => {
    // Go to the login page
    await page.goto("https://stage.sfaplay.com/championship/login");

    // Verify the page title
    console.log(await page.title());
    await expect(page).toHaveTitle("SFA Championship");

    // Fill in the mobile number
    await page.locator('input[name="mobile_number"]').first().fill('9999999892');
        
    // Click the 'Get OTP' button
    //await page.locator('button:has-text("Get OTP")').click();
    await page.getByRole('button',{name:'Get OTP'}).click();

    // Fill in the OTP
    await page.locator('input[name="otp"]').fill('1042');
    
    // Click the 'Submit OTP' button
    //await page.locator('button:has-text("Submit OTP")').click();
    await page.getByRole('button', {name : 'Submit OTP'}).click()

    // Verify the URL after login
    await expect(page).toHaveURL("https://stage.sfaplay.com/championship/athlete-profile");

    // Click 'Add more sport' button
    //await page.locator('button:has-text("Add more sport")').click();
      await page.getByRole('button', {name : 'Add more sport'}).click();

    // Verify the heading on the page
   // await expect(page.locator('.container h1')).toContainText('Pune 2024 Championship');
    await expect(page.locator('button:has-text("Athletics")')).toContainText('Athletics');

    // Click dropdown to select sport

    // Open the dropdown by clicking on it
    //await page.locator('button:has-text("Athletics")').click();
    await page.getByRole('button',{name:'Athletics'}).click();
    await page.locator('ul li').filter({hasText:'Kho Kho'}).click();
    //await page.getByRole('button',{name:'All'}).click();
    //await page.locator('button:has-text("All")').click();
    
    await page.locator('ul li').filter({hasText:'u-14'}).click();
    await page.getByRole('button',{name:'All Events'}).click();
    await page.locator('ul li').filter({hasText:'Kho Kho'}).click();
      
})
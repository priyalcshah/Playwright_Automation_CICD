// Import Playwright module/package annotation from the node module
const { test, expect } = require('@playwright/test');
const exp = require('constants');
const { text } = require('stream/consumers');

/*test('Browser Playwright test', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://sfaplay.com/championship/login");
});*/

let fname = "Automation User One";
let lname = "Chopra";
const otp = "1042";
const email = "priyal.shah@sfaplay.com";
const monthNumber = "06";
const date = "11";
const year = "2011";

 // Replace with actual selector



test.only('Athlete Registration', async ({ page }) => {
            

    const mobileNumberInputSelector = 'input[name="mobile_number"]';
// Function to increment mobile number using a loop
    async function incrementMobileNumberInLoop(page, initialMobileNumber, iterations) {
    let mobileNumber = initialMobileNumber; // Starting mobile number
  
    for (let i = 0; i < iterations; i++) {
      console.log(`Iteration ${i + 1}: Current mobile number: ${mobileNumber}`);
  
      // Increment the mobile number
      mobileNumber = (Number(mobileNumber) + 1).toString();
  
      // Fill the mobile number back into the input field
      await page.locator(mobileNumberInputSelector).last().fill(mobileNumber);
  
      // Optionally, wait for some UI response or validation here
    }
  
    console.log("Final incremented mobile number:", mobileNumber);
  }
  
  (async () => {
    const { chromium } = require('playwright');
    const browser = await chromium.launch();
    const page = await browser.newPage();
  
    // Navigate to your target website
    await page.goto("https://stage.sfaplay.com/championship/login");
    await page.locator('img[src*="Y86a+N0oH5AQCFwuFwuIPif4/9k="]').click();
  
  
    // Call the function to increment the mobile number by 5 times (example)
    await incrementMobileNumberInLoop(page, '9999990001', 5);

  

  })();
  await page.getByRole('button',{name :'Register'}).click();
  console.log(await page.title());
  await expect(page).toHaveTitle("SFA Championship");
    
     // Click the 'Get OTP' button
    //await page.locator('button[label="Register"]').click();
   
    //await expect(page).toHaveURL('https://stage.sfaplay.com/championship/2024/Pune/registration/athlete/5fc190ef-a5e3-4102-887b-a8b263963e88');
})
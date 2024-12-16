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
let mobileNumber = "9999999896";
let incrementedMobileNumber = (Number(mobileNumber) + 1).toString();
const otp = "1042";
const email = "priyal.shah@sfaplay.com";
const monthNumber = "06";
const date = "11";
const year = "2011";

test.only('Athlete Registration', async ({ page }) => {
    // Go to the login page
    await page.goto("https://stage.sfaplay.com/championship/login");

    // Verify the page title
    console.log(await page.title());
    await expect(page).toHaveTitle("SFA Championship");

    await page.locator('img[src*="Y86a+N0oH5AQCFwuFwuIPif4/9k="]').click();
    // Convert the string to a number, increment by 1, then convert back to a string
    

    // Fill in the mobile number
    await page.locator('input[name="mobile_number"]').last().fill(incrementedMobileNumber);
  
    
    // Click the 'Get OTP' button
    //await page.locator('button[label="Register"]').click();
    await page.getByRole('button',{name :'Register'}).click();
    await expect(page).toHaveURL('https://stage.sfaplay.com/championship/2024/Pune/registration/athlete/5fc190ef-a5e3-4102-887b-a8b263963e88');

    await page.getByText('Step 1: Your Details').click();
    await page.locator('input[name="first_name"]').fill(fname);
    //await page.getByLabel('Student First Name').fill('Prem')
    //await page.getByLabel('Surname').fill('Chopra')
    await page.locator('input[name="last_name"]').fill(lname);
   
    await page.locator('input.autocomplete-input').pressSequentially('Chi');
    await page.getByText("The Orchid School, Baner").click();

    await page.locator('button:has-text("Select Gender")').click();
    await page.locator('ul li').filter({hasText:'Female'}).click();
    //await page.locator('span:has-text("female")').click();

    await page.getByPlaceholder('DD-MM-YYYY').click();
    await page.locator('.rdtSwitch').click();
    await page.locator('.rdtSwitch').click();
    await page.locator('.rdtPrev').click();
    await page.getByText(year).click();
    await page.locator('.rdtMonth').nth(Number(monthNumber)-1).click();
    await page.locator('td[data-value="'+date+'"]').click();

    // Assertion: Verify that the correct date is selected
    const selectedDate = await page.getByPlaceholder('DD-MM-YYYY').inputValue(); // get the value from the date input field
    const expectedDate = `${date}-${monthNumber}-${year}`;
    expect(selectedDate).toBe(expectedDate); 

    await page.locator('input[value="NRI"]').click();
    await page.getByPlaceholder('Email').fill(email);

    await page.getByRole('button',{name : "GET OTP"}).click();
    await page.locator('input[name="otp"]').fill(otp);
    await page.locator('button:has-text("Confirm & Proceed")').click();

    await page.getByText('Step 1: Your Details').click();
    await page.getByRole('button',{name : "SUBMIT"}).click();
    

    await page.getByText('Step 2: Select Sport Event').click();
    await page.getByRole('button',{name:'Athletics'}).click();
    await page.locator('ul li').filter({hasText:'Kho Kho'}).click();
    await page.locator('h5:has-text("Kho Kho U-14")').click();
    
    await page.getByText('Step 4: Review & checkout').click();
    const bool = await page.locator('grid grid-cols-12 gap-5 p-4').isVisible();
    expect(bool).toBeTruthy
    await page.locator('input[type="checkbox"]').last().click();

    await page.getByRole('button',{name:'Continue To Payment'}).click();
    await page.locator('.razorpay-checkout-frame').contentFrame().getByText('Netbanking', { exact: true }).click();
    await page.locator('.razorpay-checkout-frame').contentFrame().getByRole('button', { name: 'ICICI Bank ICICI Bank' }).first().click();
    await page.getByRole('button', { name: 'Success' }).click();
    await page.getByRole('button', { name: 'Ok' }).click();
    await page.locator('img.profile-img').last().click();
    await page.locator('[href*="my-orders"]').click();

    await page.locator('p:has-text("WITHDRAW PARTICIPATION")').first().isVisible();
    await page.locator('p:has-text("WITHDRAW PARTICIPATION")').first().click();
    await page.getByRole('button', { name: 'Cancellation Reason*' }).click();
    await page.getByText('Cancelled Event / sports').click();
    await page.getByRole('button', { name: 'Proceed to Refund' }).click();
   // const sportsOrder = await page.locator('p:has-text("Refund Status: Processed")').first().isVisible();
   await page.getByText('Refund Status: Processed').waitFor();
    const finalOrder = await page.getByText('Refund Status: Processed').first().isVisible();
    expect(finalOrder).toBeTruthy();


        
})
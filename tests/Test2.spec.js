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

    await page.locator('img[src*="Y86a+N0oH5AQCFwuFwuIPif4/9k="]').click();

    // Fill in the mobile number
    await page.locator('input[name="mobile_number"]').last().fill('9999999893');
    
    
    // Click the 'Get OTP' button
    //await page.locator('button[label="Register"]').click();
    await page.getByRole('button',{name :'Register'}).click();
    await expect(page).toHaveURL('https://stage.sfaplay.com/championship/2024/Pune/registration/athlete/5fc190ef-a5e3-4102-887b-a8b263963e88');

    await page.locator('button:has-text("Step 1: Your Details")').click();
    await page.locator('input[name="first_name"]').fill("Rajesh");
    
    await page.locator('input[name="last_name"]').fill("Gandhi");
   
    await page.locator('input.autocomplete-input').pressSequentially('Chi');
    await page.getByText("The Orchid School, Baner").click()
    //await page.getByRole("button",{name :"The Orchid School, Baner"}).nth(1).click();
    /*const schoolDropdown =  await page.locator('ul.suggestions-list');
    //await schoolDropdown.waitFor();
    const optionsCount = await schoolDropdown.locator('li').count();
    for(let i=0; i<optionsCount; ++i)
    {
        const text = await schoolDropdown.locator('li').nth(i).textContent();
        if (text === 'The Orchid School, Baner')
        {
            await schoolDropdown.locator('li').nth(i).click();
            break;
        }

    }*/


    await page.locator('span:has-text("Select Gender")').click();
    await page.locator('span:has-text("female")').click();
    //await page.locator('input[name="athlete_nationality"]').last().click();
    await page.locator('input[value="NRI"]').click();
       // await page.locator('input[placeholder="Email"]').fill("priyal.shah@sfaplay.com");
   await page.getByPlaceholder('Email').fill('priyal.shah@sfaplay.com');
    await page.locator('input[name="mobile_number"]').fill('9999999893');
    //await page.locator('input[placeholder="DD-MM-YYYY"]').click();
    await page.locator('button:has-text("Get OTP")').click();
    
    // Fill in the OTP
    await page.locator('input[name="otp"]').fill('1042');
    
    // Click the 'Submit OTP' button
    await page.locator('button:has-text("Submit OTP")').click();

    /*

       // Verify the heading on the page
   // await expect(page.locator('.container h1')).toContainText('Pune 2024 Championship');
    await expect(page.locator('button:has-text("Athletics")')).toContainText('Athletics');

    // Click dropdown to select sport

    // Open the dropdown by clicking on it
    await page.locator('button:has-text("Athletics")').click();
    await page.locator('span:has-text("Badminton")').click();
    await page.locator('h5:has-text("Badminton Singles U-15")').click();
    await page.locator('span:has-text("Step 4: Review & checkout")').click();
    const bool = await page.locator('grid grid-cols-12 gap-5 p-4').isVisible();
    expect(bool).toBeTruthy
    await page.locator('input[type="checkbox"]').last().click();
    await page.locator('button:has-text("Continue To Payment")').click();

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
    const sportsOrder = await page.locator('p:has-text("Refund Status: Processed")').first().isVisible();
    expect(sportsOrder).toBeTruthy();
    await page.pause();
    
    /* const sportName = 'Squash';
    const sports = await page.locator('ul li');
    //const count = sports.count();
    for(let i =0; i < sports; ++i)
    {
        if(await sports.nth(i).textContent() === sportName)
        {
            await sports.nth(i).click();
            break;
        }
    }*/

    // Find all the options and select one based on text
  
    
});

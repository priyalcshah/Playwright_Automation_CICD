const { test, expect, request } = require('@playwright/test');

const loginPayload = {
    username: "9999999892",
    password: "1042",
    otp_login: 1,
    user_type: "",
    type: ""
};

let authToken;

test.beforeAll(async () => {
    const apiContext = await request.newContext();

    // Make the API request and store it in a variable
    const loginResponse = await apiContext.post("https://stage-backend.sfaplay.com/api/auth/login/",  
        {
        json: loginPayload, // Use 'json' to send the payload as JSON
        });

    // Check if the response is successful
    expect(loginResponse.status()).toBeTruthy();
    
    const loginResponseJson = await loginResponse.json(); //Grab the JSON response body in a variable
    authToken = loginResponseJson.access_token; // Save the token to a variable
    console.log(authToken);
});


test('Page Playwright test', async ({ page }) => {

    // Add the token to the local storage  by calling the function
    page.addInitScript(value  => {  
        window.localStorage.setItem('authToken', value);
    }, authToken);

    await page.goto("https://stage.sfaplay.com/championship/login");
    console.log(`Token from beforeAll: ${authToken}`);
    await expect(page).toHaveURL("https://stage.sfaplay.com/championship/login");
        
    
    // Go to the login page
//     await page.goto("https://stage.sfaplay.com/championship/login");
//     console.log(`Token from beforeAll: ${token}`);
//     //Verify the page title
//     console.log(await page.title());
//     await expect(page).toHaveTitle("SFA Championship");

//     // Fill in the mobile number
//     await page.locator('input[name="mobile_number"]').first().fill('9999999892');
        
//     // Click the 'Get OTP' button
//     //await page.locator('button:has-text("Get OTP")').click();
//     await page.getByRole('button',{name:'Get OTP'}).click();
    

//     // Fill in the OTP
//     await page.locator('input[name="otp"]').fill('1042');
    
//     // Click the 'Submit OTP' button
//     //await page.locator('button:has-text("Submit OTP")').click();
//     await page.getByRole('button', {name : 'Submit OTP'}).click()

// //     // Verify the URL after login
// await expect(page).toHaveURL("https://stage.sfaplay.com/championship/athlete-profile");

// //     // Click 'Add more sport' button
await page.locator('button:has-text("Add more sport")').click();
      // await page.getByRole('button', {name : 'Add more sport'}).click();

// //     // Verify the heading on the page
// //    // await expect(page.locator('.container h1')).toContainText('Pune 2024 Championship');
// //     await expect(page.locator('button:has-text("Athletics")')).toContainText('Athletics');

// //     // Click dropdown to select sport

// //       //await page.locator('button:has-text("Athletics")').click();
// //       await page.getByRole('button',{name:'Athletics'}).click();
// //       await page.locator('ul li').filter({hasText:'Badminton'}).click();
// //       await page.locator('h5:has-text("Badminton Singles U-15")').click();
      
// //     //await page.locator('span:has-text("Step 4: Review & checkout")').click();
// //     await page.getByText('Step 4: Review & checkout').click();
// //     const bool = await page.locator('grid grid-cols-12 gap-5 p-4').isVisible();
// //     expect(bool).toBeTruthy
// //     await page.locator('input[type="checkbox"]').last().click();
    
// //     //await page.locator('button:has-text("Continue To Payment")').click();
// //     await page.getByRole('button',{name:'Continue To Payment'}).click();
// //     await page.locator('.razorpay-checkout-frame').contentFrame().getByText('Netbanking', { exact: true }).click();
// //     await page.locator('.razorpay-checkout-frame').contentFrame().getByRole('button', { name: 'ICICI Bank ICICI Bank' }).first().click();
// //     await page.getByRole('button', { name: 'Success' }).click();
// //     await page.getByRole('button', { name: 'Ok' }).click();
// //     await page.locator('img.profile-img').last().click();
// //     await page.locator('[href*="my-orders"]').click();

// //     await page.locator('p:has-text("WITHDRAW PARTICIPATION")').first().isVisible();
// //     await page.locator('p:has-text("WITHDRAW PARTICIPATION")').first().click();
// //     await page.getByRole('button', { name: 'Cancellation Reason*' }).click();
// //     await page.getByText('Cancelled Event / sports').click();
// //     await page.getByRole('button', { name: 'Proceed to Refund' }).click();
// //    // const sportsOrder = await page.locator('p:has-text("Refund Status: Processed")').first().isVisible();
// //    const finalOrder = await page.getByText('Refund Status: Processed').first().isVisible();
// //     expect(finalOrder).toBeTruthy();
// //     await page.pause();
        
});
 

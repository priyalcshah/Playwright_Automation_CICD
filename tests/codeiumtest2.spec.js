//function to register a new athlete

test('codeiumtest2', async ({ page }) => { 
    // Go to the login page
    await page.goto("https://stage.sfaplay.com/championship/login");
    await page.locator('img[src*="Y86a+N0oH5AQCFwuFwuIPif4/9k="]').click();

    // Fill in the mobile number
    await page.locator('input[name="mobile_number"]').last().fill('9999999893');
    
    // Click the 'Get OTP' button
    //await page.locator('button[label="Register"]').click();
    await page.getByRole('button',{name :'Register'}).click();  

    // Fill in the mobile number
    await page.locator('input[name="mobile_number"]').last().fill('9999999893');
    
    // Click the 'Get OTP' button
    //await page.locator('button[label="Register"]').click();
    await page.getByRole('button',{name :'Register'}).click();      
    
});


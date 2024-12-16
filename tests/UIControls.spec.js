const {test, expect} = require('@playwright/test');



test('Login Page', async ({page})=>{

const userName = page.locator('#username');
const userPassword = page.locator('#password');
const loginButton = page.locator('#signInBtn');
const dropdown = page.locator('select.form-control');
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

// credentials
await userName.fill('rahurahulshettyacademy');
await userPassword.fill('learning');

//radio button
await page.locator('#usertype').last().click();
await page.locator('#okayBtn').click();
await expect(page.locator('#usertype').last()).toBeChecked();

//checkbox
await page.locator('#terms').click();
await expect(page.locator('#terms')).toBeChecked();
await page.locator('#terms').uncheck();
expect(await page.locator('#terms').isChecked()).toBeFalsy();

//dropdown
await dropdown.selectOption('Consultant');

//await loginButton.click();
//await page.pause();

})

test('Child Window', async ({browser})=>{

    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentsLink =await page.locator('a[href*=documents-request]');

   const [newPage] = await Promise.all([
        context.waitForEvent('page'),     // Wait for new page and resolve the promise with the new page
        documentsLink.click()             // Click the link
    ])  

    const text = await newPage.locator('.red').first().textContent();
    console.log(text);
    const arrayText = text.split("@");
    const domain = arrayText[1].split(".")[0];
    console.log(domain);

    await page.locator('#username').fill(domain);
    await page.pause()
   
    
})
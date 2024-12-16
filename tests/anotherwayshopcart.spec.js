const {test, expect} = require('@playwright/test');



test('Login', async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();

const email = 'test@sfaplay.com';
// const userEmail = page.locator('#userEmail');
// const userPassword = page.locator('#userPassword');
// const loginButton = page.locator('#login');
// const products =  page.locator('.card-body');
// const productName = 'ZARA COAT 3';

await page.goto("https://rahulshettyacademy.com/client/");

await page.getByPlaceholder('email@example.com').fill(email);
await page.getByPlaceholder('enter your passsword').fill('Password@100');
await page.getByRole('button',{name : "Login"}).click();
await expect(page).toHaveTitle("Let's Shop");

await page.locator('.card-body').first().waitFor();
await page.locator('.card-body').filter({hasText:'ZARA COAT 3'}).getByRole('button', {name:" Add To Cart"}).click();
await page.locator('ul li').getByRole('button', {name:'Cart'}).click();
await page.getByRole("button", {name : 'Checkout'}).click();

await page.getByPlaceholder('Select Country').pressSequentially('Ind');
await page.getByRole('button',{name:'Indo'}).click();
//await page.getByText('PLAC ORDER').click();

await page.getByText('PLACE ORDER').click();
await expect(page.getByText(' Thankyou for the order. ')).toBeVisible();

await page.pause();
})
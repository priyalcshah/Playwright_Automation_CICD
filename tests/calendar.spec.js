const {test, expect} = require('@playwright/test');



test('Calendar', async ({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();

const monthNumber="07";
const year = "2015";
const date = "23"

await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
await page.locator('.products').first().waitFor();
await page.locator('div.react-date-picker__inputGroup').click();
await page.locator('react-calendar__navigation__label__labelText react-calendar__navigation__label__labelText--from').click();
await page.locator('react-calendar__navigation__arrow react-calendar__navigation__prev-button').click();
await page.getByText(year).click();
await page.locator('react-calendar__tile react-calendar__year-view__months__month').nth(Number(monthNumber)-1).click();
await page.locator('td[data-value="'+date+'"]').click();
await page.pause();




});
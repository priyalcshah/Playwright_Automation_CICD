// Import Playwright module
const { test, expect, request } = require('@playwright/test');

let WebContext;

test.beforeAll(async ({ browser }) => {
    // Create a new browser context
    const context = await browser.newContext();
    const page = await context.newPage();

    // Perform the login
    await page.goto("https://stage.sfaplay.com/championship/login");
    await page.locator('input[name="mobile_number"]').first().fill('9999999892');
    await page.getByRole('button', { name: 'Get OTP' }).click();
    await page.locator('input[name="otp"]').fill('1042');
    await page.getByRole('button', { name: 'Submit OTP' }).click();

    // Save the authentication state
    await context.storageState({ path: 'state.json' });

    // Reuse the storage state for further tests
    WebContext = await browser.newContext({ storageState: 'state.json' });

    // Close the original context
    await context.close();
});

test('Verify URL and perform actions', async () => {
    // Use the new context with the saved state
    const page = await WebContext.newPage();

    // Navigate to the profile page
    await page.goto("https://stage.sfaplay.com/championship/athlete-profile");
    console.log(await page.title());

    // // Validate the page title
    // await expect(page).toHaveTitle("SFA Championship");

    // // Perform an action (e.g., click "Add more sport" button)
    // await page.getByRole('button', { name: 'Add more sport' }).click();

    // Close the page after the test
    await page.close();
});

test.afterAll(async () => {
    // Close the reused WebContext
    await WebContext.close();
});

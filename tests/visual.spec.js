const { test, expect } = require('@playwright/test');

const url = 'https://automationexercise.com/';


test('Header UI', async ({ page }) => {

    await page.goto(url);

    await expect(
        page.locator('header')
    ).toHaveScreenshot();

});


test('Navbar UI', async ({ page }) => {

    await page.goto(url);

    await expect(
        page.locator('.shop-menu')
    ).toHaveScreenshot();

});



test('Footer UI', async ({ page }) => {

    await page.goto(url);

    await expect(
        page.locator('footer')
    ).toHaveScreenshot();

});
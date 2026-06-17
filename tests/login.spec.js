const {test, expect} = require('@playwright/test');

test.beforeEach(async ({ page}) => {
    await page.goto('https://www.saucedemo.com/');
})

test('User can login with valid credentials', async ({ page}) => {
    // await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('standard_user');

    await page.getByPlaceholder('Password').fill('secret_sauce');

    await page.locator('#login-button').click();

    await expect(page).toHaveURL(/inventory/);

    // await page.waitForTimeout(3000);

}); 

test('User cannot loginwith invalid credentials', async ({ page}) => {
    // await page.goto('https://www.saucedemo.com/');

    await page.getByPlaceholder('Username').fill('invalid_user');

    await page.getByPlaceholder('Password').fill('invalid_password');

    await page.locator('#login-button').click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();

    // await page.waitForTimeout(3000);
});

test ('User cannot login with emptycredentials', async ({ page}) => {
    // await page.goto('https://www.saucedemo.com/');

    await page.locator('#login-button').click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();

    // await page.waitForTimeout(3000);
}); 




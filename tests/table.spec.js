const {test, expect} = require('@playwright/test');

test.beforeEach(async({page}) => {
    await page.goto('https://demoqa.com/webtables');
});

test('UI', async({ page }) => {
    await page.getByRole('button', {name: 'Add'}).click();

    

    const modal = page.locator('.modal-content');

    await expect(modal.getByText('Registration Form')).toBeVisible();
    await expect(modal.locator('.btn-close')).toBeVisible();
    await expect(modal.getByText('First Name')).toBeVisible();
    await expect(modal.getByText('Last Name')).toBeVisible();
    await expect(modal.getByText('Email')).toBeVisible();
    await expect(modal.getByText('Age')).toBeVisible();
    await expect(modal.getByText('Salary')).toBeVisible();
    await expect(modal.getByText('Department')).toBeVisible();

    await expect(modal.getByPlaceholder('First Name')).toBeVisible();
    await expect(modal.getByPlaceholder('Last Name')).toBeVisible();
    await expect(modal.getByPlaceholder('name@example.com')).toBeVisible();
    await expect(modal.getByPlaceholder('Age')).toBeVisible();
    await expect(modal.getByPlaceholder('Salary')).toBeVisible();
    await expect(modal.getByPlaceholder('Department')).toBeVisible();

    await expect(modal.getByRole('button', {name: 'Submit'})).toBeVisible();
    await page.waitForTimeout(3000);
});

//   test('Validation', async({ page }) => {
//   await page.getByRole('button', { name: 'Log in' }).click();
//   await page.getByRole('button', { name: 'Submit' }).click();
//   const errorMessage = page.locator('.invalid-feedback'); // Change class to match your site
//   await expect(errorMessage).toBeVisible();
//   await expect(errorMessage).toHaveText('This field is required');
// });
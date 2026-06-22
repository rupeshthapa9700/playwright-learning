const {test, expect} = require('@playwright/test');

test.beforeEach(async({page}) => {
    await page.goto('https://demoqa.com/webtables');
});

test('UI', async({ page }) => {
    //Modal Open
    await page.getByRole('button', {name: 'Add'}).click();

    
    //Getting the class name of modal
    const modal = page.locator('.modal-content');

    //Checking texts and close btn are visible 
    await expect(modal.getByText('Registration Form')).toBeVisible();
    await expect(modal.locator('.btn-close')).toBeVisible();
    await expect(modal.getByText('First Name')).toBeVisible();
    await expect(modal.getByText('Last Name')).toBeVisible();
    await expect(modal.getByText('Email')).toBeVisible();
    await expect(modal.getByText('Age')).toBeVisible();
    await expect(modal.getByText('Salary')).toBeVisible();
    await expect(modal.getByText('Department')).toBeVisible();

    //Checking input fields and submit are visible or not
    await expect(modal.getByPlaceholder('First Name')).toBeVisible();
    await expect(modal.getByPlaceholder('Last Name')).toBeVisible();
    await expect(modal.getByPlaceholder('name@example.com')).toBeVisible();
    await expect(modal.getByPlaceholder('Age')).toBeVisible();
    await expect(modal.getByPlaceholder('Salary')).toBeVisible();
    await expect(modal.getByPlaceholder('Department')).toBeVisible();


    await expect(modal.getByRole('button', {name: 'Submit'})).toBeVisible();
    await page.waitForTimeout(3000);
});
//   For validation Check
//   test('Validation', async({ page }) => {
//   await page.getByRole('button', { name: 'Log in' }).click();
//   await page.getByRole('button', { name: 'Submit' }).click();
//   const errorMessage = page.locator('.invalid-feedback'); // Change class to match your site
//   await expect(errorMessage).toBeVisible();
//   await expect(errorMessage).toHaveText('This field is required');
// });

test('Submit', async({page}) => {
    
    const rows = page.locator('tbody, tr');
    const beforeCount = await rows.count();


    await page.getByRole('button', {name: 'Add'}).click();
    await page.getByPlaceholder('First Name').fill('Rupesh');
    await page.getByPlaceholder('Last Name').fill('Thapa');
    await page.getByPlaceholder('name@example.com').fill('rupesh@gmail.com');
    await page.getByPlaceholder('Age').fill('25');
    await page.getByPlaceholder('Salary').fill('5000');
    await page.getByPlaceholder('Department').fill('QA');
    await page.getByRole('button', {name: 'Submit'}).click();

    await expect(page.locator('.modal-content')).not.toBeVisible();

    await expect(page.getByRole('cell', {name: 'Rupesh', exact: true})).toBeVisible();
    await expect(page.getByRole('cell', {name: 'Thapa', exact: true})).toBeVisible();
    await expect(page.getByRole('cell', {name: 'rupesh@gmail.com', exact: true})).toBeVisible();
    await expect(page.getByRole('cell', {name: '25', exact: true})).toBeVisible();
    await expect(page.getByRole('cell', {name: '5000', exact: true})).toBeVisible();
    await expect(page.getByRole('cell', {name: 'QA', exact: true})).toBeVisible();

    const afterCount = await rows.count();
    expect(afterCount).toBe(beforeCount + 1);
    await page.waitForTimeout(3000);


});



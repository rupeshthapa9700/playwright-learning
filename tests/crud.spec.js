const { test, expect } = require('@playwright/test');

 test.beforeEach(async ({ page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/');
 });

 test ('Adding new TODO item', async ({ page}) =>{
    await page.getByPlaceholder('What needs to be done?').fill('Learning Playwright');

    await page.getByPlaceholder('What needs to be done?').press('Enter');

    await expect(page.getByText('Learning Playwright')).toBeVisible();

    await page.waitForTimeout(3000);
 });

 test ('Update TODO item', async ({ page }) => {
    await page.getByPlaceholder('What needs to be done?').fill('Learning Playwright');

    await page.getByPlaceholder('What needs to be done?').press('Enter');

    await page.getByText('Learning Playwright').dblclick();

    await page.locator('.edit').fill('Learning Playwright Updated');

    await page.locator('.edit').press('Enter');

    await expect(page.getByText('Learning Playwright Updated')).toBeVisible();

    await page.waitForTimeout(3000);
 });

 test ('Delete TODO item', async ({ page }) => {
    await page.getByPlaceholder('What needs to be done?').fill('Deleting Playwright');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await page.getByText('Deleting Playwright').hover();
    await page.locator('.destroy').click();

    await expect(page.getByText('Deleting Playwright')).not.toBeVisible();

    await page.waitForTimeout(3000);
 });
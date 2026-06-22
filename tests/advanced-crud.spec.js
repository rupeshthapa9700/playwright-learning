const {test, expect} = require('@playwright/test');

test.beforeEach(async({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/');
});

test ('Add multiple TODO items', async ({ page }) => {
    const todoInput = page.getByPlaceholder('What needs to be done?');

    await todoInput.fill('Learning Playwright');
    await todoInput.press('Enter');

    await todoInput.fill('Learning QA');
    await todoInput.press('Enter');

    await todoInput.fill('Learning Automation');
    await todoInput.press('Enter');

    await expect(page.getByText('Learning Playwright')).toBeVisible();

    await expect(page.getByText('Learning QA')).toBeVisible();

    await expect(page.getByText('Learning Automation')).toBeVisible();

    const items = page.locator('.todo-list li');
    await expect(items).toHaveCount(3);

    await page.waitForTimeout(3000);
});

test ('Edit Specific Item', async({ page }) => {
    const todoInput = page.getByPlaceholder('What needs to be done?');

    await todoInput.fill('Learning Playwright');
    await todoInput.press('Enter');

    await todoInput.fill('Learning QA');
    await todoInput.press('Enter');

    await todoInput.fill('Learning Automation');
    await todoInput.press('Enter');

    const qaItem = page.locator('.todo-list li').filter({hasText: 'Learning QA'});
    await qaItem.dblclick();

    await qaItem.locator('.edit').fill('Advanced QA');
    await qaItem.locator('.edit').press('Enter');

    await expect(page.getByText('Learning Playwright')).toBeVisible();
    await expect(page.getByText('Advanced QA')).toBeVisible();
    await expect(page.getByText('Learning QA')).not.toBeVisible();
    await expect(page.getByText('Learning Automation')).toBeVisible();

    await page.waitForTimeout(3000);
});

test ('Deleting Specific Item', async({ page }) => {
    const todoInput = page.getByPlaceholder('What needs to be done?');

    await todoInput.fill('Learning Playwright');
    await todoInput.press('Enter');

    await todoInput.fill('Learning QA');
    await todoInput.press('Enter');

    await todoInput.fill('Learning Automation');
    await todoInput.press('Enter');

    const automationItem = page.locator('.todo-list li').filter({hasText: 'Learning Automation'});
    await automationItem.hover();

    await automationItem.locator('.destroy').click();

    await expect(page.getByText('Learning Automation')).not.toBeVisible();

    await expect(page.getByText('Learning Playwright')).toBeVisible();

    await expect(page.getByText('Learning QA')).toBeVisible();
    await page.waitForTimeout(3000);
});

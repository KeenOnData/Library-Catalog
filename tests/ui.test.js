const { test , expect} = require('@playwright/test');

test("Verify All Books Links are visible", async ({page}) => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("nav.navbar");
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isAllBookLinkVisible = await allBooksLink.isVisible()
    expect(isAllBookLinkVisible).toBe(true);
})

test("Verify Login Button is visible", async ({page}) => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("nav.navbar");
    const loginButton = await page.$('a[href="/login"]');
    const isLoginButtonVisible = await loginButton.isVisible()
    expect(isLoginButtonVisible).toBe(true);
})
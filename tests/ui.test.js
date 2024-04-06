const { test , expect} = require('@playwright/test');

test("Verify All Books Links are visible", async ({page}) => {
    await page.goto("http://localhost:3000");
    await page.waitForSelector("nav.navbar");
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isAllBookLinkVisible = await allBooksLink.isVisible()
    expect(isAllBookLinkVisible).toBe(true);
})
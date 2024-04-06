const { test , expect} = require('@playwright/test');

const baseURL = "http://localhost:3000"

test("Verify All Books Links are visible", async ({page}) => {
    await page.goto(baseURL);
    await page.waitForSelector("nav.navbar");
    const allBooksLink = await page.$('a[href="/catalog"]');
    const isAllBookLinkVisible = await allBooksLink.isVisible()
    expect(isAllBookLinkVisible).toBe(true);
})

test("Verify Login Button is visible", async ({page}) => {
    await page.goto(baseURL);
    await page.waitForSelector("nav.navbar");
    const loginButton = await page.$('a[href="/login"]');
    const isLoginButtonVisible = await loginButton.isVisible()
    expect(isLoginButtonVisible).toBe(true);
})

test("Verify Register Button is visible", async ({page}) => {
    await page.goto(baseURL);
    await page.waitForSelector("nav.navbar");
    const registerButton = await page.$('a[href="/register"]');
    const isRegisterButtonVisible = await registerButton.isVisible()
    expect(isRegisterButtonVisible).toBe(true);
})

test("Verify All Books links is visible after user logged in", async ({page}) => {
    await page.goto(baseURL);
    await page.waitForSelector("nav.navbar");

    await page.click('a[href="/login"]');
    await page.fill('#email', 'peter@abv.bg');
    await page.fill('#password', "123456");
    await page.click('#login-form > fieldset > input');


    const registerButton = await page.$('a[href="/catalog"]');
    const isAllBookLinkVisible = await registerButton.isVisible();
    expect(isAllBookLinkVisible).toBe(true);
})
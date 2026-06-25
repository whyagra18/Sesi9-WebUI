const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");


describe("SauceDemo Automation", function () {

    this.timeout(30000);

    let driver;

    before(async () => {
        driver = await new Builder().forBrowser("chrome").build();
    });

    after(async () => {
        await driver.quit();
    });

    it("Success Login", async () => {

        await driver.get("https://www.saucedemo.com/");

        await driver.findElement(By.id("user-name"))
            .sendKeys("standard_user");

        await driver.findElement(By.id("password"))
            .sendKeys("secret_sauce");

        await driver.findElement(By.id("login-button"))
            .click();

        const currentUrl = await driver.getCurrentUrl();

        assert.strictEqual(
            currentUrl,
            "https://www.saucedemo.com/inventory.html"
        );

    });

it("Sort Product A-Z", async () => {

    await driver.get("https://www.saucedemo.com/");

    await driver.findElement(By.id("user-name"))
        .sendKeys("standard_user");

    await driver.findElement(By.id("password"))
        .sendKeys("secret_sauce");

    await driver.findElement(By.id("login-button"))
        .click();

    const dropdown =
        await driver.findElement(
            By.className("product_sort_container")
        );

await dropdown.click();
await dropdown.sendKeys("Name (Z to A)");
await dropdown.sendKeys("Name (A to Z)");

    const products =
        await driver.findElements(
            By.className("inventory_item_name")
        );

    const firstProduct =
        await products[0].getText();

    console.log(firstProduct);

    assert.strictEqual(
        firstProduct,
        "Sauce Labs Backpack"
    );

});

    

});


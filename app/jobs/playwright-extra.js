// playwright-extra is a drop-in replacement for playwright,
// it augments the installed playwright with plugin functionality
const { chromium } = require("playwright-extra");
const { delay } = require("../lib");

// Load the stealth plugin and use defaults (all tricks to hide playwright usage)
// Note: playwright-extra is compatible with most puppeteer-extra plugins
const stealth = require("puppeteer-extra-plugin-stealth")();
chromium.use(stealth);
/**
 *options:
 * headless:bool
 * url:string
 * @class PlaywrightExtra
 */
class PlaywrightExtra {
  browser;
  _page;
  constructor(options) {
    this.options = options;
   // this.setup();
  }
  async setup() {
    const options = this.options;
    // Create a new incognito browser context
    const browser = await chromium.launch({ headless: options.headless });
    const context = await browser.newContext({});
    // Create a new page inside context.
    const page = await context.newPage();
    if (options.cookie) {
      await page.addInitScript((cookie) => {
        document.cookie = cookie;
      }, options.cookie);
    }
    await page.goto(options.url);
    this.browser = browser;
    this._page = page;
  }
  get page() {
    return this._page;
  }
  async etsyLogin(username, password) {
    const page = this.page;
    await page.fill("#join_neu_email_field",username);
    await delay(1000);
    await page.fill("#join_neu_password_field",password);
    await delay(1000);
   await page.click('[type="submit"]');

  }
}

module.exports = { PlaywrightExtra };

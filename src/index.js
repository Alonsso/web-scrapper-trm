const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto('https://www.bvc.com.co/pps/tibco/portalbvc');
    await page.screenshot({path: 'bvc.png'});
    await browser.close();
})();
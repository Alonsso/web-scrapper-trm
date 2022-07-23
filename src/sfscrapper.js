const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });
    const page = await browser.newPage();
    await page.goto('https://www.superfinanciera.gov.co/CargaDriver/index.jsp');
    await page.screenshot({ path: 'superfinanciera.png' });
    await page.setExtraHTTPHeaders({
        "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.131 Safari/537.36",
        "upgrade-insecure-requests": "1",
        "accept":
            "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "en-US,en;q=0.9,en;q=0.8",
    });
    await page.waitForSelector("table");
    const value = await page.$$eval("table tr td", tables => tables.map((table)=>{
        return table.innerText.trim();
    }));
    console.log("value : ", value.join(' '));
    await browser.close();
})();
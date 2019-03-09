/* jshint node: true */
/* jshint globalstrict: true */
"use strict";

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        ignoreHTTPSErrors: true
    });
    let page = await browser.newPage();


    let response = await page.goto('https://imran-abdul.ml')
        .then((res) => {
            console.log("Reached: load");
            return res;
        });

    await page.screenshot({
        path: 'myscreenshot.png',
        fullPage: true
    });
    console.log(` [Response] ${JSON.stringify(response.headers(), null, 2)}`);
    console.log(` [Response.status] ${response.status()}`);
})();
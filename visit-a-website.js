const puppeteer = require('puppeteer');
puppeteer.launch().then(async browser => {
    const page = await browser.newPage();
    await page.setViewport({
        width: 1280,
        height: 800
    })
    await page.goto('https://imran-abdul.ml', {
        timeout: 0
    });
    await page.screenshot({
        path: 'myscreenshot.png',
        fullPage: true
    });
    await browser.close();
});
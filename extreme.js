const puppeteer = require('puppeteer');

puppeteer.launch().then(async browser => {
    const page = await browser.newPage();
    await page.setViewport({
        width: 1280,
        height: 800
    })
    await page.goto('https://marketingplatform.google.com/about/partners/find-a-partner?utm_source=marketingplatform.google.com&utm_medium=et&utm_campaign=marketingplatform.google.com%2Fabout%2Fpartners%2F', {
        timeout: 0
    });
    /*  await page.screenshot({
         path: 'myscreenshot.png',
         fullPage: true
     }); */


    /* const titles = await page.evaluate(() =>
        Array.from(document.querySelectorAll("div.compact h3.title"))
        .map(partner => partner.innerText.trim())
    );

    const logos = await page.evaluate(() =>
        Array.from(document.querySelectorAll("div.compact .logo img"))
        .map(logo => logo.src)
    );

    console.log(titles);
    console.log(logos); */


    const partners = await page.evaluate(() =>
        Array.from(document.querySelectorAll("div.compact"))
        .map(compact => ({
                titles: compact.querySelector('h3.title').innerText.trim(),
                icons: compact.querySelector('.logo img').src
            })

        )
    );

    console.log(partners)


    await browser.close();
});
import puppeteer from "puppeteer";

// Launch the browser and open a new blank page
const browser = await puppeteer.launch();
const page = await browser.newPage();

// Navigate the page to a URL.
await page.goto('https://www.linkedin.com/');

// Set screen size.
await page.setViewport({width: 1080, height: 1024});

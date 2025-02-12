import puppeteer, { Keyboard } from "puppeteer";


// Function to wait an N number of seconds

function delay(time: number) {
   return new Promise(function(resolve) { 
       setTimeout(resolve, time)
   });
}

// Launch the browser and open a new blank page
const browser = await puppeteer.launch();
const page = await browser.newPage();

// Data

const jobTitle = "Web developer";
const location = "Portugal";

// Navigate the page to a URL.
await page.goto('https://www.linkedin.com/');


// Set screen size.
await page.setViewport({width: 1080, height: 1024});

// Write crawler code here

console.log("Crawler is running")


// Linkedin first page is open currently now we will login

let btn = await page.$("a.nav__button-secondary.btn-secondary-emphasis.btn-md");
await btn?.click()

await page.locator("#username").fill("arieljanickcarvalho@gmail.com");
await page.locator("#password").fill("Ajacarvalho");

// Clicking to login
await page.locator("#organic-div > form > div.login__form_action_container > button").click();

// Waiting for the jobs button to be on screen. That means the next page we need has loaded

await page.waitForSelector("#global-nav > div > nav > ul > li:nth-child(3) > a", { timeout: 5_000})

await page.locator("#global-nav > div > nav > ul > li:nth-child(3) > a").click()

await delay(5000)

// Jobs page open. Now we search for the job title and location to get related job listings
// We locate the element by using regex since the id has a dynamic part to it. We are just going to use the start

await page.locator('[id^="jobs-search-box-keyword"]').fill(jobTitle)
await page.locator('[id^="jobs-search-box-location"]').fill(location)

await page.keyboard.press("Enter");

await delay(5000)

// Now were in the job listings page

await page.screenshot({path: "currentpage.png", fullPage: true});

browser.close();
import puppeteer from "puppeteer";


// Function to wait an N number of seconds

function delay(time: number) {
   return new Promise(function(resolve) { 
       setTimeout(resolve, time)
   });
}

// Launch the browser and open a new blank page
const browser = await puppeteer.launch();
const page = await browser.newPage();

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

await page.locator("#organic-div > form > div.login__form_action_container > button").click();

await delay(5000)



// Logged in

await page.screenshot({path: "currentpage.png", fullPage: true});

browser.close();
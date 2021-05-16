const scraperObject = {
  url: "https://world.openfoodfacts.org/",

  async scraper(browser) {
    let page = await browser.newPage();
    console.log(`Navigating to ${this.url}...`);
    // Navigate to the selected page
    await page.goto(this.url);
    let scrapedData = [];
    // Wait for the required DOM to be rendered
    // async function scrapeCurrentPage() {
      await page.waitForSelector("#search_results");
      // Get the link to all the required books
      let urls = await page.$$eval(
        'div[id="products_all"] ul > li',
        (links) => {
          links = links.map((el) => el.querySelector("a").href);
          return links;
        }
      );

      // Loop through each of those links, open a new page instance and get the relevant data from them
      let pagePromise = (link) =>
        new Promise(async (resolve, reject) => {
          let dataObj = {};
          let newPage = await browser.newPage();
          await newPage.goto(link);
          dataObj["barcode"] = await newPage.$eval(
            'p[id="barcode_paragraph"]',
            (text) => text.textContent
          );
          resolve(dataObj);
          await newPage.close();
        });

        scrapedData = await Promise.all(urls.map(async (item) => {
            return await pagePromise(item);
        }));
        return scrapedData;
  },
};

module.exports = scraperObject;





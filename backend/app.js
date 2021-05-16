require("dotenv/config");
const browserObject = require("./src/crawler/browser");
const scraperController = require("./src/crawler/pageController");
const express = require("express");
const mongoose = require("mongoose");

const productRoutes = require("./src/routes/products.routes");

const app = express();
const port = process.env.PORT;

mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Conected to DB")
);

app.get("/", (req, res) => {
  res.send("Fullstack Challenge 2021");
});

app.use("/products", productRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

//Start the browser and create a browser instance
let browserInstance = browserObject.startBrowser();

// Pass the browser instance to the scraper controller
scraperController(browserInstance);

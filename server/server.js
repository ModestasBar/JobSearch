const express = require("express");
const bodyParse = require("body-parser");
const cors = require("cors");
const RequestPromise = require("request-promise");
const Cheerio = require("cheerio");
const handleScrape = require("./controller/scraper");

const app = express();

const port = 3000;

// Express middleware
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});
app.use(bodyParse.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Sveiki!");
});

app.get("/work", async (req, res) => {
  res.json(await handleScrape(RequestPromise, Cheerio, req));
});

app.put("/work", async (req, res) => {
  // console.log(req.body);
  try {
    res.json(await handleScrape(RequestPromise, Cheerio, req));
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, console.log(`App is running in port ${port}!`));

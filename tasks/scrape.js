"use strict";

const async = require("async");
const cheerio = require("cheerio");
const request = require("request");

const settings = require("../settings");

/**
 * Scrape thepiratebay.org for the top 100 of everything, and return an object
 * full of top 100 data!
 */
function scrape(callback) {
  let torrents = {};

  async.each(Object.keys(settings.TPB_CATEGORIES), (key, cb) => {
    async.each(Object.keys(settings.TPB_CATEGORIES[key]), (k, c) => {
      let category = key + k.charAt(0).toUpperCase() + k.slice(1);
      let categoryNumber = settings.TPB_CATEGORIES[key][k];

      scrapeTop100(categoryNumber, (err, torrentData) => {
        if (err) {
          return c(err);
        }

        torrents[category] = torrentData;
        c();
      });
    }, (err) => {
      if (err) {
        return cb(err);
      }

      cb();
    });
  }, (err) => {
    if (err) {
      return callback(err);
    }

    callback(null, torrents);
  });
}

/**
 * Given a pirate bay top 100 category number, scrape the page and extract all
 * of the top 100 torrents and their metadata.
 */
function scrapeTop100(categoryNumber, callback) {
  let url = settings.TPB_URL + "/" + categoryNumber;

  request(url, (err, resp, body) => {
    let $;
    let torrents = [];

    if (err || resp.statusCode !== 200) {
      return callback(new Error("Couldn't scrape data from", url + ". The website might be down :("));
    }

    $ = cheerio.load(body);
    torrents = [];

    $("table#searchResult tr").not(":first-child").each(function() {
      let name = $(this).find(".detName a").text();
      let size = $(this).find(".detDesc").text().split(",")[1].split(" ")[2];
      let url = $(this).find("td ").not(":first-child").find("a").not(":first-child").attr("href");
      let seeds = $(this).find("td[align=\"right\"]").first().text();
      let leeches = $(this).find("td[align=\"right\"]").last().text();

      torrents.push({ name, size, url, seeds, leeches });
    });

    return callback(null, torrents);
  });
}

module.exports = scrape;

const Request = require("../helpers/request.js");

const Beers = function () {
}

Beers.prototype.getData = function () {
  const url = "https://api.punkapi.com/v2/beers";
  const request = new Request(url);
  request.get((data) => {
    this.beers = data;
  });
};

module.exports = Beers;

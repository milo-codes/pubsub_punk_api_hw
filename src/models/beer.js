const Request = require("../helpers/request.js");
const PubSub = require("../helpers/pub_sub.js");

const Beers = function () {
  this.beers = [];
}

Beers.prototype.getData = function () {
  const url = "https://api.punkapi.com/v2/beers";
  const request = new Request(url);
  request.get((data) => {
    this.beers = data;
    this.render();
  });
};

Beers.prototype.render = function () {
  PubSub.publish("BeerListView:beer-data-received", this.beers);
};

module.exports = Beers;

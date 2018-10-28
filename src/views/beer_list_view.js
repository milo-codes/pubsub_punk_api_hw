const PubSub = require("../helpers/pub_sub.js");

const BeersListView = function (container) {
  this.container = container;
}

BeersListView.prototype.bindEvents = function () {
  PubSub.subscribe("BeerListView:beer-data-received", (event) => {
    this.beers = event.detail;
    this.render();
  });
};

module.exports = BeersListView;

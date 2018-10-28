const BeersListView = require("./views/beer_list_view.js");
const Beers = require("./models/beer.js");

document.addEventListener("DOMContentLoaded", () => {
  console.log("JS Loaded");

  const beersListContainer = document.querySelector("#beer-list-container");
  const beersListView = new BeersListView(beersListContainer);
  beersListView.bindEvents();

  const beers = new Beers();
  beers.getData();
});

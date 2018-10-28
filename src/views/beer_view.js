const BeerView = function (container, beer) {
  this.container = container;
  this.beer = beer;
}

BeerView.prototype.render = function () {
  // container div
  const beerContainer = document.createElement("div");
  beerContainer.classList.add("beer-container");
  this.container.appendChild(beerContainer);

  // image
  this.addImage(beerContainer);

  // name
  this.addName(beerContainer);

  // tagline
  this.addTagline(beerContainer);

  // // description
  // this.addDescription(beerContainer);
  //
  // // food-pairing
  // this.addFoodPairing(beerContainer);
};

BeerView.prototype.addImage = function (container) {
  const beerImage = document.createElement("img");
  beerImage.classList.add("beer-image");
  beerImage.src = `${ this.beer.image_url }`;
  container.appendChild(beerImage);
};

BeerView.prototype.addName = function (container) {
  const name = document.createElement("h3");
  name.classList.add("beer-name");
  name.textContent = `${ this.beer.name }`;
  container.appendChild(name);
};

BeerView.prototype.addTagline = function (container) {
  const tag = document.createElement("p");
  tag.classList.add("beer-tag");
  tag.textContent = `${ this.beer.tagline }`;
  container.appendChild(tag);
};

module.exports = BeerView;

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

  // text
  this.addTextContent(beerContainer);
};

BeerView.prototype.addImage = function (container) {
  const beerImage = document.createElement("img");
  beerImage.classList.add("beer-image");
  beerImage.src = `${ this.beer.image_url }`;
  container.appendChild(beerImage);
};

BeerView.prototype.addTextContent = function (container) {
  // name
  this.addName(container);

  // tagline
  this.addTagline(container);

  // description
  this.addDescription(container);

  // food-pairing
  this.addFoodPairing(container);
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

BeerView.prototype.addDescription = function (container) {
  const blurb = document.createElement("p");
  blurb.classList.add("beer-blurb");
  blurb.textContent = `${ this.beer.description }`;
  container.appendChild(blurb);
};

// TODO list pairings from array better
BeerView.prototype.addFoodPairing = function (container) {
  const pairing = document.createElement("p");
  pairing.classList.add("beer-pair");
  pairing.textContent = `Goes well with: ${ this.beer.food_pairing }`;
  container.appendChild(pairing);
};

module.exports = BeerView;

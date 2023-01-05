function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "Photo de profil");

    const h2 = document.createElement("h2");
    h2.textContent = name;

    const locationElem = document.createElement("p");
    locationElem.textContent = city + ", " + country;
    locationElem.classList = "location";

    const taglineElem = document.createElement("p");
    taglineElem.textContent = tagline;
    taglineElem.classList = "tagline";

    const priceElem = document.createElement("span");
    priceElem.textContent = price + "€/jour";
    priceElem.classList = "price";

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(locationElem);
    article.appendChild(taglineElem);
    article.appendChild(priceElem);

    return article;
  }
  return { name, id, city, country, tagline, price, picture, getUserCardDOM };
}

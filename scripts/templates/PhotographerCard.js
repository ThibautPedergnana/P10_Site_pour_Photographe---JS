class PhotographerCard {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createPhotographerCard() {
    const article = document.createElement("article");
    article.classList.add("photographer-card");

    const photographerCard = `
      <a href="photographer.html?id=${this._photographer._id}">
        <div class="photographer-portrait">
         <img 
            alt="${this._photographer.name}"
            src="${this._photographer.portrait}"/>
            <h2>${this._photographer.name}</h2>
        </div>
      </a>      
        <div>
          <p class="location">${
            this._photographer.city + ", " + this._photographer.country
          } </p>
          <p class="tagline">${this._photographer.tagline}</p>
          <p class="price">${this._photographer.price}€/jour</p>      
        </div>
      `;
    article.innerHTML = photographerCard;
    return article;
  }
}

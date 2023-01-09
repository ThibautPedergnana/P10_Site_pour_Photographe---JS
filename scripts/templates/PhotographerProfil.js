class photographerProfil {
  constructor(photographer) {
    this._photographer = photographer;
  }

  createPhotographerProfil() {
    const profilSection = document.createElement("article");
    profilSection.setAttribute("class", "photograph-header");

    const photographerProfil = `
    <div class="description">
      <h2 class="name">${this._photographer.name}</h2>
      <p class="location">${
        this._photographer.city + ", " + this._photographer.country
      } </p>
      <p class="tagline">${this._photographer.tagline}</p>
    </div>
    <div class="contact">
      <button class="contact_button" onclick="displayModal()">Contactez-moi</button>
    </div>
    <div class="portrait">
      <img 
        alt="${this._photographer.name}"
        src="/assets/photographers/${this._photographer.portrait}"/>
    </div>
      `;
    profilSection.innerHTML = photographerProfil;
    return profilSection;
  }
}

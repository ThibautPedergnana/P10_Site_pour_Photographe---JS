class PhotographerArt {
  constructor(media) {
    this._media = media;
  }

  createPhotographerArt() {
    const sectionArt = document.createElement("article");
    sectionArt.setAttribute("class", "photograph-art");

    const photographerArt = `
      <img 
        alt="${this._media.title}"
        src="/assets/images/${this._media.image}"/>
      <div class="media-description">
        <h2 class="title">${this._media.title}</h2>
        <span class="like">${this._media.likes}</span>
      </div>
      `;
    sectionArt.innerHTML = photographerArt;
    return sectionArt;
  }
}

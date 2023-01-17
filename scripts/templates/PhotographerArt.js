class PhotographerArt {
  constructor(media) {
    this._media = media;
  }

  createPhotographerArt() {
    const sectionArt = document.createElement("article");
    sectionArt.setAttribute("class", "photograph-art");
    const photographerArt = `
      <div class="media-container">
      ${
        this._media?._image
          ? `<img 
            alt="${this._media.title}"
            src="/assets/medias/${this._media?._image}"/>`
          : `<video controls width="346px" height="220px">
            <source src="/assets/medias/${this._media?._video}"
            type="video/webm">
          </video>`
      }
       
        </div>
      <div class="media-description">
        <h2 class="title">${this._media.title}</h2>
        <div class="likes">
          <span>${this._media.likes}</span>
          <span class="heart"><i class="fa-solid fa-heart"></i></span>
        </div>
      </div>
      `;
    sectionArt.innerHTML = photographerArt;
    return sectionArt;
  }
}

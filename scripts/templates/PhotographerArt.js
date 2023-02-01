class PhotographerArt {
  constructor(media) {
    this._media = media;
    this.LikeSubject = new LikeSubject();

    this.$sectionWrapper = document.createElement("article");
    this.$sectionWrapper.classList.add("photograph-art");
  }

  handleLikeButton() {
    const that = this;

    this.$sectionWrapper
      .querySelector(".likes")
      .addEventListener("click", function () {
        const likeCounter = new LikeCounter(that._media);
        that.LikeSubject.like(likeCounter);
        if (this.classList.contains("wished")) {
          this.classList.remove("wished");
          that.LikeSubject.fire("DEC");
        } else {
          this.classList.add("wished");
          that.LikeSubject.fire("INC");
        }
      });
  }

  createPhotographerArt() {
    const photographerArt = `
      <div class="media-container">
      ${
        this._media?._image
          ? `<img alt="${this._media.title}"
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
          <span class="nb-like-${this._media.id}">${this._media.likes}</span>
          <i class="fa-regular fa-heart heart" aria-label="likes"></i>
        </div>
      </div>
      `;

    this.$sectionWrapper.innerHTML = photographerArt;
    this.handleLikeButton();

    return this.$sectionWrapper;
  }
}

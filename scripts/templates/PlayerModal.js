class PlayerModal {
  constructor(media, allMedias) {
    this.media = media;
    this.allMedias = allMedias;
    this.currentIndex = null;
    allMedias.forEach((med, index) => {
      if (med._id === media._id) {
        this.currentIndex = index;
      }
    });
    this.$wrapper = document.createElement("div");
    this.$wrapper.classList.add("player-wrapper");

    this.$modalWrapper = document.querySelector(".player-modal");
  }

  onCloseButton() {
    this.$wrapper
      .querySelector(".close-btn-player")
      .addEventListener("click", () => {
        this.$modalWrapper.classList.remove("player-modal-on");
        this.$wrapper.innerHTML = "";
      });
  }

  onPrevButton() {
    this.$wrapper
      .querySelector(".prev-btn-player")
      .addEventListener("click", () => {
        if (this.currentIndex === 0)
          this.currentIndex = this.allMedias.length - 1;
        else this.currentIndex--;
        this.media = this.allMedias[this.currentIndex];
        this.$wrapper.innerHTML = "";
        this.render();
      });
  }

  onNextButton() {
    this.$wrapper
      .querySelector(".next-btn-player")
      .addEventListener("click", () => {
        if (this.currentIndex === this.allMedias.length - 1)
          this.currentIndex = 0;
        else this.currentIndex++;
        this.media = this.allMedias[this.currentIndex];
        this.$wrapper.innerHTML = "";
        this.render();
      });
  }

  createPlayer() {
    const player = `
        <div class="player">
          <iframe 
            height="600"
            width="800"
            ${
              this.media?._image
                ? `<img 
                  alt="${this.media._title}"
                  src="/assets/medias/${this.media?._image}"/>`
                : `src="/assets/medias/${this.media?._video}"`
            }>
          </iframe>
          <div class="container-buttons">
            <button class="prev-btn-player">Précedent</button>
            <button class="close-btn-player">Fermer la fenêtre</button>
            <button class="next-btn-player">Suivant</button>
          </div>
        </div>
      `;

    this.$wrapper.innerHTML = player;

    this.$modalWrapper.classList.add("player-modal-on");
    this.$modalWrapper.appendChild(this.$wrapper);

    this.onCloseButton();
    this.onPrevButton();
    this.onNextButton();
  }

  render() {
    this.createPlayer();
  }
}

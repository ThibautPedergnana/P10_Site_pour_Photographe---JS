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
        this.$wrapper.remove();
      });
  }

  goPrev() {
    if (this.currentIndex === 0) this.currentIndex = this.allMedias.length - 1;
    else this.currentIndex--;
    this.media = this.allMedias[this.currentIndex];
    this.$wrapper.innerHTML = "";
    this.render();
  }

  onPrevButton(clearEvent) {
    this.$wrapper
      .querySelector(".prev-btn-player")
      .addEventListener("click", () => {
        this.goPrev();
        clearEvent();
      });
  }

  goNext() {
    if (this.currentIndex === this.allMedias.length - 1) this.currentIndex = 0;
    else this.currentIndex++;
    this.media = this.allMedias[this.currentIndex];
    this.$wrapper.innerHTML = "";
    this.render();
  }

  onNextButton(clearEvent) {
    this.$wrapper
      .querySelector(".next-btn-player")
      .addEventListener("click", () => {
        this.goNext();
        clearEvent();
      });
  }

  handleDirectionArrows(event, clearEvent) {
    if (event.key === "ArrowLeft") {
      this.goPrev();
      clearEvent();
    } else if (event.key === "ArrowRight") {
      this.goNext();
      clearEvent();
    }
  }

  handlePrevNextMedia() {
    const that = this;

    function callbackArrow(e) {
      that.handleDirectionArrows(e, () =>
        document.removeEventListener("keydown", callbackArrow)
      );
    }

    const clearEventArrow = () =>
      document.removeEventListener("keydown", callbackArrow);

    document.addEventListener("keydown", callbackArrow);

    this.onPrevButton(clearEventArrow);
    this.onNextButton(clearEventArrow);

    that.$wrapper
      .querySelector(".close-btn-player")
      .addEventListener("click", clearEventArrow);
  }

  createPlayer() {
    const player = `
        <div class="player" aria-label="image closeup view">
            <button class="prev-btn-player" aria-label="Previous image"><i class="fa-solid fa-chevron-left"></i></button>
            ${
              this.media?._image
                ? `<img 
                  alt="${this.media._title}"
                  src="/assets/medias/${this.media?._image}"/>`
                : `<video controls>
                      <source alt="${this.media._title}" src="/assets/medias/${this.media?._video}">
                   </video>`
            }
            <button class="next-btn-player" aria-label="Next image"><i class="fa-solid fa-chevron-right"></i></button>
            <div class="close">
              <button class="close-btn-player" aria-label="Close modal"><i class="fa-solid fa-xmark"></i></button>
            </div>
        </div>
        <div class="media-title">
            <span>${this.media._title}</span>
        </div>
      `;

    this.$wrapper.innerHTML = player;

    this.$modalWrapper.classList.add("player-modal-on");
    this.$modalWrapper.appendChild(this.$wrapper);

    this.onCloseButton();
    this.handlePrevNextMedia();
  }

  render() {
    this.createPlayer();
  }
}

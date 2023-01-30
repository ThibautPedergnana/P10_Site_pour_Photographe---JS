function PhotographerArtWithPlayer(PhotographerArt, allMedias) {
  PhotographerArt.$sectionWrapper.addEventListener("click", (e) => {
    if (e.target.parentElement.classList[0] == "media-container") {
      const Player = new PlayerModal(PhotographerArt._media, allMedias);
      Player.render();
    }
  });

  return PhotographerArt;
}

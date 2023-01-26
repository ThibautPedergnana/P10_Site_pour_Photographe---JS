function PhotographerArtWithPlayer(PhotographerArt, allMedias) {
  PhotographerArt.$sectionWrapper.addEventListener("click", () => {
    const Player = new PlayerModal(PhotographerArt._media, allMedias);
    Player.render();
  });

  return PhotographerArt;
}

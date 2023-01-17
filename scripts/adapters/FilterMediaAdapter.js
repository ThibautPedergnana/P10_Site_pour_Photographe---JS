class FilterMediaAdapter {
  constructor(medias, label) {
    this.medias = medias;
    this.label = label;
  }

  async filterMedias() {
    switch (this.label) {
      case "likes":
        return await FilterLike.filterByLikes(this.medias);
      // case "date":
      //   await FilterV2.filterByActor(this.medias);
      //   break;
      // case "title":
      //   await FilterV2.filterByActor(this.medias);
      //   break;
    }
  }
}

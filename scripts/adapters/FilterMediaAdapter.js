class FilterMediaAdapter {
  constructor(medias, label) {
    this.medias = medias;
    this.label = label;
  }

  async filterMedias() {
    switch (this.label) {
      case "likes":
        return await FilterLike.filterByLikes(this.medias);
      case "date":
        await FilterDate.filterByDate(this.medias);
      case "title":
        return await FilterTitle.filterByTitle(this.medias);
    }
  }
}

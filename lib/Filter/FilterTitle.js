class FilterTitle {
  static async filterByTitle(medias) {
    await new Promise((resolve) => setTimeout(resolve, 200));

    function compareTitle(a, b) {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    }
    return medias.sort(compareTitle);
  }
}

class FilterLike {
  static async filterByLikes(medias) {
    await new Promise((resolve) => setTimeout(resolve, 200));

    function compare(a, b) {
      if (a.likes < b.likes) {
        return 1;
      }
      if (a.likes > b.likes) {
        return -1;
      }
      return 0;
    }
    console.log("medias", medias);
    console.log("medias.sort(compare)", medias.sort(compare));
    return medias.sort(compare);
  }
}

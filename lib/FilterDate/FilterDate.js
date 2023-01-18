class FilterDate {
  static async filterByDate(medias) {
    await new Promise((resolve) => setTimeout(resolve, 200));

    function compareDate(a, b) {
      if (new Date(a.date) < new Date(b.date)) {
        return 1;
      }
      if (new Date(a.date) > new Date(b.date)) {
        return -1;
      }
      return 0;
    }
    return medias.sort(compareDate);
  }
}

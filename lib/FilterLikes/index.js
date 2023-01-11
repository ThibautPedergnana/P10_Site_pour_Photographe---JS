class FilterLikes {
  /**
   *
   * @param {array} media
   * @param {number} likes
   */
  constructor(media, likes) {
    this._media = media;
    this._likes = likes;
  }

  async filterByLikes() {
    await new Promise((resolve) => setTimeout(resolve, 200));

    if (!this._likes) {
      return this._media;
    }

    const arrayLikes = [this._likes];

    const byValue = (a, b) => a - b;

    return arrayLikes.sort(byValue);
  }
}

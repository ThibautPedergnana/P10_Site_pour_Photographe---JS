class LikeCounter {
  constructor(media) {
    this._count = media.likes;
    this._$wishCount = document.querySelector(`.nb-like-${media._id}`);
  }

  update(action) {
    if (action === "INC") {
      this._count += 1;
    } else if (action === "DEC") {
      this._count;
    } else {
      throw "Unknow action";
    }
    this._$wishCount.innerHTML = this._count;
  }
}

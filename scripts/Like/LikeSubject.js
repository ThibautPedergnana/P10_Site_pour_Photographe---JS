class LikeSubject {
  constructor() {
    this._observer;
  }

  like(obs) {
    this._observer = obs;
  }

  unlike() {
    this._observer = null;
  }

  fire(action) {
    this._observer.update(action);
  }
}

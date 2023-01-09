class ImageVideoFactory {
  constructor(data, type) {
    if (type === "Image") {
      return new Image(data);
    } else if (type === "Video") {
      return new Video(data);
    } else {
      throw "Unknown type format";
    }
  }
}

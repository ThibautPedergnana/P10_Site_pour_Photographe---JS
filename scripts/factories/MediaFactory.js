class MediaFactory {
  constructor(data) {
    const isImage = Object.keys(data).find((key) => key === "image");
    return isImage ? new Image(data) : new Video(data);
  }
}

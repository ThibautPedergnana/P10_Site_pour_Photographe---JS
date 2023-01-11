//Mettre le code JavaScript lié à la page photographer.html

let str = window.location.href;
let url = new URL(str);
let idPhotographer = url.searchParams.get("id");

const photographerHeader = document.querySelector(".profil-section");
const photographerMedia = document.querySelector(".mediaSection");

async function getPhotograph() {
  const { photographers, media } = await getPhotographers();
  const photographe = photographers.find((p) => p.id === +idPhotographer);

  const Template = new photographerProfil(photographe);
  photographerHeader.appendChild(Template.createPhotographerProfil());

  // const imageMedia = media.map(
  //   (media) => new ImageVideoFactory(media, "Image")
  // );
  // console.log(imageMedia);

  // const videoMedia = media.map(
  //   (media) => new ImageVideoFactory(media, "Video")
  // );
  // console.log(videoMedia);

  // const AllMedia = imageMedia.concat(videoMedia);
  const PhotographerMedias = media.filter(
    (p) => p.photographerId === +idPhotographer
  );
  console.log(PhotographerMedias);

  const Filter = new FilterForm(PhotographerMedias);
  Filter.render();

  PhotographerMedias.forEach((media) => {
    const TemplateArt = new PhotographerArt(media);
    photographerMedia.appendChild(TemplateArt.createPhotographerArt());
  });
}

getPhotograph();

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

  const medias = media.map((media) => new MediaFactory(media));

  const PhotographerMedias = medias.filter(
    (p) => p.photographerId === +idPhotographer
  );
  const Filter = new FilterForm(PhotographerMedias);
  Filter.render();

  PhotographerMedias.forEach((media, i) => {
    const TemplateArt = new PhotographerArt(media);
    photographerMedia.appendChild(TemplateArt.createPhotographerArt());
  });
}

getPhotograph();

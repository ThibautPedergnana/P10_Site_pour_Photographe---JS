const photographersSection = document.querySelector(".photographer_section");

// Récupère les datas des photographes
async function init() {
  const { photographers, media } = await getPhotographers();

  // Affiche chaque photographe
  photographers
    .map((photographer) => new Photographer(photographer))
    .forEach((photographer) => {
      const Template = new PhotographerCard(photographer);
      photographersSection.appendChild(Template.createPhotographerCard());
    });
}

init();

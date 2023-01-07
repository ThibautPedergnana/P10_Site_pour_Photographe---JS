const photographersSection = document.querySelector(".photographer_section");

async function getPhotographers() {
  try {
    const resp = await fetch("./data/photographers.json");
    return resp.json();
  } catch (error) {
    console.log("Erreur de la requête");
  }
}

// Récupère les datas des photographes
async function init() {
  const { photographers, media } = await getPhotographers();
  console.log(photographers, media);

  // Affiche chaque photogrape
  photographers
    .map((photographer) => new Photographer(photographer))
    .forEach((photographer) => {
      const Template = new PhotographerCard(photographer);
      photographersSection.appendChild(Template.createPhotographerCard());
    });
}

init();

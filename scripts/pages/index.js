async function getPhotographers() {
  try {
    const resp = await fetch("./data/photographers.json");
    return resp.json();
  } catch (error) {
    console.log("Erreur de la requête");
  }
}

// Affiche chaque photogrape
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

// Récupère les datas des photographes
async function init() {
  const { photographers, media } = await getPhotographers();
  console.log(photographers, media);
  displayData(photographers);
}

init();

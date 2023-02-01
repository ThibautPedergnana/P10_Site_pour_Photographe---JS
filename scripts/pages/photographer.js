let str = window.location.href;
let url = new URL(str);
let idPhotographer = url.searchParams.get("id");

const photographerHeader = document.querySelector(".profil-section");
const photographerMedia = document.querySelector(".mediaSection");
const totalLikes = document.querySelector(".total-likes-nb");

function calculTotalLike() {
  let likes = document.querySelectorAll("[class^='nb-like-']");
  likes = [...likes].map((like) => +like.outerText);
  const total = likes.reduce((prev, curr) => prev + curr);
  totalLikes.innerHTML = total;
}

function getPrice(price) {
  const photographerPrice = document.querySelector(".price");
  photographerPrice.innerHTML = price + "€ / jour";
}

function dropDown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

const handleTotalLikes = () => {
  // Gère le total des likes depuis le DOM
  const likeElems = document.querySelectorAll("[class^='nb-like-']");

  [...likeElems].forEach((likeElem) => {
    const observer = new MutationObserver((mutationsList, observer) =>
      calculTotalLike()
    );

    observer.observe(likeElem, {
      characterData: false,
      childList: true,
      attributes: false,
    });
  });
};

async function renderMedias(filteredMedia) {
  //Clear current list medias
  photographerMedia.innerHTML = "";
  filteredMedia.forEach((media) => {
    const TemplateArt = PhotographerArtWithPlayer(
      new PhotographerArt(media),
      filteredMedia
    );
    photographerMedia.appendChild(TemplateArt.createPhotographerArt());
  });
  handleTotalLikes();
}

async function getPhotograph() {
  // Récupère toutes les datas
  const { photographers, media } = await getPhotographers();
  const photographe = photographers.find((p) => p.id === +idPhotographer);

  // Affiche le profil avec les données de chaque photographe
  const Template = new photographerProfil(photographe);
  photographerHeader.appendChild(Template.createPhotographerProfil());

  // Parcours les medias via la factory
  const medias = media.map((media) => new MediaFactory(media));

  const PhotographerMedias = medias.filter(
    (p) => p.photographerId === +idPhotographer
  );
  // Applique le filtre sur les medias du photographe sélectionné
  const Filter = new FilterForm(PhotographerMedias);
  Filter.render();

  // Affiche les medias du photographe sélectionné
  PhotographerMedias.forEach((media) => {
    const TemplateArt = PhotographerArtWithPlayer(
      new PhotographerArt(media),
      PhotographerMedias
    );
    photographerMedia.appendChild(TemplateArt.createPhotographerArt());
  });

  calculTotalLike();
  getPrice(photographe.price);
  handleTotalLikes();
}

getPhotograph();

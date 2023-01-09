async function getPhotographers() {
  try {
    const resp = await fetch("./data/photographers.json");
    return resp.json();
  } catch (error) {
    console.log("Erreur de la requête");
  }
}

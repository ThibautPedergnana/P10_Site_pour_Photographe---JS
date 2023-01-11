class FilterForm {
  constructor(media) {
    this.media = media;

    this.$wrapper = document.createElement("div");
    this.$filterFormWrapper = document.querySelector(".filter-form-wrapper");
    this.$mediaSection = document.querySelector(".mediaSection");
  }

  async filterMedia(likes) {
    this.clearMediaWrapper();

    const FilterLib = new FilterLikes(this.media, likes);
    const FilteredMedia = await FilterLib.filterByLikes();

    FilteredMedia.forEach((media) => {
      const Template = new PhotographerArt(media);
      this.$mediaSection.appendChild(Template.createPhotographerArt());
    });
  }

  onChangeFilter() {
    this.$wrapper.querySelector("form").addEventListener("change", (e) => {
      const likes = e.target.value;
      this.filterMedia(likes);
    });
  }

  clearMediaWrapper() {
    this.$mediaSection.innerHTML = "";
  }

  render() {
    const filterForm = `
        <form class="filter-form" action="#" method="POST">
            <label for="filter-select">Trier par</label>
            <select name="filter-select" id="filter-select">
                <option value="">Aucun filtre</option>
                <option value="likes">Popularité</option>
                <option value="date">Date</option>
                <option value="title">Titre</option>
            </select>
        </form>
    `;
    this.$wrapper.innerHTML = filterForm;
    this.onChangeFilter();

    this.$filterFormWrapper.appendChild(this.$wrapper);
  }
}

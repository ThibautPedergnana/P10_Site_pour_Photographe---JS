class FilterForm {
  constructor(media) {
    this.media = media;

    this.$wrapper = document.createElement("div");
    this.$wrapper.classList.add("filterForm");
    this.$filterFormWrapper = document.querySelector(".filter-form-wrapper");
    this.$mediaSection = document.querySelector(".mediaSection");
  }

  async filterMedia(label) {
    this.clearMediaWrapper();

    const filterAdapter = new FilterMediaAdapter(this.media, label);
    const filteredMedia = await filterAdapter.filterMedias();

    renderMedias(filteredMedia);
  }

  onChangeFilter() {
    const buttons = this.$wrapper.querySelectorAll(".dropdown-option");

    buttons.forEach((button) =>
      button.addEventListener("click", (e) => {
        const label = e.target.value;
        this.filterMedia(label);
      })
    );
  }

  clearMediaWrapper() {
    this.$mediaSection.innerHTML = "";
  }

  render() {
    const filterForm = `
        <form class="filter-form">
            <div class="dropdown">
              <button onclick="dropDown()" id="menu" class="dropbtn" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Trier par <i class="fa-solid fa-play"></i></button>
              <div id="myDropdown" class="dropdown-content" aria-labelledby="menu">
                <button class="dropdown-option dropdown-likes" type="button" value="likes">Popularité</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-option dropdown-date" type="button" value="date">Date</button>
                <div class="dropdown-divider"></div>
                <button class="dropdown-option dropdown-title" type="button" value="title">Titre</button>
              </div>
            </div>
        </form>
    `;
    this.$wrapper.innerHTML = filterForm;
    this.onChangeFilter();

    this.$filterFormWrapper.appendChild(this.$wrapper);
  }
}

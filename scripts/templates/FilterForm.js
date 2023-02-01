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
            <div class="dropdown dropdown-menu-right" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div onclick="dropDown()" class="dropbtn">Trier par</div>
              <div id="myDropdown" class="dropdown-content">
                <button class="dropdown-option dropdown-likes" type="button" value="likes">Popularité</button>
                <button class="dropdown-option dropdown-date" type="button" value="date">Date</button>
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

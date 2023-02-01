class ContactForm {
  constructor(photographer) {
    this._name = photographer.name;

    this.$contactWrapper = document.createElement("div");
    this.$contactWrapper.classList.add("content");
  }

  createContactForm() {
    const contactForm = `
      <header>
          <h2 aria-labbelledby="2" class="header-form">Contactez-moi ${this._name}</h2>
          <img alt="Close Contact form" src="assets/icons/close.svg" onclick="closeModal()" />
      </header>
      <form class="form" name="form" action="photographer.html">
        <div class="formData firstName-section">
         <label for="firstName">Prénom</label>
          <input class="text-control" type="text" id="firstName" name="firstName" aria-labbelledby="3"/>
          <p id="firstNameErrorMsg" class="errorMsg"></p>
        </div>
        <div class="formData lastName-section">
         <label for="lastName">Nom</label>
          <input class="text-control" type="text" id="lastName" name="lastName" aria-labbelledby="5"/>
          <p id="lastNameErrorMsg" class="errorMsg"></p>
        </div>
        <div class="formData email-section">
          <label for="email">Email</label>
          <input class="text-control" type="email" id="email" name="email" aria-labbelledby="7"/>
          <p id="emailErrorMsg" class="errorMsg"></p>
        </div>
        <div class="formData message-section">
          <label for="message">Votre message</label>
          <textarea class="text-control" type="text" id="message" name="message" aria-labbelledby="9"></textarea>
          <p id="messageErrorMsg" class="errorMsg"></p>
        </div>
        <button class="submit-button" type="button" aria-labbelledby="send">Envoyer</button>
      </form>
      `;

    this.$contactWrapper.innerHTML = contactForm;

    return this.$contactWrapper;
  }
}

// Gestion de la modal
function displayModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("contact_modal");
  modal.style.display = "none";
}

// Gestion du formulaire

// Check validation firstname and lastname
function checkValidationFormName(inputName) {
  let charRegExp = new RegExp("^[a-zA-Z ,.'-]{2,}$");
  return charRegExp.test(inputName.value);
}

// Check validation email
function checkValidationFormEmail(inputEmail) {
  let emailRegExp = new RegExp(
    "^[a-zA-Z0-9.-]+[@]{1}[a-zA-Z0-9.-]+[.]{1}[a-z]{2,10}$"
  );
  return emailRegExp.test(inputEmail.value);
}

// Check validation message
function checkValidationFormMessage(inputMessage) {
  let messageRegExp = new RegExp("^[a-zA-Z0-9 ,.'-]{1,}$");
  return messageRegExp.test(inputMessage.value);
}

// error message firstname
function validFirstName(inputFirstName) {
  const firstNameErrorMsg = document.querySelector("#firstNameErrorMsg");
  if (checkValidationFormName(inputFirstName)) {
    firstNameErrorMsg.innerHTML = "";
  } else {
    firstNameErrorMsg.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du prénom.";
  }
}

// error message lastname
function validLastName(inputLastName) {
  const lastNameErrorMsg = document.querySelector("#lastNameErrorMsg");

  if (checkValidationFormName(inputLastName)) {
    lastNameErrorMsg.innerHTML = "";
  } else {
    lastNameErrorMsg.innerHTML =
      "Veuillez entrer 2 caractères ou plus pour le champ du nom.";
  }
}

// error message email
function validEmail(inputEmail) {
  const emailErrorMsg = document.querySelector("#emailErrorMsg");
  if (checkValidationFormEmail(inputEmail)) {
    emailErrorMsg.innerHTML = "";
  } else {
    emailErrorMsg.innerHTML = "Veuillez renseigner votre email.";
  }
}

// error message message
function validMessage(inputMessage) {
  const messageErrorMsg = document.querySelector("#messageErrorMsg");
  if (checkValidationFormMessage(inputMessage)) {
    messageErrorMsg.innerHTML = "";
  } else {
    messageErrorMsg.innerHTML =
      "Veuillez entrer 1 caractère ou plus pour le champ du prénom.";
  }
}

// form instructions
function handleForm() {
  let form = document.querySelector(".form");
  console.log(form);
  // Check validation firstname and lastname when changing
  form.firstName.addEventListener("change", function () {
    validFirstName(this);
  });

  // Check validation lastname and lastname when changing
  form.lastName.addEventListener("change", function () {
    validLastName(this);
  });

  // Check validation email when changing
  form.email.addEventListener("change", function () {
    validEmail(this);
  });

  // Check validation message when changing
  form.message.addEventListener("change", function () {
    validMessage(this);
  });
}

function checkValidationFormAll(email, lastname, firstname, message) {
  return (
    checkValidationFormMessage(message) &&
    checkValidationFormEmail(email) &&
    checkValidationFormName(lastname) &&
    checkValidationFormName(firstname)
  );
}

function handleSubmit() {
  const submitBtn = document.querySelector(".submit-button");

  submitBtn.addEventListener("click", (e) => {
    // prevent page reload
    e.preventDefault();
    const email = document.querySelector("#email");
    const lastname = document.querySelector("#lastName");
    const firstname = document.querySelector("#firstName");
    const message = document.querySelector("#message");

    // Display error messages
    validEmail(email);
    validLastName(lastname);
    validFirstName(firstname);
    validMessage(message);
    console.log("su");
    // Check entire form then submit if valid
    if (checkValidationFormAll(email, lastname, firstname, message)) {
      // Change value of button
      console.log("firstname", firstname.value);
      console.log("lastname", lastname.value);
      console.log("email", email.value);
      console.log("message", message.value);
      closeModal();
    }
  });
}

const handleContactForm = () => {
  handleSubmit();
  handleForm();
};

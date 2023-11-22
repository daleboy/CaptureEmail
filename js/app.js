window.onload = function () {
  let emailState = false;
  let emailModal = document.getElementsByClassName("email-modal")[0];
  let closeButton = document.getElementsByClassName(
    "email-modal__close-btn"
  )[0];
  let thankContainer = document.getElementsByClassName("email-modal__thank")[0];
  let declineOffer = document.getElementsByClassName(
    "email-modal__decline-offer"
  )[0];
  closeButton.addEventListener("click", () => {
    emailModal.classList.remove("email-modal--visible");
  });
  let showModal = () => {
    if (!emailState) {
      emailModal.classList.add("email-modal--visible");
      emailState = true;
    }
  };
  let closeModal = () => {
    emailModal.classList.remove("email-modal--visible");
  };

  let removeErrors = () => {
    document
      .getElementsByClassName("email-modal__form-group")[0]
      .classList.remove("email-modal__form-group--error");
    document
      .getElementsByClassName("email-modal__error-message")[0]
      .classList.remove("email-modal__error-message--active");
  };
  let addErrors = () => {
    document
      .getElementsByClassName("email-modal__form-group")[0]
      .classList.add("email-modal__form-group--error");
    document
      .getElementsByClassName("email-modal__error-message")[0]
      .classList.add("email-modal__error-message--active");
    console.log("This is not a valid email address.");
  };
  document.body.addEventListener("mouseleave", () => {
    showModal();
  });

  function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
  let emailInput = document.getElementsByClassName("email-modal__input")[0];

  emailInput.addEventListener("click", () => {
    removeErrors();
  });
  let ShowThankMessage = () => {
    thankContainer.classList.add("email-thank--sucess");
    setTimeout(() => {
        closeModal()
    },3000)
  };
  let emailButton = document.getElementsByClassName("email-modal__button")[0];
  emailButton.addEventListener("click", () => {
    if (emailIsValid(emailInput.value)) {
      ShowThankMessage();
    } else {
      addErrors();
    }
  });
  declineOffer.addEventListener("click", () => {
    closeModal();
  });
};

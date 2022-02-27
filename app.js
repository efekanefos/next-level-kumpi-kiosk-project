const cards = document.querySelectorAll(".scrollProductContainer");
const popUpCard = document.querySelector(".popUpCard");
const popUpCloseBtn = document.querySelector(".popUpCard__closeBtn");
const logoSection__textSpan = document.querySelector(".logoSection__textSpan");
const popUpOverlay = document.querySelector(".popUpOverlay");
if (logoSection__textSpan.textContent === "/ SWEET POTATOES") {
  popUpCard.style.display = "none";
  popUpOverlay.style.display = "none";
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      popUpCard.style.display = "flex";
      popUpOverlay.style.display = "block";
    });
  });
  popUpCloseBtn.addEventListener("click", () => {
    popUpCard.style.display = "none";
    popUpOverlay.style.display = "none";
  });
} else {
}

const cancelOrderPopup = document.querySelector(".cancelOrderPopup");
const productCounter__minusBtns = document.querySelectorAll(".productCounter__minusBtn");
const buttons__no = document.querySelector(".buttons__no");

if (logoSection__textSpan.textContent === "/ VIEW MY ORDER") {
  cancelOrderPopup.style.display = "none";
  productCounter__minusBtns.forEach((minusBtn) => {
    minusBtn.addEventListener("click", () => {
      cancelOrderPopup.style.display = "flex";
    });
  });
  buttons__no.addEventListener("click", () => {
    cancelOrderPopup.style.display = "none";
  });
} else {
}

const customizeProducts__card = document.querySelectorAll(".customizeProducts__card");

customizeProducts__card.forEach((card) => {
  card.addEventListener("click", (e) => {
    const checkBox = e.target.children[3];
    const productCard = e.target;
    checkBox.checked = !checkBox.checked;
    checkBox.checked ? (productCard.style.boxShadow = "inset 0px 0px 0px 10px #ffbb29") : (productCard.style.boxShadow = "none");
  });
});
const radioProducts__card = document.querySelectorAll(".radioProducts__card");
/* hepsini seçiyor malesef */

radioProducts__card.forEach((card) => {
  card.addEventListener("click", (e) => {
    card.classList.toggle("radioActive");
    radioBtn.checked = !radioBtn.checked;
    let filtered = [...radioProducts__card].filter((productCard) => console.log(productCard));

    filtered.forEach((product) => {
      console.log(product);
    });
    /*
    radioBtn.checked = !radioBtn.checked;
    console.log(radioBtn.checked);
    */
  });
});

const cards = document.querySelectorAll(".sweetProducts");
const popUpCard = document.querySelector(".popUpCard");
const popUpCloseBtn = document.querySelector(".popUpCard__closeBtn");
const logoSection__textSpan = document.querySelector(".logoSection__textSpan");
if (logoSection__textSpan.textContent === "/ SWEET POTATOES") {
  popUpCard.style.display = "none";
  cards.forEach((card) => {
    card.addEventListener("click", (e) => {
      popUpCard.style.display = "flex";
    });
  });
  popUpCloseBtn.addEventListener("click", () => {
    popUpCard.style.display = "none";
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

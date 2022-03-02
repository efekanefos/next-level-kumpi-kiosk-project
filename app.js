const cards = document.querySelectorAll(".scrollProductContainer");
const popUpCard = document.querySelector(".popUpCard");
const popUpCloseBtn = document.querySelector(".popUpCard__closeBtn");
const logoSection__breadcrumb = document.querySelector(".logoSection__breadcrumb");
const popUpOverlay = document.querySelector(".popUpOverlay");

const cancelOrderPopup = document.querySelector(".cancelOrderPopup");
const productCounter__minusBtns = document.querySelectorAll(".productCounter__minusBtn");
const buttons__no = document.querySelector(".buttons__no");
const cancelOrderOverlay = document.querySelector(".cancelOrderOverlay");

const basket = document.querySelector(".basket");

function popUpEvents(breadcrumbText, popUp, overlay, items, closeBtn) {
  if (logoSection__breadcrumb.textContent === breadcrumbText) {
    popUp.style.display = "none";
    overlay.style.display = "none";
    items.forEach((card) => {
      card.addEventListener("click", (e) => {
        popUp.style.display = "flex";
        overlay.style.display = "block";
        location.hash = "popUpCard";
      });
    });
    closeBtn.addEventListener("click", () => {
      popUp.style.display = "none";
      overlay.style.display = "none";
      history.replaceState(null, null, " ");
    });
  }
}

popUpEvents(`/ SWEET POTATOES`, popUpCard, popUpOverlay, cards, popUpCloseBtn);
popUpEvents(`/ VIEW MY ORDER`, cancelOrderPopup, cancelOrderOverlay, productCounter__minusBtns, buttons__no);

if (location.hash === "#popUpCard") {
  popUpCard.style.display = "flex";
  popUpOverlay.style.display = "block";
}

if (logoSection__breadcrumb.textContent === "/ DEAL FOR 2") {
  basket.style.marginTop = "7.5rem";
}

const product__card = document.querySelectorAll(".product__card");

product__card.forEach((card) => {
  card.addEventListener("click", (e) => {
    const checkBox = e.target.children[3];
    const productCard = e.target;
    checkBox.checked = !checkBox.checked;
    checkBox.checked ? (productCard.style.boxShadow = "inset 0px 0px 0px 10px #ffbb29") : (productCard.style.boxShadow = "5px 5px 15px rgb(36 65 93 / 30%)");
  });
});
const radioProducts__card = document.querySelectorAll(".productRow1 .radioProducts__card");
const radioProducts__card2 = document.querySelectorAll(".productRow2 .radioProducts__card");

function selectThem(nodeList) {
  nodeList.forEach((card) => {
    card.addEventListener("click", (e) => {
      let notChecked = [...nodeList].filter((radioProduct) => !radioProduct.children[3].checked);
      notChecked.forEach((radioProduct) => {
        radioProduct.classList.remove("radioActive");
      });
      card.classList.add("radioActive");
    });
  });
}
selectThem(radioProducts__card);
selectThem(radioProducts__card2);

const removeCards = document.querySelectorAll(".removeSection .product__card");
removeCards.forEach((card) => {
  card.addEventListener("click", (e) => {
    const checkBox = e.target.children[3];
    const productCard = e.target;
    console.log(checkBox.checked);
    checkBox.checked ? (productCard.style.boxShadow = "inset 0px 0px 0px 10px red") : (productCard.style.boxShadow = "5px 5px 15px rgb(36 65 93 / 30%)");
  });
});

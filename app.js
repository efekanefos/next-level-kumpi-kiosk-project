const cards = document.querySelectorAll(".sweetProducts");
const popUpCard = document.querySelector(".popUpCard");
const popUpCloseBtn = document.querySelector(".popUpCard__closeBtn");
popUpCard.style.display = "none";
cards.forEach((card) => {
  card.addEventListener("click", (e) => {
    popUpCard.style.display = "flex";
  });
});
popUpCloseBtn.addEventListener("click", () => {
  popUpCard.style.display = "none";
});

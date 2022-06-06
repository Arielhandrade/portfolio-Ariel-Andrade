/* const $btnDescription = document.querySelector("#btn-description");
const $btnDescriptionBack = document.querySelector("#btn-back");
const $card = document.querySelector(".card__inner");

$btnDescription.addEventListener("click", function (e) {
  $card.classList.toggle('is-flipped');
});
$btnDescriptionBack.addEventListener("click", function (e) {
  $card.classList.toggle('is-flipped');
}); */

$(".flip").click(function () {
  $(this).parents(".card__inner").toggleClass("flipped");
});
$(".clickcard").click(function () {
  $(this).toggleClass("flipped");
});

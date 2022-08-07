const slidesContainer = document.getElementById("cards");
const slide = document.querySelector(".card");
const prevButton = document.getElementById("leftarrow");
const nextButton = document.getElementById("rightarrow");
 
nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
});
 
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
});
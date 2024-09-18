const soundButton = document.querySelector(".sound-button");
const crossIcon = document.querySelector(".cross-icon");
const continueButton = document.querySelector(".continue-button");
const firstPage = document.querySelector(".first-page");
const secondPage = document.querySelector(".second-page");
const nextButton = document.querySelector(".next-button");
const thirdPage = document.querySelector(".third-page");

const slides = [
  { img: "../images/src/slider-1.png", text: "Step-sister" },
  { img: "../images/src/slider-2.png", text: "Your Neighbour" },
  { img: "../images/src/slider-3.png", text: "Famous Celebrity" },
];

let currentSlide = 0;

const sliderImage = document.querySelector(".slider-image");
const sliderText = document.querySelector(".slider-text");

const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

crossIcon.style.display = "none";

soundButton.addEventListener("click", () => {
  crossIcon.style.display =
    crossIcon.style.display === "none" ? "block" : "none";
});

continueButton.addEventListener("click", () => {
  firstPage.style.display = "none";
  secondPage.style.display = "flex";
});

nextButton.addEventListener("click", () => {
  secondPage.style.display = "none";
  thirdPage.style.display = "flex";
});

// slider

function updateSlide(index) {
  sliderImage.src = slides[index].img;
  sliderText.textContent = slides[index].text;
}

leftArrow.addEventListener("click", () => {
  currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
  updateSlide(currentSlide);
});

rightArrow.addEventListener("click", () => {
  currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
  updateSlide(currentSlide);
});

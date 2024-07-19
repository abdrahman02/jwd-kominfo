let slideIndex = 0;
const slides = document.querySelectorAll(".carousel-item");

function showSlide(n) {
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[slideIndex].classList.add("active");
}

function changeSlide(n) {
  showSlide((slideIndex += n));
}

showSlide(slideIndex);

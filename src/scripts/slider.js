document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide-text");
  let currentIndex = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  showSlide(currentIndex); // Asegura que solo uno esté visible

  // Delegación de eventos: escucha clicks solo en botones dentro de .slide-text
  document.querySelector(".slider-text-container").addEventListener("click", (e) => {
    if (e.target.closest(".prevSlide")) {
      currentIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(currentIndex);
    }
    if (e.target.closest(".nextSlide")) {
      currentIndex = (currentIndex + 1) % slides.length;
      showSlide(currentIndex);
    }
  });
});
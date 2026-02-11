import { scrambleOnce } from "./scramble.js";

const slides = document.querySelectorAll(".slide");
let current = 0;

// Observer triggers scramble when slide enters view
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const scrambles = entry.target.querySelectorAll("[data-scramble]");
        scrambles.forEach(el => {
          scrambleOnce(el, {
            speed: 30,
            scrambles: 3
          });
        });
      }
    });
  },
  {
    threshold: 0.6
  }
);

// Observe all slides
slides.forEach(slide => observer.observe(slide));

// Keyboard navigation
function goToSlide(index) {
  slides[index].scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowDown" && current < slides.length - 1) {
    current++;
    goToSlide(current);
  }

  if (e.key === "ArrowUp" && current > 0) {
    current--;
    goToSlide(current);
  }
});

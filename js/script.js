let index = 0;
const track = document.querySelector(".slider-track");
const images = document.querySelectorAll(".slider-track img");
const imageWidth = 310; // ancho + margen

document.querySelector(".next").addEventListener("click", () => {
  if (index < images.length - 1) {
    index++;
    track.style.transform = `translateX(${-imageWidth * index}px)`;
  }
});

document.querySelector(".prev").addEventListener("click", () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(${-imageWidth * index}px)`;
  }
});

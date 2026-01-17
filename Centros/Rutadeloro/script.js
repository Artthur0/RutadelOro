document.addEventListener("DOMContentLoaded", () => {

  // Índice actual del slider
  let index = 0;

  // Elementos principales
  const track = document.querySelector(".slider-track");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  // Ancho de cada imagen (incluye margen)
  const imageWidth = 310;

  // Cargar imágenes desde JSON
  fetch("data/galeria.json")
    .then(res => res.json())
    .then(data => {

      // Crear imágenes dinámicamente
      data.rutadeloro.forEach(name => {
        const link = document.createElement("a");
        link.href = `imagenes/${name}`;
        link.className = "glightbox";

        const img = document.createElement("img");
        img.src = `imagenes/${name}`;
        img.alt = "Galería";

        link.appendChild(img);
        track.appendChild(link);
      });

      const images = document.querySelectorAll(".slider-track img");

      // Botón siguiente
      nextBtn.addEventListener("click", () => {
        if (index < images.length - 1) {
          index++;
          track.style.transform = `translateX(${-imageWidth * index}px)`;
        }
      });

      // Botón anterior
      prevBtn.addEventListener("click", () => {
        if (index > 0) {
          index--;
          track.style.transform = `translateX(${-imageWidth * index}px)`;
        }
      });

      // Inicializar Lightbox
      GLightbox({
        selector: ".glightbox",
        loop: true
      });
    });

  const leerMasBtn = document.querySelector(".leer-mas-btn");
  const espaciosExtra = document.querySelector(".espacios-extra");

  leerMasBtn.addEventListener("click", () => {
    const visible = espaciosExtra.style.display === "block";

    espaciosExtra.style.display = visible ? "none" : "block";
    leerMasBtn.textContent = visible ? "Leer más" : "Leer menos";
  });


});


const modal = document.getElementById("modal-servicios");
const openBtn = document.querySelector(".ver-servicios-btn");
const closeBtn = document.querySelector(".modal-close");

// Abrir modal
openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

// Cerrar modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  document.body.style.overflow = "";
});

// Cerrar al hacer clic fuera
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
});
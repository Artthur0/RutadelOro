document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("galeria-track");

    fetch("public/data/galeria_general.json")
        .then(res => res.json())
        .then(data => {
            // CAMBIO 1: Usamos forEach para cargar TODAS las fotos, no solo la [0]
            data.fotos.forEach(fileName => {
                const slideDiv = document.createElement("div");
                slideDiv.className = "swiper-slide";

                slideDiv.innerHTML = `
                    <div class="galeria-slide">
                        <img src="public/img/Fotos/${fileName}" alt="Inspiración">
                    </div>
                `;
                track.appendChild(slideDiv);
            });

            // CAMBIO 2: Habilitar el movimiento en Swiper
            new Swiper('.galeria-slider', {
                slidesPerView: 1,
                centeredSlides: true,
                loop: true,            // Permite que sea infinito
                autoplay: {            // Para que se mueva solo
                    delay: 3000,
                    disableOnInteraction: false,
                },
                allowTouchMove: true,  // HABILITA el arrastre con el mouse
                noSwiping: false       // HABILITA el swipe
            });
        });
});
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

    // Cargamos las fotos generales
    fetch("public/data/galeria_general.json")
        .then(res => res.json())
        .then(data => {
            data.fotos.forEach(fileName => {
                const slideDiv = document.createElement("div");
                slideDiv.className = "swiper-slide";

                // Ajustamos la ruta a donde tengas tus fotos generales
                slideDiv.innerHTML = `
                    <a href="public/img/Fotos/${fileName}" class="glightbox galeria-slide">
                        <img src="public/img/Fotos/${fileName}" alt="Inspiración Bodas">
                        <div class="galeria-overlay">
                            <i class="fa-solid fa-magnifying-glass-plus"></i>
                        </div>
                    </a>
                `;
                track.appendChild(slideDiv);
            });

            // Inicializar GLightbox
            GLightbox({ selector: ".glightbox" });

            // Inicializar Swiper
            new Swiper('.galeria-slider', {
                loop: true,
                slidesPerView: 1,
                spaceBetween: 20,
                autoplay: { delay: 3000 },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: { el: '.swiper-pagination', clickable: true },
                breakpoints: {
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1400: { slidesPerView: 4 }
                }
            });
        });
});
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
        const track = document.getElementById("galeria-track");

        // 2. Crear los elementos HTML para cada foto
        data.rutadeloro.forEach(name => {
            
            // Div principal del slide (requerido por Swiper)
            const slideDiv = document.createElement("div");
            slideDiv.className = "swiper-slide";

            // Estructura interna: Link (Lightbox) -> Div contenedor -> Imagen + Overlay
            slideDiv.innerHTML = `
                <a href="imagenes/${name}" class="glightbox galeria-slide">
                    <img src="imagenes/${name}" alt="Galería Hacienda Ruta del Oro">
                    <div class="galeria-overlay">
                        <i class="fa-solid fa-magnifying-glass-plus"></i>
                    </div>
                </a>
            `;

            track.appendChild(slideDiv);
        });

        // 3. Inicializar GLightbox (Para que se abran en grande al hacer clic)
        const lightbox = GLightbox({
            selector: ".glightbox",
            touchNavigation: true,
            loop: true,
            zoomable: true
        });

        // 4. Inicializar Swiper de Galería (Carrusel)
        new Swiper('.galeria-slider', {
            loop: true,
            slidesPerView: 1, // En celular se ve 1
            spaceBetween: 20,
            centeredSlides: true, // La foto activa va al centro
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoints: {
                640: {
                    slidesPerView: 2, // Tablet pequeña
                    centeredSlides: false,
                },
                1024: {
                    slidesPerView: 3, // PC normal
                    centeredSlides: false,
                },
                1400: {
                    slidesPerView: 4, // Pantallas muy anchas
                    centeredSlides: false,
                }
            }
        });
    })
    .catch(error => console.error("Error cargando la galería:", error));

  // =========================================
  // INICIALIZAR SLIDER DE OPINIONES (Swiper)
  // =========================================
  const swiperOpiniones = new Swiper('.opiniones-slider', {
      // Opciones básicas
      loop: true, // Permite que gire infinitamente
      spaceBetween: 30, // Espacio entre tarjetas
      grabCursor: true, // Manito al pasar el mouse
      autoplay: {
          delay: 5000, // Se mueve solo cada 5 segundos (opcional)
          disableOnInteraction: false,
      },

      // Paginación (los puntitos)
      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },

      // Flechas de navegación
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },

      // RESPONSIVE BREAKPOINTS (Lo más importante)
      breakpoints: {
          // Cuando la pantalla es >= 320px (Celulares)
          320: {
              slidesPerView: 1,
          },
          // Cuando la pantalla es >= 768px (Tablets)
          768: {
              slidesPerView: 2,
          },
          // Cuando la pantalla es >= 1024px (Escritorio)
          1024: {
              slidesPerView: 3,
          }
      }
  });


});

// =========================================
// MENÚ MÓVIL (HAMBURGUESA)
// =========================================
const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        // Alternar clase 'active' para abrir/cerrar
        navMenu.classList.toggle('active');
        
        // Cambiar el icono de hamburguesa a X (opcional, visualmente bonito)
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Cerrar el menú automáticamente al hacer clic en un enlace
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });
}



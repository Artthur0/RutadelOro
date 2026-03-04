document.addEventListener("DOMContentLoaded", () => {

  let index = 0;
  const track = document.querySelector(".slider-track");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");

  const imageWidth = 310;

  fetch("data/galeria.json")
    .then(res => res.json())
    .then(data => {
        const track = document.getElementById("galeria-track");

        data.rutadeloro.forEach(name => {
            
            const slideDiv = document.createElement("div");
            slideDiv.className = "swiper-slide";

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


        const lightbox = GLightbox({
            selector: ".glightbox",
            touchNavigation: true,
            loop: true,
            zoomable: true
        });


        new Swiper('.galeria-slider', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true,
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
                    slidesPerView: 2,
                    centeredSlides: false,
                },
                1024: {
                    slidesPerView: 3,
                    centeredSlides: false,
                },
                1400: {
                    slidesPerView: 4, 
                    centeredSlides: false,
                }
            }
        });
    })
    .catch(error => console.error("Error cargando la galería:", error));


  const swiperOpiniones = new Swiper('.opiniones-slider', {
      loop: true,
      spaceBetween: 30,
      grabCursor: true,
      autoplay: {
          delay: 5000, 
          disableOnInteraction: false,
      },

      pagination: {
          el: '.swiper-pagination',
          clickable: true,
      },

      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },

      breakpoints: {
          320: {
              slidesPerView: 1,
          },
          768: {
              slidesPerView: 2,
          },
          1024: {
              slidesPerView: 3,
          }
      }
  });


});

const menuToggle = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        const icon = menuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });
}



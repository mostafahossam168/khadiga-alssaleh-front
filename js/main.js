function menuToggle() {
  const toggleMenu = document.querySelector(".menu");
  toggleMenu.classList.toggle("active");
}

var iconSidbar = document.querySelector(".open-sidbar");
var closeSidbar = document.querySelector(".close-sidbar");
var overlay = document.querySelector(".overlay");
var sidbar = document.querySelector(".content-header .links");

iconSidbar.addEventListener("click", () => {
  sidbar.classList.add("active");
  overlay.classList.add("active");
});
closeSidbar.addEventListener("click", () => {
  sidbar.classList.remove("active");
  overlay.classList.remove("active");
});

var swiper = new Swiper(".brand-slider ", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
    // delay: 7500,
    // disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 5,
    },
    1020: {
      slidesPerView: 7,
    },
  },
});

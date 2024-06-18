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

if (document.querySelector(".brand-slider")) {
  var swiper = new Swiper(".brand-slider", {
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
}

const inputUpload = document.getElementById("userPhoto");
const image = document.getElementById("photo");
if (inputUpload) {
  const imageSrc = image.getAttribute("src");
  inputUpload.onchange = () => {
    let reader = new FileReader();

    if (inputUpload.files[0]) {
      reader.readAsDataURL(inputUpload.files[0]);
    } else {
      image.setAttribute("src", imageSrc);
      image.classList.remove("wid");
    }

    reader.onload = () => {
      image.setAttribute("src", reader.result);
      image.classList.add("wid");
    };
  };
}

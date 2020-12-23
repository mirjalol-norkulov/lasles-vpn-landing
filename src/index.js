import "./styles/tailwind.css";
import "./styles/main.css";

// import Swiper JS
import Swiper, { Navigation, Pagination } from "swiper";
// import Swiper styles

// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

const mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// Hamburger button mobile menu toggle
const hamburger = document.querySelector(".js-hamburger");
const mobileNav = document.querySelector(".js-mobile-nav");
let isOpen = false;
hamburger.addEventListener("click", () => {
  // classList.toggle is not working, strange (:
  if (isOpen) {
    mobileNav.classList.remove("mobile-nav--open");
    hamburger.classList.remove("header__hamburger--active");
  } else {
    mobileNav.classList.add("mobile-nav--open");
    hamburger.classList.add("header__hamburger--active");
  }
  isOpen = !isOpen;
});

// When clicked on mobile nav link close menu
const mobileNavLinks = mobileNav.querySelectorAll("a");

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", function () {
    isOpen = false;
    mobileNav.classList.remove("mobile-nav--open");
    hamburger.classList.remove("header__hamburger--active");
  });
});

// Add shadow to the header
const header = document.querySelector(".js-header");
let isHeaderShadowed = false;
window.addEventListener("scroll", () => {
  if (window.scrollY > header.scrollHeight) {
    if (!isHeaderShadowed) {
      header.classList.add("shadow-lg");
      isHeaderShadowed = true;
    }
  } else {
    if (isHeaderShadowed) {
      header.classList.remove("shadow-lg");
      isHeaderShadowed = false;
    }
  }
});

if (module.hot) {
  console.log("hot module replacement: accepting");
  module.hot.accept();
}

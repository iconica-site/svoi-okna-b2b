import Swiper from "swiper";
import { Keyboard, Navigation, } from "swiper/modules";

const documentsSections = document.querySelectorAll(".documents");

documentsSections.forEach(documentSection => {
  const slider = documentSection.querySelector(".documents-slider");
  const prevArrow = documentSection.querySelector(".slider-arrows__button--prev");
  const nextArrow = documentSection.querySelector(".slider-arrows__button--next");

  const swiper = new Swiper(slider, {
    modules: [Keyboard, Navigation],
    keyboard: {
      enabled: true,
      pageUpDown: false,
    },
    navigation: {
      enabled: true,
      nextEl: nextArrow,
      prevEl: prevArrow,
    },
    breakpoints: {
      "480.1": {
        slidesPerView: 2,
        spaceBetween: 8,
      },
      "768.1": {
        slidesPerView: 3,
        spaceBetween: 8,
      },
      "1024.1": {
        slidesPerView: 4,
        spaceBetween: 8,
      },
      "1200.1": {
        slidesPerView: 5,
        spaceBetween: 8,
      },
      "1440.1": {
        slidesPerView: 5,
        spaceBetween: 8.07,
      },
    },
    slidesPerView: 1,
    spaceBetween: 8,
    rewind: true,
  });
});

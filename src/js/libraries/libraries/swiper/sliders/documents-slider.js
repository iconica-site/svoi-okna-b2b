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
    slidesPerView: 5,
    spaceBetween: 8.07,
    rewind: true,
  });
});

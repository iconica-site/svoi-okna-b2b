import Swiper from "swiper";
import { Keyboard, Navigation, } from "swiper/modules";

const glazingSliders = document.querySelectorAll(".glazing-slider");

glazingSliders.forEach(glazingSlider => {
  const prevArrow = glazingSlider.querySelector(".slider-arrows__button--prev");
  const nextArrow = glazingSlider.querySelector(".slider-arrows__button--next");

  const swiper = new Swiper(glazingSlider, {
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
    spaceBetween: 10,
    rewind: true,
  });
});

import Swiper from "swiper";
import { Keyboard, Navigation, } from "swiper/modules";

const projectImagesSliders = document.querySelectorAll(".project-images");

projectImagesSliders.forEach(projectImages => {
  const prevArrow = projectImages.querySelector(".slider-arrows__button--prev");
  const nextArrow = projectImages.querySelector(".slider-arrows__button--next");

  const swiper = new Swiper(projectImages, {
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

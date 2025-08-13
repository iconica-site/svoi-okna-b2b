import Swiper from "swiper";
import { Keyboard, } from "swiper/modules";

/** @type {HTMLDivElement} */
const projectsSlider = document.querySelector(".projects__slider");

if (projectsSlider) {
  /** @type {HTMLDivElement} */
  const projectsList = projectsSlider.querySelector(".projects-list");
  /** @type {NodeListOf<HTMLDivElement>} */
  const projectListItems = projectsList.querySelectorAll(".projects-list__item");

  if (projectsList && projectListItems.length) {
    const MAX_WIDTH_768 = matchMedia("(max-width: 768px)");
    /** @type {Swiper} */
    let swiper;

    if (MAX_WIDTH_768.matches) {
      initSlider();
    }

    MAX_WIDTH_768.addEventListener("change", (event) => {
      const { matches } = event;

      matches ? initSlider() : destroySlider();
    });

    function initSlider() {
      addClasses();

      swiper = new Swiper(projectsSlider, {
        modules: [Keyboard,],
        keyboard: {
          enabled: true,
          pageUpDown: false,
        },
        spaceBetween: 20,
        initialSlide: 1,
        rewind: true,
      });
    }

    function destroySlider() {
      removeClasses();

      swiper?.destroy(true, true);
    }

    function addClasses() {
      projectsSlider.classList.add("swiper");
      projectsList.classList.add("swiper-wrapper");

      projectListItems.forEach((item) => {
        item.classList.add("swiper-slide");
      });
    }

    function removeClasses() {
      projectsSlider.classList.remove("swiper");
      projectsList.classList.remove("swiper-wrapper");

      projectListItems.forEach((item) => {
        item.classList.remove("swiper-slide");
      });
    }
  }
}

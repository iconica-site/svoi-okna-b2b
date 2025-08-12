/** @type {NodeListOf<HTMLButtonElement>} */
const sublinkButtons = document.querySelectorAll('.header-spoilers .header-spoilers__button');

if (sublinkButtons.length) {
  sublinkButtons.forEach((sublinkButton) => {
    sublinkButton.addEventListener('click', () => {
      if (!sublinkButton.classList.contains('header-spoilers__button--active')) {
        sublinkButtons.forEach((sublinkButton) => {
          sublinkButton.classList.remove('header-spoilers__button--active');
        });
      }

      sublinkButton.classList.toggle('header-spoilers__button--active');
    });
  });

  document.addEventListener('click', (event) => {
    /** @type {{ target: HTMLElement }} */
    const { target } = event;

    if (!target.closest('.header-spoilers')) {
      sublinkButtons.forEach((sublinkButton) => {
        sublinkButton.classList.remove('header-spoilers__button--active');
      });
    }
  });

  document.addEventListener('keydown', (event) => {
    const { key } = event;

    if (key === 'Escape') {
      sublinkButtons.forEach((sublinkButton) => {
        sublinkButton.classList.remove('header-spoilers__button--active');
      });
    }
  });
}

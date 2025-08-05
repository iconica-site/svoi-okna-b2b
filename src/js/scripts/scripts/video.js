/** @type {NodeListOf<HTMLDivElement>} */
const videoBlocks = document.querySelectorAll('[data-video]');

videoBlocks.forEach((videoBlock) => {
  const video = videoBlock.querySelector('video');
  const playButton = videoBlock.querySelector('[data-play]');

  playButton.addEventListener('click', () => {
    playButton.remove();
    videoBlock.dataset.video = 'played';
    video.controls = true;
    video.play();
  });
});

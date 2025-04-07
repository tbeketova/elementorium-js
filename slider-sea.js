const sliders = Array.from(document.querySelectorAll('.slider-sea__slide'));
const buttonPrev = document.querySelector('.slider-sea__button--prev');
const buttonNext = document.querySelector('.slider-sea__button--next');

let currentIndex = 0;
let autoSlideInterval; // для автопрокрутки

function showSlider(mode) {
  for (let i = 0; i < sliders.length; i++) {
    sliders[i].classList.remove(
      'slider-sea__slide--active',
      'slider-sea__slide--manual',
      'slider-sea__slide--auto'
    );

    if (i ===currentIndex) {
      sliders[i].classList.add('slider-sea__slide--active');
    }

    if (mode === 'manual') {
      sliders[i].classList.add('slider-sea__slide--manual');
    } else {
      sliders[i].classList.add('slider-sea__slide--auto');
    }
  }
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndex++;
    if (currentIndex >= sliders.length) {
      currentIndex = 0;
    }
    showSlider('auto');
  }, 4000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

buttonPrev.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = sliders.length - 1;
  }
  showSlider('manual');
  resetAutoSlide(); // сбрасывает интервал, если кликаем по кнопкам
})

buttonNext.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= sliders.length) {
    currentIndex = 0;
  }
  showSlider('manual');
  resetAutoSlide();
})

showSlider();
startAutoSlide(); // запускаем автопрокрутку
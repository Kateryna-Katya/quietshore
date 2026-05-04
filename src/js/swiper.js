import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

let gallerySwiper = null;

function initGallerySwiper() {
  const width = window.innerWidth;

  // якщо менше 1440 — створюємо
  if (width < 1440 && !gallerySwiper) {
    gallerySwiper = new Swiper('.gallery-swiper', {
      modules: [Navigation, Pagination],

      slidesPerView: 1.0,
      spaceBetween: 16,

      pagination: {
        el: '.gallery-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.gallery-next',
        prevEl: '.gallery-prev',
      },
    });
  }

  // якщо більше або рівно 1440 — знищуємо
  if (width >= 1440 && gallerySwiper) {
    gallerySwiper.destroy(true, true);
    gallerySwiper = null;
  }
}

// init
initGallerySwiper();

// on resize
window.addEventListener('resize', initGallerySwiper);
const headerBurgerButton = document.querySelector('.header__burger-button');
const headerNav = document.querySelector('.header__nav');
const headerSearchButton = document.querySelector('.header__search-button');
const headerSearchbar = document.querySelector('.header__searchbar');

if (headerNav && headerBurgerButton) {
  headerBurgerButton.addEventListener('click', () => {
    headerNav.classList.toggle('active');
  });

  headerNav.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      event.currentTarget.classList.remove('active');
    }
  });
}

if (headerSearchButton && headerSearchbar) {
  headerSearchButton.addEventListener('click', () => {
    headerSearchbar.classList.toggle('active');
  });

  headerSearchbar.addEventListener('click', (event) => {
    if (event.target === event.currentTarget) {
      headerSearchbar.classList.remove('active');
    }
  });
}

const headerNavMenuItems = document.querySelectorAll('.header__nav-menu-item');

headerNavMenuItems.forEach((item) => {
  item.addEventListener('click', (event) => {
    const isLayout = event.target === event.currentTarget;

    if (isLayout) event.currentTarget.classList.toggle('active');
  });
});

const noveltySwiperEl = document.querySelector('.novelty .swiper');
const noveltySwiperPrevEl = document.querySelector('.novelty__gallery-controls-prev');
const noveltySwiperNextEl = document.querySelector('.novelty__gallery-controls-next');

if (noveltySwiperEl && noveltySwiperPrevEl && noveltySwiperNextEl) {
  const noveltySwiper = new Swiper(noveltySwiperEl, {
    slidesPerView: 1,
    spaceBetween: 13,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 13,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 13,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 26,
      },
    },
    navigation: {
      nextEl: noveltySwiperNextEl,
      prevEl: noveltySwiperPrevEl,
    },
  });
}

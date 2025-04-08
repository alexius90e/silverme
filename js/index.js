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

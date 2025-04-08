const headerBurgerButton = document.querySelector('.header__burger-button');
const headerSearchButton = document.querySelector('.header__search-button');
const headerSearchbar = document.querySelector('.header__searchbar');

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

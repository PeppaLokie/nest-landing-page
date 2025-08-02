let lastScrollY = window.scrollY;
const logo = document.getElementById('navbarLogo');
const buttons = document.getElementById('navbarButtons');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 150 && currentScrollY > lastScrollY) {
    logo.classList.add('hide-up');
    buttons.classList.add('hide-up');
  } else if (currentScrollY < lastScrollY) {
    logo.classList.remove('hide-up');
    buttons.classList.remove('hide-up');
  }

  lastScrollY = currentScrollY;
});
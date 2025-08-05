let lastScrollY = window.scrollY;
const logo = document.getElementById("custom-navbarLogo");
const buttons = document.getElementById("custom-navbarButtons");
const hamburger = document.getElementById("hamburgerMenu");
const navLinks = document.querySelector(".custom-navbar-links");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 50 && currentScrollY > lastScrollY) {
    logo.classList.add("hide-up");
    buttons.classList.add("hide-up");
  } else if (currentScrollY < lastScrollY) {
    logo.classList.remove("hide-up");
    buttons.classList.remove("hide-up");
  }

  lastScrollY = currentScrollY;
});

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

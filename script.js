let lastScrollY = window.scrollY;
const logo = document.getElementById("navbarLogo");
const buttons = document.getElementById("navbarButtons");
const hamburger = document.getElementById("hamburgerMenu");
const navLinks = document.querySelector(".navbar-links");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > 150 && currentScrollY > lastScrollY) {
    logo.classList.add("hide-up");
    buttons.classList.add("hide-up");
    location.href = "https://google.com";
  } else if (currentScrollY < lastScrollY) {
    logo.classList.remove("hide-up");
    buttons.classList.remove("hide-up");
  }

  lastScrollY = currentScrollY;
});

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

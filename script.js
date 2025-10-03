/* Navbar scroll hide/show — improved and hamburger removed */
(function () {
  let lastScrollY = window.scrollY || 0;
  const logo = document.getElementById("custom-navbarLogo");
  const buttons = document.getElementById("custom-navbarButtons");
  const hideClass = "hide-up";
  let ticking = false;

  function updateOnScroll() {
    const currentScrollY = window.scrollY || 0;

    // hide when user scrolls down and passed a small threshold
    if (currentScrollY > 50 && currentScrollY > lastScrollY) {
      logo?.classList.add(hideClass);
      buttons?.classList.add(hideClass);
    }
    // show when user scrolls up (with a small buffer to avoid jitter)
    else if (currentScrollY + 10 < lastScrollY) {
      logo?.classList.remove(hideClass);
      buttons?.classList.remove(hideClass);
    }

    lastScrollY = currentScrollY;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateOnScroll();
        ticking = false;
      });
      ticking = true;
    }
  }

  // Passive listener for better scrolling performance
  window.addEventListener("scroll", onScroll, { passive: true });

  // Ensure navbar elements are visible after a resize/orientation change
  window.addEventListener("resize", () => {
    logo?.classList.remove(hideClass);
    buttons?.classList.remove(hideClass);
  });
})();

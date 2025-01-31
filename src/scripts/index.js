console.log("Min svenska boilerplate med Parcel och Npm är igång!");

document.addEventListener("DOMContentLoaded", () => {
  const hamburgerMenu = document.querySelector(".hamburger-menu");
  const nav = document.querySelector(".nav");
  const dropdownToggles = document.querySelectorAll(".dropdown > a");

  // Toggle menu visibility
  hamburgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!hamburgerMenu.contains(event.target) && !nav.contains(event.target)) {
      nav.classList.remove("active");
      document
        .querySelectorAll(".dropdown-menu")
        .forEach((menu) => menu.classList.remove("active"));
      document
        .querySelectorAll(".dropdown")
        .forEach((dropdown) => dropdown.classList.remove("open")); // Stäng pilar
    }
  });
});

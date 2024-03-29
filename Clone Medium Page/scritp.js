// Evento scroll

const navBar = document.querySelector(".nav");

window.addEventListener("scroll", function () {
  if (window.scrollY > 425) {
    navBar.classList.add("scrolled");
  } else {
    navBar.classList.remove("scrolled");
  }
});

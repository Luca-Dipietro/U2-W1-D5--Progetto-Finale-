// Evento scroll

const navBar = document.querySelector(".nav");
const btnNav = document.querySelector(".navB");

window.addEventListener("scroll", function () {
  if (window.scrollY > 380) {
    navBar.classList.add("scrolled1");
    btnNav.classList.add("scrolled2");
  } else {
    navBar.classList.remove("scrolled1");
    btnNav.classList.remove("scrolled2");
  }
});

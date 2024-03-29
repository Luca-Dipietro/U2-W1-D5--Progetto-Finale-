// Event scroll

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

// Event letters

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function randomOpacity() {
  const animatedLetters = document.querySelectorAll(
    "#random-letters .animated-letters"
  );
  const staticLetters = document.querySelectorAll(
    "#random-letters text:not(.animated-letters)"
  );
  animatedLetters.forEach((letter) => {
    letter.setAttribute("opacity", getRandom(0, 2));
  });
  staticLetters.forEach((letter) => {
    letter.setAttribute("opacity", 1);
  });
}

setInterval(randomOpacity, 800);

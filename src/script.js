
AOS.init({
  duration: 800,
  offset: 150,
});

var typed = new Typed(".auto-type", {
  strings: ["Student", "Third Year College Student From BSIS-NS3A"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true,
});

/*SHOW SIDEBAR*/
const navMenu = document.getElementById("sidebar"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-sidebar");
  });
}

if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-sidebar");
  });
}

/*Vanilla tilt js*/
VanillaTilt.init(document.querySelectorAll(".Interest-box")),
  {
    max: 25,
    speed: 400,
  };

// decleration variables

let navoo = document.getElementById("navoo");
let moonParent = document.getElementById("moonParent");
let colapseFather = document.getElementById("navbarTogglerDemo02");
// circle progeress virables______________----
window.addEventListener("scroll", anim);
let number1 = document.getElementById("number-1");
let number2 = document.getElementById("number-2");
let number3 = document.getElementById("number-3");
let number4 = document.getElementById("number-4");
let number5 = document.getElementById("number-5");
let number6 = document.getElementById("number-6");

let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;
let counter5 = 0;
let counter6 = 0;

// change background of navbar
function changeBg() {
  if (window.scrollY > 0) {
    navoo.classList.add("navo1");
    if (window.scrollY === 0) {
      navoo.classList.add("navo1");
    }
  } else {
    navoo.classList.remove("navo1");
  }
}
changeBg();
window.addEventListener("scroll", changeBg);

document.getElementById("togo").addEventListener("click", function () {
  if (window.scrollY === 0) {
    navoo.classList.add("navo1");
  }
});

// spineer style
$(document).ready(function () {
  $("#loading").fadeOut(1000, function () {
    $("#loading").remove();
    $("body").css("overflow-y", "auto");
  });
});

// scroll design of website________________
let sT = ScrollReveal({
  duration: 2500,
  distance: "15px",
  reset: true,
});

let sC = ScrollReveal({
  duration: 3000,
  distance: "15px",
});
let sk = ScrollReveal({
  duration: 2500,
  distance: "15px",
  reset: true,
});
let right = ScrollReveal({
  duration: 3000,
  distance: "15px",
  reset: true,
});

sC.reveal(".circleo", { origin: "top" });
sT.reveal(".textPart", { origin: "left" });
sk.reveal(".textPart2", { origin: "left" });
right.reveal(".right-part", { origin: "right" });
right.reveal(".left-part", { origin: "left" });
// skils design
let reveal = document.getElementsByTagName("circle");
console.log(reveal);
function anim() {
  var elementTop;
  var windowHeight = window.innerHeight;

  for (var i = 0; i < reveal.length; i++) {
    var elementTop = reveal[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible + 100) {
      reveal[i].classList.add(`anime${1 + i}`);

      setInterval(() => {
        if (counter1 === 90) {
          clearInterval();
        } else {
          counter1 += 1;
          number1.innerHTML = counter1 + "%";
        }
      }, 250);

      setInterval(() => {
        if (counter2 === 85) {
          clearInterval();
        } else {
          counter2 += 1;
          number2.innerHTML = counter2 + "%";
        }
      }, 240);

      setInterval(() => {
        if (counter3 === 85) {
          clearInterval();
        } else {
          counter3 += 1;
          number3.innerHTML = counter3 + "%";
        }
      }, 240);

      setInterval(() => {
        if (counter4 === 75) {
          clearInterval();
        } else {
          counter4 += 1;
          number4.innerHTML = counter4 + "%";
        }
      }, 190);

      setInterval(() => {
        if (counter5 === 65) {
          clearInterval();
        } else {
          counter5 += 1;
          number5.innerHTML = counter5 + "%";
        }
      }, 160);
      setInterval(() => {
        if (counter6 === 70) {
          clearInterval();
        } else {
          counter6 += 1;
          number6.innerHTML = counter6 + "%";
        }
      }, 160);
    } else {
      reveal[i].classList.remove(`anime${i + 1}`);

      counter1 = 0;
      counter2 = 0;
      counter3 = 0;
      counter4 = 0;
      counter5 = 0;
      counter6 = 0;
    }
  }
}

// particle.js
particlesJS("particles-js", {
  particles: {
    number: { value: 260, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

// particless.js
particlesJS("particless-js", {
  particles: {
    number: { value: 260, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
// particlesss.js
particlesJS("particlesss-js", {
  particles: {
    number: { value: 260, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});
// particlessss.js
particlesJS("particlessss-js", {
  particles: {
    number: { value: 260, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

// particlesssss.js
particlesJS("particlesssss-js", {
  particles: {
    number: { value: 260, density: { enable: true, value_area: 800 } },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 5 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 1,
      random: true,
      anim: { enable: true, speed: 1, opacity_min: 0, sync: false },
    },
    size: {
      value: 3,
      random: true,
      anim: { enable: false, speed: 4, size_min: 0.3, sync: false },
    },
    line_linked: {
      enable: false,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 1,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 600 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "bubble" },
      onclick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 250, size: 0, duration: 2, opacity: 0, speed: 3 },
      repulse: { distance: 400, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

/* =========================
   MENU MOBILE
========================= */

const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", (event) => {

  event.stopPropagation();

  nav.classList.toggle("active");

});


document.addEventListener("click", (event) => {

  if (
    nav.classList.contains("active") &&
    !nav.contains(event.target) &&
    event.target !== menuToggle
  ) {

    nav.classList.remove("active");

  }

});


/* =========================
   FECHAR MENU AO CLICAR
========================= */

document.querySelectorAll(".nav a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

  });

});


/* =========================
   CONTAGEM REGRESSIVA
=========================

   Evento:
   22 de outubro de 2026
   às 18h30

========================= */

const eventDate = new Date(
  "2026-10-22T18:30:00-03:00"
).getTime();


const countdown = setInterval(() => {

  const now = new Date().getTime();

  const distance = eventDate - now;


  if (distance <= 0) {

    clearInterval(countdown);

    document.getElementById("days").textContent = "00";
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";

    return;

  }


  const days = Math.floor(
    distance / (1000 * 60 * 60 * 24)
  );


  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) /
    (1000 * 60 * 60)
  );


  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) /
    (1000 * 60)
  );


  const seconds = Math.floor(
    (distance % (1000 * 60)) /
    1000
  );


  document.getElementById("days").textContent =
    String(days).padStart(2, "0");


  document.getElementById("hours").textContent =
    String(hours).padStart(2, "0");


  document.getElementById("minutes").textContent =
    String(minutes).padStart(2, "0");


  document.getElementById("seconds").textContent =
    String(seconds).padStart(2, "0");


}, 1000);


/* =========================
   ANIMAÇÃO AO ENTRAR NA TELA
========================= */

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

      }

    });

  },
  {
    threshold: 0.12
  }
);


document
  .querySelectorAll(
    ".highlight, .schedule-card, .gallery-card"
  )
  .forEach(element => {

    observer.observe(element);

  });


/* =========================
   HEADER AO ROLAR
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {

    header.style.background =
      "rgba(2, 11, 34, .96)";

  } else {

    header.style.background =
      "rgba(3, 17, 48, .88)";

  }

});
const curriculum = document.querySelector(".curriculum");
const tiroir = document.querySelector(".tiroir");
const trait = document.querySelectorAll(".trait");
const body = document.body; // Sélectionnez directement le body
const formation = document.querySelector(".formation");
const h1 = document.querySelector("h1");
const flou = document.querySelector(".divFlou");

tiroir.addEventListener("click", (event) => {
  if (event.target !== formation && !formation.contains(event.target)) {
    trait.forEach((element) => {
      element.classList.toggle("displayNone");
    });
    flou.classList.toggle("divFlou2");
    tiroir.classList.toggle("tiroirGrand");
    curriculum.classList.toggle("curriculumBlock");
    flou.classList.toggle("divFlou");
    body.classList.toggle("pasBouger");
  }
});

body.addEventListener("click", (event) => {
  if (event.target !== tiroir && !tiroir.contains(event.target)) {
    trait.forEach((element) => {
      element.classList.remove("displayNone");
    });
    flou.classList.remove("divFlou2");
    flou.classList.add("divFlou");
    tiroir.classList.remove("tiroirGrand");
    curriculum.classList.remove("curriculumBlock");
    body.classList.remove("pasBouger");
  }
});

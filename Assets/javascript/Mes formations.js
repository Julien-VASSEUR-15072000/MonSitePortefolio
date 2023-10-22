const curriculum = document.querySelector(".curriculum");
const tiroir = document.querySelector(".tiroir");
const trait = document.querySelectorAll(".trait");
const body = document.querySelector("body");
const formation = document.querySelector(".formation");
const h1 = document.querySelector("h1");
const tiroir1 = document.querySelector;

tiroir.addEventListener("click", (event) => {
  if (event.target !== formation && !formation.contains(event.target)) {
    trait.forEach((element) => {
      element.classList.toggle("displayNone");
    });
    tiroir.classList.toggle("tiroirGrand");
    curriculum.classList.toggle("curriculumBlock");
    if (h1) {
      // h1.classList.toggle("displayNone");
    }
  }
});

body.addEventListener("click", (event) => {
  if (event.target !== tiroir && !tiroir.contains(event.target)) {
    trait.forEach((element) => {
      element.classList.remove("displayNone");
    });
    tiroir.classList.remove("tiroirGrand");
    curriculum.classList.remove("curriculumBlock");
    if (h1) {
      // h1.classList.remove("displayNone");
    }
  }
});

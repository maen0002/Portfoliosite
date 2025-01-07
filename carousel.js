window.addEventListener("load", siteLoad);

const next = document.querySelector("#carousel_button_right");
const previous = document.querySelector("#carousel_button_left");
const tema1 = document.querySelector("#Tema1_img");
const tema2 = document.querySelector("#Tema2_img");
const tema3 = document.querySelector("#Tema3_img");
const tema4 = document.querySelector("#Tema4_img");
const tema5 = document.querySelector("#Tema5_img");
const tema5_2 = document.querySelector("#Tema5_2_img");

let carouselnr;

function siteLoad() {
  console.log("siteLoad");
  carouselnr = 0;
  console.log(carouselnr);
}

next.addEventListener("click", nextClick);
function nextClick() {
  if (carouselnr == 0) {
    tema1.classList.add("hide");
    tema2.classList.remove("hide");
    carouselnr++;
    console.log(carouselnr);
    document.querySelector("#carousel_tema_nummer").textContent = "Tema 2";
  } else if (carouselnr == 1) {
    tema2.classList.add("hide");
    tema3.classList.remove("hide");
    carouselnr++;
    console.log(carouselnr);
    document.querySelector("#carousel_tema_nummer").textContent = "Tema 3";
  } else if (carouselnr == 2) {
    tema3.classList.add("hide");
    tema4.classList.remove("hide");
    carouselnr++;
    console.log(carouselnr);
    document.querySelector("#carousel_tema_nummer").textContent = "Tema 4";
  } else if (carouselnr == 3) {
    tema4.classList.add("hide");
    tema5.classList.remove("hide");
    carouselnr++;
    console.log(carouselnr);
    document.querySelector("#carousel_tema_nummer").textContent = "Tema 5 (1)";
  } else if (carouselnr == 4) {
    tema5.classList.add("hide");
    tema5_2.classList.remove("hide");
    carouselnr++;
    console.log(carouselnr);
    document.querySelector("#carousel_tema_nummer").textContent = "Tema 5 (2)";
  } else if (carouselnr == 5) {
    tema5_2.classList.add("hide");
    tema1.classList.remove("hide");
    carouselnr = 0;
    console.log(carouselnr);
    document.querySelector("#carousel_tema_nummer").textContent = "Tema 1";
  }
}

previous.addEventListener("click", previousClick);
function previousClick() {
  if (carouselnr == 0) {
    tema1.classList.add("hide");
    tema5_2.classList.remove("hide");
    carouselnr = 5;
    console.log(carouselnr);
    document.querySelector("#carousel_tema_nummer").textContent = "Tema 5 (2)";
  } else if (carouselnr == 5) {
    tema5_2.classList.add("hide");
    tema5.classList.remove("hide");
    carouselnr--;
    console.log(carouselnr);
    document.querySelector("#carousel_tema_nummer").textContent = "Tema 5 (1)";
  } else if (carouselnr == 4) {
    tema5.classList.add("hide");
    tema4.classList.remove("hide");
    carouselnr--;
    console.log(carouselnr);
    document.querySelector("#carousel_tema_nummer").textContent = "Tema 4";
  } else if (carouselnr == 3) {
    tema4.classList.add("hide");
    tema3.classList.remove("hide");
    carouselnr--;
    console.log(carouselnr);
    document.querySelector("#carousel_tema_nummer").textContent = "Tema 3";
  } else if (carouselnr == 2) {
    tema3.classList.add("hide");
    tema2.classList.remove("hide");
    carouselnr--;
    console.log(carouselnr);
    document.querySelector("#carousel_tema_nummer").textContent = "Tema 2";
  } else if (carouselnr == 1) {
    tema2.classList.add("hide");
    tema1.classList.remove("hide");
    carouselnr = 0;
    console.log(carouselnr);
    document.querySelector("#carousel_tema_nummer").textContent = "Tema 1";
  }
}

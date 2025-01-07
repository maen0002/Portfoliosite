window.addEventListener("load", siteLoad);

function siteLoad() {
  console.log("siteLoad");
  hiddenElements.forEach((el) => observer.observe(el));
  hiddenElements2.forEach((el) => observer.observe(el));
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".grid_1-1");
const hiddenElements2 = document.querySelectorAll(".grid_1-1-2");

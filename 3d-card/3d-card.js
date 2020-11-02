const card = document.querySelector(".card");
const container = document.querySelector(".container");
const gun = document.querySelector(".gun img");
const title = document.querySelector(".info h1");
const description = document.querySelector(".info h3");
const clipsBtn = document.querySelectorAll(".clips button");
const purchaseBtn = document.querySelector(".purchase button");

container.addEventListener("mousemove", (e) => {
  const xAxis = -(window.innerWidth / 2 - e.pageX) / 15;
  const yAxis = (window.innerWidth / 2 - e.pageY) / 15;

  card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
  gun.style.transform = "translateZ(100px)";
  title.style.transform = "translateZ(110px)";
  description.style.transform = "translateZ(80px)";
  clipsBtn.forEach(button=>button.style.transform = "translateZ(150px)");
  purchaseBtn.style.transform = "translateZ(120px)";
});

container.addEventListener("mouseenter", (e) => {
  card.style.transition = "none";
});

container.addEventListener("mouseleave", (e) => {
  card.style.transition = "all 0.5s ease";
  card.style.transform = `rotateY(0deg) rotateX(0deg)`;
  gun.style.transform = "translateZ(0px)";
  gun.style.transition = "all 0.5s ease";

  title.style.transform = "translateZ(0px)";
  title.style.transition = "all 0.5s ease";

  description.style.transform = "translateZ(0px)";
  description.style.transition = "all 0.5s ease";

  clipsBtn.forEach(button=>button.style.transform = "translateZ(0px)");
  clipsBtn.forEach(button=>button.style.transition = "all 0.5s ease");

  purchaseBtn.style.transform = "translateZ(0px)";
  purchaseBtn.style.transition = "all 0.5s ease";
});

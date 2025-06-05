const buttonEl = document.getElementById("bottone");

const imgEl = document.querySelector("img");

buttonEl.addEventListener("click", function () {
  imgEl.src = ".//img/yellow_lamp.png";
  imgEl.style.transform = "scaleX(-1)";
});

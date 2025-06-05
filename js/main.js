const buttonEl = document.getElementById("bottone");

const imgEl = document.querySelector("img");

buttonEl.addEventListener("click", function () {
  if (buttonEl.textContent === "accendimi") {
    imgEl.src = ".//img/yellow_lamp.png";
    imgEl.style.transform = "scaleX(-1)";
    buttonEl.textContent = "spegnimi";
    imgEl.style.marginLeft = "3%";
    buttonEl.style.backgroundColor = "red";
  } else {
    imgEl.src = ".//img/white_lamp.png";
    imgEl.style.transform = "scaleX(1)";
    buttonEl.textContent = "accendimi";
    imgEl.style.marginLeft = "2%";
    buttonEl.style.backgroundColor = "green";
  }
});

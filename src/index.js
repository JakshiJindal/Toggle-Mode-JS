import "./styles.css";
var button = document.getElementById("circle");
var toogleButton = document.getElementsByClassName("toggle-button");
var text = document.getElementsByTagName("h3");
button.addEventListener("click", function () {
  if (button.className === "circle") {
    button.className = "white-circle";
    toogleButton[0].style.backgroundColor = "white";
    text[0].style.color = "white";
    document.body.style.backgroundColor = "black";
  }
});

console.log("color flipper");
const body = document.getElementsByTagName("body")[0];
function setColor(colorName) {
  body.style.backgroundColor = colorName;
}

function setRandomColor() {
  let red = Math.round(Math.random() * 255);
  let green = Math.round(Math.random() * 255);
  let blue = Math.round(Math.random() * 255);
  let random = `rgb(${red}, ${green}, ${blue})`;
  console.log("random", random);
  setColor(random);
}

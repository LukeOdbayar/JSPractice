const rotateRight = function (value) {
  const convertedValue = value.split("");
  const firstElement = convertedValue.shift();
  convertedValue.push(firstElement);
  return convertedValue.join("");
};
const rotateRightPeriod = function (value, periodTime) {
  let rotateValue = value;
  for (let i = 1; i <= periodTime; i++) {
    rotateValue = rotateRight(rotateValue);
  }
  return rotateValue;
};
const animateString = function (id) {
  console.log(id);
  var element = document.getElementById(id);
  var text = element.childNodes[0].data;
  setInterval(function () {
    text = text[text.length - 1] + text.substring(0, text.length - 1);
    element.childNodes[0].data = text;
  }, 100);
};

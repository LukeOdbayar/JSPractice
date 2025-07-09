console.log("Palindrome Checker");
const input = document.getElementById("inputInput");

function check() {
  let inputValue = input.value;

  inputValue === reverseString(inputValue)
    ? (document.getElementById("inputResult").innerHTML = inputValue)
    : alert(inputValue + ": This is not Palindrome");
}
function reverseString(value) {
  let reverseValue = "";
  for (i = value.length - 1; i >= 0; i--) {
    reverseValue += value.charAt([i]);
  }
  //return value.split("").reverse().join("");
  return reverseValue;
}

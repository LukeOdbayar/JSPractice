console.log("Hello welcome to Generate Random password");

const inputPass = document.getElementById("password");
const sumLenght = 12;

const upperCaseLetters = "ABCDEFGHIJKLMNOPKRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopkrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*.";

const allChars = upperCaseLetters + lowerCaseLetters + numbers + symbols;

function createPassword() {
  let password = "";
  password +=
    upperCaseLetters[Math.floor(Math.random() * upperCaseLetters.length)];
  password +=
    lowerCaseLetters[Math.floor(Math.random() * lowerCaseLetters.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  while (password.length < sumLenght) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  inputPass.value = password;
}
function copyPassword() {
  inputPass.select();
  document.execCommand("copy");
}
document
  .querySelector(".generateBtn")
  .addEventListener("click", createPassword);
document.querySelector(".iconImg").addEventListener("click", copyPassword);

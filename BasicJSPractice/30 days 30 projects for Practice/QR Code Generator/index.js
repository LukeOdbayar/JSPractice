console.log("Welcome to QR Code Generotar");

const inputUrl = document.getElementById("inputUrl");

let imgBox = document.getElementById("imgBox");
let qrcodeImg = document.getElementById("qrcodeImg");

const api = "https://api.qrserver.com/v1/";

function generateQrCode() {
  let url = `${api}create-qr-code/?size=150x150&data=${inputUrl.value}`;

  qrcodeImg.src = url;
  imgBox.classList.add("show-img");
}

document
  .querySelector(".generateBtn")
  .addEventListener("click", generateQrCode);

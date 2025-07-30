console.log("welcome to toast notification");

let toastBox = document.getElementsByClassName("toastBox")[0];

function succes() {
  showToast(
    `<img src="icons/correct.png">  Successfully submitted`,
    "successToast"
  );
}
function error() {
  showToast(`<img src="icons/cross.png">  Please fix the error`, "errorToast");
}
function invalid() {
  showToast(
    `<img src="icons/warning.png">  Invalid input, check again`,
    "invalidToast"
  );
}

function showToast(text, name) {
  let toast = document.createElement("div");

  toast.classList.add(name);
  toast.innerHTML = text;
  toastBox.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 5000);
}

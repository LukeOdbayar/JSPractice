console.log("welcome to dictionary app");

const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");
const sound = document.getElementById("sound");
const btn = document.getElementById("search-btn");

btn.addEventListener("click", () => {
  let inputWord = document.getElementById("inp-word").value;
  fetch(`${url}${inputWord}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `<div class="word">
                <h3>${inputWord}</h3>
                <button onclick="playSound()"><img src="icons/soundwave.svg" alt="" srcset=""></button>
            </div>
            <div class="details">
                <p>${data[0].meanings[0].partOfSpeech}</p>
                <p>${data[0].phonetics[1].text}</p>
            </div>
            <p class="word-meaning">${
              data[0].meanings[0].definitions[0].definition
            }</p>
            <p class="word-example">${
              data[0].meanings[0].definitions[0].example || ""
            }</p>`;
      sound.setAttribute("src", `${data[0].phonetics[1].audio}`);
    })
    .catch(() => {
      result.innerHTML = `<h3 class="error">Couldn't find The word</h3>`;
    });
  console.log(sound);
});

function playSound() {
  sound.play();
}

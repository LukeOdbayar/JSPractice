console.log("welcome to text converter");

let speech = new SpeechSynthesisUtterance();
let voices = [];
let voiceSelect = document.querySelector("select");
let synth = window.speechSynthesis;

// synth.onvoiceschanged = () => {
//   console.log("object");

//   voices = synth.getVoices();
//   speech.voice = voices[0];
//   voices.forEach((voice, i) => {
//     voiceSelect.options[i] = new Option(voice.name, i);
//   });
// };

function populateVoiceList() {
  voices = synth.getVoices();

  speech.voice = voices[0];
  voices.forEach((voice, i) => {
    voiceSelect.options[i] = new Option(voice.name, i);
  });

  //   for (const voice of voices) {
  //     const option = document.createElement("option");
  //     option.textContent = `${voice.name} (${voice.lang})`;

  //     if (voice.default) {
  //       option.textContent += " — DEFAULT";
  //     }

  //     option.setAttribute("data-lang", voice.lang);
  //     option.setAttribute("data-name", voice.name);
  //     voiceSelect.appendChild(option);
  //   }
}
populateVoiceList();
voiceSelect.addEventListener("change", () => {
  speech.voice = voices[voiceSelect.value];
  console.log(speech.voice);
});
document.querySelector("button").addEventListener("click", (event) => {
  event.preventDefault();
  speech.text = document.querySelector("textarea").value;

  synth.speak(speech);
  document.querySelector("textarea").blur();
});

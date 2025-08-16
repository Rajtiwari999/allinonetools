let synth = window.speechSynthesis;
let voiceSelect = document.getElementById("voiceSelect");
let speakBtn = document.getElementById("speakBtn");
let stopBtn = document.getElementById("stopBtn");
let textInput = document.getElementById("textInput");

function loadVoices() {
  let voices = synth.getVoices();
  voiceSelect.innerHTML = "";
  voices.forEach((voice, i) => {
    let option = document.createElement("option");
    option.value = i;
    option.textContent = `${voice.name} (${voice.lang})`;
    voiceSelect.appendChild(option);
  });
}

synth.onvoiceschanged = loadVoices;

speakBtn.addEventListener("click", () => {
  if (synth.speaking) synth.cancel();
  let text = textInput.value.trim();
  if (text !== "") {
    let utterance = new SpeechSynthesisUtterance(text);
    let selectedVoice = synth.getVoices()[voiceSelect.value];
    utterance.voice = selectedVoice;
    synth.speak(utterance);
  }
});

stopBtn.addEventListener("click", () => {
  synth.cancel();
});

window.onload = loadVoices;

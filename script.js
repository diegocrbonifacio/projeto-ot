const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const resultDiv = document.getElementById('result');

let recognition;

startBtn.addEventListener('click', () => {
  recognition = new webkitSpeechRecognition();
  recognition.lang = 'pt-BR'; // Define o idioma para reconhecimento (pode ser alterado para outros idiomas)
  recognition.start();
  recognition.addEventListener('result', onRecognitionResult);
});

stopBtn.addEventListener('click', () => {
  recognition.stop();
});

recognition.addEventListener('result', onRecognitionResult);

function onRecognitionResult(event) {
  const transcript = event.results[0][0].transcript;
  resultDiv.innerHTML += `<p>${transcript}</p>`;
}

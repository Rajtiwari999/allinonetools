let recognition, isListening=false;
function startRec(){
  if(!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)){ alert('SpeechRecognition not supported in this browser. Use Chrome.'); return; }
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRec();
  recognition.lang = 'en-US';
  recognition.interimResults = true;
  recognition.onresult = e => {
    const text = Array.from(e.results).map(r=>r[0].transcript).join('');
    document.getElementById('result').innerText = text;
  };
  recognition.start(); isListening=true;
}
function stopRec(){ if(recognition){ recognition.stop(); isListening=false; }}

function generateScript(){
  const topic = document.getElementById('topic').value.trim() || 'an interesting topic';
  const len = document.getElementById('length').value;
  const r = document.getElementById('result');
  r.innerText = `Intro: Welcome to our video on ${topic}.\n\nMain Points:\n1. Point one about ${topic}.\n2. Point two about ${topic}.\n\nConclusion: Thanks for watching. (Placeholder script — integrate AI for richer scripts)`;
}

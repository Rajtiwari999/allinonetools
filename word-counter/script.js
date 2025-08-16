function count(){
  const txt = document.getElementById('text').value.trim();
  if(!txt){ alert('Enter text'); return; }
  const words = txt.split(/\s+/).filter(Boolean);
  const chars = txt.length;
  const sentences = (txt.match(/[.!?]+/g) || []).length;
  document.getElementById('result').innerText = `Words: ${words.length}\nCharacters: ${chars}\nSentences: ${sentences}`;
}

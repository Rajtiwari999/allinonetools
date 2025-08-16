function summarize(){
  const txt = document.getElementById('src').value.trim();
  const n = parseInt(document.getElementById('sentences').value) || 3;
  const r = document.getElementById('result');
  if(!txt){ alert('Enter text'); return; }
  // simple heuristic: split into sentences and return first n sentences
  const sents = txt.match(/[^\.!\?]+[\.!\?]+/g) || [txt];
  r.innerText = sents.slice(0,n).join(' ') + '\n\n(Quick client-side summary — integrate AI for better results)';
}

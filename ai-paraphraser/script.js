function paraphrase(){
  const src = document.getElementById('source').value.trim();
  const tone = document.getElementById('tone').value;
  const r = document.getElementById('result');
  if(!src){ alert('Enter text'); return; }
  // simple client-side demo: shuffle sentences or replace synonyms (very basic)
  const sentences = src.split(/([.?!]\s+)/).filter(Boolean);
  const out = sentences.reverse().join('').replace(/\bvery\b/gi,'extremely');
  r.innerText = `(${tone}) ${out}\n\nNote: This is a basic client-side paraphrase demo. For natural paraphrasing, integrate an AI service.`;
}

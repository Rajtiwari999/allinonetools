function decode(){
  const s = document.getElementById('b64').value.trim();
  const r = document.getElementById('result'); r.innerHTML='';
  if(!s){ alert('Paste base64'); return; }
  const img = document.createElement('img'); img.src = s; img.alt='decoded';
  img.onerror = ()=>{ r.innerText = 'Invalid base64 or unsupported format.'; };
  r.appendChild(img);
}

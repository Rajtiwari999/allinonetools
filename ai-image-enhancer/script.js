function enhance(){
  const file = document.getElementById('imgInput').files[0];
  const scale = document.getElementById('scale').value;
  const r = document.getElementById('result');
  r.innerHTML = '';
  if(!file){ alert('Select an image'); return; }
  const img = document.createElement('img');
  img.className = 'preview';
  img.alt = 'preview';
  const url = URL.createObjectURL(file);
  img.src = url;
  r.appendChild(img);

  // Placeholder: simulate enhancement delay then show note
  const note = document.createElement('div');
  note.style.marginTop='10px';
  note.innerText = `Preview shown. Applying ${scale}x enhancement (placeholder). For real AI upscaling, integrate backend AI model/API.`;
  r.appendChild(note);

  // cleanup object url when image loads
  img.onload = () => { URL.revokeObjectURL(url); };
}

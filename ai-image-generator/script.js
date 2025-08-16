function generate(){
  const prompt = document.getElementById('prompt').value.trim();
  const style = document.getElementById('style').value;
  const r = document.getElementById('result');
  r.innerHTML = '';
  if(!prompt){ alert('Enter a prompt'); return; }
  const img = document.createElement('img');
  img.className='gen';
  // placeholder: use placeholder.com to display prompt text as image
  img.src = `https://via.placeholder.com/800x450.png?text=${encodeURIComponent(prompt + ' | ' + style)}`;
  r.appendChild(img);
  const note = document.createElement('div'); note.style.marginTop='8px';
  note.innerText = 'This is a placeholder image. Replace with backend AI image generation API for real results.';
  r.appendChild(note);
}

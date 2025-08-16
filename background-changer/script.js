function preview(){
  const f = document.getElementById('img').files[0];
  const r = document.getElementById('result'); r.innerHTML = '';
  if(!f){ alert('Select image'); return; }
  const img = document.createElement('img'); img.className='preview';
  img.src = URL.createObjectURL(f); img.onload=()=>URL.revokeObjectURL(img.src);
  r.appendChild(img);
}
function removeBg(){
  // Placeholder
  alert('Background removal requires server-side AI (e.g., remove.bg API). This is a UI placeholder. After integration, upload image to API and show result here.');
}

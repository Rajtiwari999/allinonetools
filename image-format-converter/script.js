function convert(){
  const f=document.getElementById('imgfile').files[0];
  const out=document.getElementById('outformat').value;
  const r=document.getElementById('result'); r.innerHTML='';
  if(!f){ alert('Select image'); return; }
  const img = new Image();
  img.onload = ()=> {
    const c = document.createElement('canvas'); c.width=img.naturalWidth; c.height=img.naturalHeight;
    const ctx = c.getContext('2d'); ctx.drawImage(img,0,0);
    c.toBlob(blob=> {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a'); a.href=url; a.download='converted.' + out.split('/')[1];
      const img2 = document.createElement('img'); img2.src=url; img2.className='preview';
      r.appendChild(img2); r.appendChild(document.createElement('br')); r.appendChild(a); a.innerText='Download Converted';
    }, out, 0.92);
  };
  img.src = URL.createObjectURL(f);
}

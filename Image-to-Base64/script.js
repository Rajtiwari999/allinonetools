function encode(){
  const f = document.getElementById('imgfile').files[0];
  const r = document.getElementById('result'); r.innerHTML='';
  if(!f){ alert('Select image'); return; }
  const reader = new FileReader();
  reader.onload = e=> {
    const ta = document.createElement('textarea'); ta.value = e.target.result; ta.readOnly=true;
    r.appendChild(ta);
  };
  reader.readAsDataURL(f);
}

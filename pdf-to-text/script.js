function convert(){
  const f = document.getElementById('pdf').files[0];
  const r = document.getElementById('result'); r.innerText='';
  if(!f){ alert('Select PDF'); return; }
  const reader = new FileReader();
  reader.onload = function(){
    const typed = new Uint8Array(this.result);
    pdfjsLib.getDocument(typed).promise.then(pdf=>{
      const pages = [];
      for(let i=1;i<=pdf.numPages;i++){
        pages.push(pdf.getPage(i).then(p=>p.getTextContent().then(tc=>tc.items.map(it=>it.str).join(' '))));
      }
      Promise.all(pages).then(texts=> r.innerText = texts.join('\n\n'));
    }).catch(err=> r.innerText = 'Error reading PDF: '+err);
  };
  reader.readAsArrayBuffer(f);
}

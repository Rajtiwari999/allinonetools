function mergePDFs() {
  const files = document.getElementById('pdfFiles').files;
  if(files.length < 2){
    alert("Please select at least 2 PDF files to merge!");
    return;
  }
  let fileNames = Array.from(files).map(f => f.name).join(', ');
  document.getElementById('result').innerText = `Selected files: ${fileNames}\nPDF merging functionality will be implemented later.`;
}

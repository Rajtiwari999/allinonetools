function compressPDF() {
  const file = document.getElementById('pdfFile').files[0];
  if(!file){
    alert("Please select a PDF file!");
    return;
  }

  document.getElementById('result').innerText = `Selected file: ${file.name}\nPDF compression will be implemented later.`;
}

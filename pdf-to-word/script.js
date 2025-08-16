function convertPDF() {
  const file = document.getElementById('pdfFile').files[0];
  if(!file){
    alert("Please select a PDF file!");
    return;
  }
  document.getElementById('result').innerText = `Selected file: ${file.name}\nConversion to Word will be implemented later.`;
}

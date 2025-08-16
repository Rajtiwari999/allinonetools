function splitPDF() {
  const file = document.getElementById('pdfFile').files[0];
  const pageNumber = parseInt(document.getElementById('pageNumber').value);

  if(!file || !pageNumber){
    alert("Please select a PDF and enter page number!");
    return;
  }

  document.getElementById('result').innerText = `Selected file: ${file.name}\nPDF splitting at page ${pageNumber} will be implemented later.`;
}

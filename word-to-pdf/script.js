function convertWord() {
  const file = document.getElementById('wordFile').files[0];
  if(!file){
    alert("Please select a Word file!");
    return;
  }
  document.getElementById('result').innerText = `Selected file: ${file.name}\nConversion to PDF will be implemented later.`;
}

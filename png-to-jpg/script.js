function convertPNGtoJPG() {
  const file = document.getElementById('pngFile').files[0];
  if(!file){ 
    alert("Please select a PNG file!"); 
    return; 
  }
  document.getElementById('result').innerText = `Selected file: ${file.name}\nConversion functionality will be implemented later.`;
}

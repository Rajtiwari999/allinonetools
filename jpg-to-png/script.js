function convertJPGtoPNG() {
  const file = document.getElementById('jpgFile').files[0];
  if(!file){ 
    alert("Please select a JPG file!"); 
    return; 
  }
  document.getElementById('result').innerText = `Selected file: ${file.name}\nConversion functionality will be implemented later.`;
}

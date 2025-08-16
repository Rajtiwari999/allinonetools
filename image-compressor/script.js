function compressImage() {
  const file = document.getElementById('imageFile').files[0];
  if(!file){ 
    alert("Please select an image!"); 
    return; 
  }
  document.getElementById('result').innerText = `Selected file: ${file.name}\nCompression functionality will be implemented later.`;
}

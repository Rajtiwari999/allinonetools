function resizeImage() {
  const file = document.getElementById('imageFile').files[0];
  const width = document.getElementById('width').value;
  const height = document.getElementById('height').value;

  if(!file){ 
    alert("Please select an image!"); 
    return; 
  }
  if(!width || !height){
    alert("Please enter both width and height!");
    return;
  }

  document.getElementById('result').innerText = `Selected file: ${file.name}\nResize to: ${width}px x ${height}px\nResize functionality will be implemented later.`;
}

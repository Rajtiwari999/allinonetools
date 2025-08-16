function convertUnit() {
  const value = parseFloat(document.getElementById('value').value);
  const from = document.getElementById('fromUnit').value;
  const to = document.getElementById('toUnit').value;

  if(isNaN(value)) {
    alert("Enter a valid number!");
    return;
  }

  let cmValue;
  // Convert from source to cm
  if(from === "cm") cmValue = value;
  else if(from === "m") cmValue = value*100;
  else if(from === "inch") cmValue = value*2.54;

  let result;
  // Convert from cm to target
  if(to === "cm") result = cmValue;
  else if(to === "m") result = cmValue/100;
  else if(to === "inch") result = cmValue/2.54;

  document.getElementById('result').innerText = `${value} ${from} = ${result.toFixed(2)} ${to}`;
}

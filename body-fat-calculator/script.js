function calculateBodyFat() {
  const weight = parseFloat(document.getElementById('weight').value);
  const waist = parseFloat(document.getElementById('waist').value);
  const hip = parseFloat(document.getElementById('hip').value);
  const wrist = parseFloat(document.getElementById('wrist').value);
  const gender = document.getElementById('gender').value;

  if(isNaN(weight) || isNaN(waist) || (gender==='female' && isNaN(hip)) || (gender==='female' && isNaN(wrist)) || !gender) {
    alert("Enter valid details!");
    return;
  }

  let bodyFat;
  if(gender === "male") {
    bodyFat = (1.20*(weight/(waist/100)**2)) + 0.23*25 - 16.2; // simplified estimation
  } else {
    bodyFat = (1.20*(weight/(waist/100)**2)) + 0.23*25 - 5.4; // simplified estimation
  }

  document.getElementById('result').innerText = `Estimated Body Fat: ${bodyFat.toFixed(2)}%`;
}

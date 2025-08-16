function calculateWater() {
  const weight = parseFloat(document.getElementById('weight').value);
  if(isNaN(weight) || weight <= 0) {
    alert("Enter a valid weight!");
    return;
  }

  // Simple formula: 35ml per kg
  const intakeMl = weight * 35;
  const intakeL = (intakeMl / 1000).toFixed(2);

  document.getElementById('result').innerText = `Recommended Daily Water Intake: ${intakeL} L`;
}

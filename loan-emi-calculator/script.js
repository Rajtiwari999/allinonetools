function calculateEMI() {
  const principal = parseFloat(document.getElementById('principal').value);
  const annualRate = parseFloat(document.getElementById('rate').value);
  const years = parseFloat(document.getElementById('time').value);

  if(isNaN(principal) || isNaN(annualRate) || isNaN(years)) {
    alert("Enter valid loan details!");
    return;
  }

  const monthlyRate = annualRate / 12 / 100;
  const months = years * 12;
  const emi = (principal * monthlyRate * Math.pow(1+monthlyRate, months)) / (Math.pow(1+monthlyRate, months)-1);

  document.getElementById('result').innerText = `Your EMI: ₹${emi.toFixed(2)} per month`;
}

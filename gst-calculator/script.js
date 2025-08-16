function calculateGST() {
  const amount = parseFloat(document.getElementById('amount').value);
  const gstRate = parseFloat(document.getElementById('gstRate').value);

  if(isNaN(amount) || isNaN(gstRate)) {
    alert("Enter valid numbers!");
    return;
  }

  const gstAmount = (amount * gstRate)/100;
  const total = amount + gstAmount;

  document.getElementById('result').innerText = `GST: ₹${gstAmount.toFixed(2)}\nTotal Amount: ₹${total.toFixed(2)}`;
}

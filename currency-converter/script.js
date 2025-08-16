function convertCurrency() {
  const amount = parseFloat(document.getElementById('amount').value);
  const from = document.getElementById('fromCurrency').value;
  const to = document.getElementById('toCurrency').value;

  if(isNaN(amount)) {
    alert("Enter a valid amount!");
    return;
  }

  // Simple mock conversion for demo
  const rates = { USD:1, INR:83, EUR:0.92 };
  const converted = (amount / rates[from]) * rates[to];
  document.getElementById('result').innerText = `${amount} ${from} = ${converted.toFixed(2)} ${to}`;
}

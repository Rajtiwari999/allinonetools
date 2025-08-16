function calculateOvulation() {
  const cycle = parseInt(document.getElementById('cycle').value);
  const lastPeriod = new Date(document.getElementById('lastPeriod').value);

  if(isNaN(cycle) || !lastPeriod.getTime()) {
    alert("Enter valid details!");
    return;
  }

  const ovulationDate = new Date(lastPeriod);
  ovulationDate.setDate(lastPeriod.getDate() + (cycle - 14));

  const fertileStart = new Date(ovulationDate);
  fertileStart.setDate(ovulationDate.getDate() - 5);
  const fertileEnd = new Date(ovulationDate);
  fertileEnd.setDate(ovulationDate.getDate() + 1);

  document.getElementById('result').innerText = 
    `Estimated Ovulation Date: ${ovulationDate.toDateString()}\nFertile Window: ${fertileStart.toDateString()} to ${fertileEnd.toDateString()}`;
}

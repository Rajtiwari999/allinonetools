function calculateSleep() {
  const wakeTime = document.getElementById('wakeTime').value;
  if(!wakeTime) {
    alert("Select a valid wake-up time!");
    return;
  }

  const [wakeHour, wakeMin] = wakeTime.split(":").map(Number);
  const sleepCycles = [9,7.5,6,4.5]; // hours

  let resultText = "Suggested bedtimes:\n";
  sleepCycles.forEach(cycle => {
    let sleepHour = wakeHour - Math.floor(cycle);
    let sleepMin = wakeMin - Math.round((cycle % 1) * 60);
    if(sleepMin < 0){ sleepHour -=1; sleepMin +=60; }
    if(sleepHour <0) sleepHour +=24;
    resultText += `${sleepHour.toString().padStart(2,'0')}:${sleepMin.toString().padStart(2,'0')}\n`;
  });

  document.getElementById('result').innerText = resultText;
}

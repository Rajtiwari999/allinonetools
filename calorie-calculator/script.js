function calculateCalories() {
  const weight = parseFloat(document.getElementById('weight').value);
  const height = parseFloat(document.getElementById('height').value);
  const age = parseFloat(document.getElementById('age').value);
  const gender = document.getElementById('gender').value;

  if(isNaN(weight) || isNaN(height) || isNaN(age) || !gender) {
    alert("Enter valid details!");
    return;
  }

  // BMR calculation using Mifflin-St Jeor Equation
  let bmr;
  if(gender === "male") {
    bmr = 10*weight + 6.25*height - 5*age + 5;
  } else {
    bmr = 10*weight + 6.25*height - 5*age - 161;
  }

  document.getElementById('result').innerText = `Estimated Daily Calories: ${Math.round(bmr)} kcal`;
}

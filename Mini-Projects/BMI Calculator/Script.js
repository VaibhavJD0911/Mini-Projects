document.querySelector('.button').addEventListener('click', function () {
    let weight = parseFloat(document.querySelector(".Weight").value);
    let heightCm = parseFloat(document.querySelector(".Height").value);
    let result = document.querySelector(".result");

    // Clear previous class
    result.className = "result";

    if (isNaN(weight) || isNaN(heightCm) || heightCm === 0) {
        result.textContent = "Please enter valid weight and height.";
        return;
    }

    let heightM = heightCm / 100;
    let bmi = weight / (heightM * heightM);
    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
        result.classList.add("underweight");
    } else if (bmi < 25) {
        category = "Normal weight";
        result.classList.add("normal");
    } else if (bmi < 30) {
        category = "Overweight";
        result.classList.add("overweight");
    } else {
        category = "Obese";
        result.classList.add("obese");
    }

    result.textContent = `Your BMI is ${bmi.toFixed(2)} (${category}).`;
});

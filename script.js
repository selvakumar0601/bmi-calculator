// Get HTML elements
const bmiForm = document.getElementById("bmiForm");

const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");

const bmiValue = document.getElementById("bmiValue");
const category = document.getElementById("category");

const result = document.getElementById("result");
const errorMessage = document.getElementById("errorMessage");


// Form Submit
bmiForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get values
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);


    // Clear previous error
    errorMessage.textContent = "";

    // Hide previous result
    result.classList.add("hidden");


    // Validation
    if (
        heightInput.value.trim() === "" ||
        weightInput.value.trim() === ""
    ) {
        errorMessage.textContent =
            "Please enter both height and weight.";

        return;
    }


    // Check valid numbers
    if (isNaN(height) || isNaN(weight)) {

        errorMessage.textContent =
            "Please enter valid numbers.";

        return;
    }


    // Check positive values
    if (height <= 0 || weight <= 0) {

        errorMessage.textContent =
            "Height and weight must be greater than zero.";

        return;
    }


    // Basic realistic validation
    if (height < 50 || height > 300) {

        errorMessage.textContent =
            "Please enter a valid height between 50 and 300 cm.";

        return;
    }


    if (weight < 10 || weight > 500) {

        errorMessage.textContent =
            "Please enter a valid weight between 10 and 500 kg.";

        return;
    }


    // Convert height from cm to meters
    const heightInMeters = height / 100;


    // BMI Formula
    const bmi = weight / (heightInMeters * heightInMeters);


    // Round BMI to 2 decimal places
    const roundedBMI = bmi.toFixed(2);


    // Display BMI
    bmiValue.textContent = roundedBMI;


    // Determine category
    let bmiCategory = "";

    if (bmi < 18.5) {

        bmiCategory = "Underweight";

    } else if (bmi < 25) {

        bmiCategory = "Normal Weight";

    } else if (bmi < 30) {

        bmiCategory = "Overweight";

    } else {

        bmiCategory = "Obese";
    }


    // Display category
    category.textContent = bmiCategory;


    // Show result
    result.classList.remove("hidden");

});
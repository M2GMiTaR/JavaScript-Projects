function addNumbers(a, b) {
    return a + b;
}

// Executes the function
let sum = addNumbers(4, 10);

// Use getElementById to display results
document.getElementById("result").innerHTML = "The sum is " + sum;

// Function for button click

function changeText() {
    document.getElementById("change").innerHTML = "Text has Changed!";
}
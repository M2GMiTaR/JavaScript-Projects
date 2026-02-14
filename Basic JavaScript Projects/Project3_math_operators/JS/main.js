
// Add
function addFunction() {
    var result = 10 + 20;
    document.getElementById("Math").innerHTML = "10 + 20 = " + result;
}

// Subtract
function subFunction() {
    var result = 30 - 10;
    document.getElementById("Math2").innerHTML = "30 - 10 = " + result;
}

// Multiply
function multFunction() {
    var result = 20 * 10;
    document.getElementById("Math3").innerHTML = "20 x 10 = " + result;
}

// Division
function divFunction() {
    var result = 200 / 20;
    document.getElementById("Math4").innerHTML = "200 / 20 = " + result;
}

// Showing multiple operators in one function
function allInOneFunction() {
    var result = (10 + 20) * 200 / 30 - 10;
    document.getElementById("Math5").innerHTML = "10 plus 20, multiplied by 200,"
    + " divided by 30 then subracted by 10 equals " + result;
}

// Modulus Operator
function modulusFunction() {
    var result = 25 % 6;
    document.getElementById("Math6").innerHTML = "When you divide 25 by 6 you have a remander of: " + result;
}

// Urary Operator or negation operator, returns opposite or negative form of something

function negation_Operator() {
    var x = 10;
    document.getElementById("Math7").innerHTML = -x;
}

// Increment and Decrement Operators
function increment_Function() {
    var x = 10
    x++;
    document.getElementById("Math8").innerHTML = "Incremented value: " + x;
}

function decrement_Function() {
    var y = 10;
    y--;
    document.getElementById("Math9").innerHTML = "Decremented value: " + y;
}

// Random math number
function random_Function() {
    var randomNumber = Math.random() * 100;
    document.getElementById("Random").innerHTML = "Random number between 0 and 100: " + randomNumber;
}


//Square root
function sqrt_Function() {
    var squareRoot = Math.sqrt(64);
    document.getElementById("Sqrt").innerHTML = "Square root of 64 is: " + squareRoot;
}

// Rounding a number
function round_Function() {
    var roundedNumber = Math.round(7.6);
    document.getElementById("Round").innerHTML = "7.6 rounded is " + roundedNumber;
}
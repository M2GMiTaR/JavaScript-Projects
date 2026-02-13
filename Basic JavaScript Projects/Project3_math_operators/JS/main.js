
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
var myVariable = 42;
document.write(typeof myVariable + "<br>");

var myVariable2 = "Hello";
document.write(typeof myVariable2 + "<br>");

// Number + string coercion
document.write(10 + "5" +"<br>");

document.write("Result: " + (5 + 5) +"<br>");

// Displays NaN (Not a Number)
document.write(0/0 + "<br>");

// isNaN() checks if it is a number and returns either true of false
document.write(isNaN("Hello") + "<br>");
document.write(isNaN(10) + "<br>");

//Infinity 

document.getElementById("positiveInfinity").innerHTML = 1e309;
document.getElementById("negativeInfinity").innerHTML = -1e309;

//Bolean logic examples
document.write(8 > 12);    // false
document.write("<br>");    // line break
document.write(15 > 7);    // true
document.write("<br>");
document.write(3 < 9);     // true
document.write("<br>");
document.write(20 < 10);   // false
document.write("<br>");
document.write(25 >= 25);  // true
document.write("<br>");
document.write(6 <= 4);    // false

// Console.log()

console.log(10 + 5);      
console.log(20 - 8);      
console.log(4 * 6);       
console.log(36 / 6);     
console.log((5 + 3) * 2); 

// Display false using console boolean
console.log(5 > 10); 

// Double equal signs
document.write("<br>");
document.write(10 == 10);
document.write("<br>");
document.write(10 == 1);
document.write("<br>");

// Tripple equal signs
X = 10;
Y = 10;
document.write(X === Y);
console.log(10 === "5"); 
document.write("<br>");
document.write(10 === "10");   
document.write("<br>");
document.write(10 === 5);      
document.write("<br>");

// AND operator (&&)
// true: both conditions are true
document.write((5 > 2) && (10 > 5));  
document.write("<br>");  // line break

// false: one condition is false
document.write((5 > 10) && (10 > 5)); 
document.write("<br>");  

// OR operator (||)
// true: at least one condition is true
document.write((5 > 10) || (10 > 5));  
document.write("<br>");  

// false: both conditions are false
document.write((5 > 10) || (2 > 5));  
document.write("<br>");  

// Not Operator Function
function not_Function() {
    document.getElementById("Not").innerHTML = !(20>10); // False
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(5>10); // True (Double negative)
}

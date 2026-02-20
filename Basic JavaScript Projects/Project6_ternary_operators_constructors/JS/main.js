// ternary operator
function Ride_Function() {
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

// Voting age program 

function Check_Vote_Age() {
    var age = Number(document.getElementById("Age").value);
    var message = (age >= 18) ? "You can vote!":"You are not old enough to vote.";
    document.getElementById("Vote_Results").innerHTML = message;
}

// Keywords and Constructor example

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function Vehicle_Function() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

// New and This examples
// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Function called by the button
function Person_Function() {
    var John = new Person("John", 30);
    document.getElementById("New_and_This").innerHTML =
        John.name + " is " + John.age + " years old.";
}

// RESERVED KEYWORD CHALLENGE (INTENTIONAL ERROR EXAMPLE)
// This code is commented out because it would break the program
// var function = "Hello";  //  function is a reserved keyword
// Reserved Keyword Challenge explanation
document.getElementById("Test").innerHTML =
    "Attempting to use a reserved keyword (such as 'function') as a variable name causes a JavaScript error.";

//NESTED FUNCTION
// moved var Starting_Point outside function to persist
var Starting_point = 0;

// Function called when button is clicked
function count_Function() {
    function Plus_one() {
        Starting_point += 1;
    }
    Plus_one();
    document.getElementById("Count").innerHTML = Starting_point;
}

//GLOBAL AND LOCAL VARIABLE

//Global
var globalVar = "I am a global variable";
function showVariables() {
    var localVar = "I am a local variable"; // Local Variable
    try {
        undefinedFunction(); // this creates an error
    } catch (error) {
        console.log("Debugging error: ", error);
    }

    document.getElementById("output").innerHTML =
    "Global: " + globalVar + "<br>Local: " + localVar;
}

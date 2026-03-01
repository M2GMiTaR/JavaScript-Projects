// While loop (counting)
function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

// Foor Loop

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; // Creating array named Instruments
var Content = "";                                                           // Creating an empty string called Content
var Y;                                                                      // Creating a variable Y to be used as counter for the loop
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {                              // Y starts at 0, then loops through all items, Y++ moves to next item each time
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

//Array
function array_Function() {
    var colors = ["Red", "Purple", "Blue", "Yellow", "Orange", "White"];
    document.getElementById("Array").innerHTML = 
    "My favorite color is " + colors[1];                    // colors[1] lists the Purple variable of colors
}

// Const Keyword
function constant_function() {
    const Car = {                   // Creating an object using constant
        make: "Toyota",
        model: "Corolla",
        year: 2020
    };

    Car.year = 2024;                // Change a property value
    Car.color = "Blue";             // Adding a new property 

    document.getElementById("Constant").innerHTML =     // Displaying the updated object properties
    "The car is a " + Car.color + " " + Car.make + " "
    + Car.model + " from " + Car.year + " ";
}

// Let keyword
function let_Function() {
    let number = 10;   // let is block-scoped - meaning it only exists inside this function

    if (number === 10) {
        let number = 20;  // this 'number' only exists inside the if block
        document.getElementById("Let").innerHTML =
            "Block scoped value: " + number;
    }
}

// Return Function
function return_Function() {
    let result = multiply(5, 4);                    // Stores the return value (20)
    document.getElementById("Return").innerHTML =
        "The result is: " + result;
}

function multiply(x, y) {
    return x * y;           // Sends the value bak to return_Function()
}

// Object Function
function object_Function() {
    let student = {             // create an object using let keyword, it represents student
        name: "Grega",
        age: 35,
        major: "love towards his cats :)",

        // Object method (a function inside the object)
        // This method returns a sentence using the object's properties
        description: function() {               
            // "this" refers to the current object (students)
            return this.name + " is " + this.age +
            " years old and major in " + this.major + ".";
        }
    };
    // Call the object's method and display the return value in HTML
    document.getElementById("Object").innerHTML = student.description();
}

// Break statement
function break_Function() {
    let text = "";

    for (let i = 1; i <= 10; i++) {
        // Stop the loop when i equals 6
        if (i === 6) {
            break;
        }
        text += i + "<br>";
    }

    document.getElementById("Break").innerHTML = text;
}

// Continue statement
function continue_Function() {
    let text = "";

    for (let i = 1; i <= 10; i++) {
        // Skip the number 5
        if (i === 5) {
            continue;
        }
        text += i + "<br>";
    }

    document.getElementById("Continue").innerHTML = text;
}

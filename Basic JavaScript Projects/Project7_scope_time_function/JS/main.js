function getTime() {
    var hour = new Date().getHours();
    var message;

    if (hour < 12) {
        message = "Good Morning!";
    } else if (hour < 18) {
        message = "Good Afternoon!";
    } else {
        message = "Good Evening!";
    }

    document.getElementById("timeGreeting").innerHTML = message;
}

// Guess my numnber IF and Else statement

function checkGuess() {
    var userGuess = Number(document.getElementById("userGuess").value); // defining userGuess and defining input being a Number
    var message;
    if (userGuess === 6) {                                              // IF statement
        message = "Wow! You have guessed my number!";
    } else {                                                            // Else statemetn
        message = "Naa, that is not the number I am thinking of!";
    }
    document.getElementById("result").innerHTML = message;              // Display result
}

// Enter number greater than 10

function checkNumber() {
    var userNumber = Number(document.getElementById("numberEntry").value); // Defining userNumber
    if (userNumber > 10) {                                                 // IF
        document.getElementById("resultMessage").innerHTML = 
        "That number is greater than 10!";
    } else {                                                               // Else
        document.getElementById("resultMessage").innerHTML =
        "That number is NOT graeter than 10.";
    }
}

// Else If statement
function Time_function() {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {        // This compares booleans but not checking the range. 
                                        //Could use AND operator: Time > 0 && Time < 12 
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18) {
        Reply = "It is afternoon.";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}   

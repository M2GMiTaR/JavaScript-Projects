alert("Hello, World!");
window.alert("Hello, World!");
document.write("Hello, World");
/* different ways of writing alert messaging */

/* You can assign a string variable to display */
var A = "<br>This is a string";
document.write(A);

var B ="Another string value assigned.";
window.alert(B);

/* example of how to write special characters within code (Escape Character)*/
document.write("<br>Lisa told Bart, \"Knock it off, Bart! or I'll tell dad!\" <br>\"Eat my shorts!\" Bart responded.");

/* Concatenating a String. concatenate means to connect things together, like links in a chain. It means to take one piece of data and stick it on the end of another piece of data.
For example: concatenating the string “device” and the string “s” makes the text “devices.”
To concatenate a string in JavaScript, you use the + operator as follows: */

document.write("<br> \"Be who you are and say what you feel,"
    + " because those who mind don\'t matter and those who matter don\'t mind.\""
    + "-Dr. Seuss <br>");

var C = "Concatenated" + " String <br>";
document.write(C);

/* You can assign multiple variables in one statement */

var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine",
    Daugther = "Penny", Son = "Zorro";

document.write(Daugther);

document.write("<br>");

/* Expressions */
document.write(3 + 3);

/*My First Function */
function My_First_Function() {  //Defining a fucntion and naming it
    var str = "This is the button text!"; //Defining a variable and giving it a string value
    document.getElementById("Button_Text") .innerHTML = str; //putting the value
                                            //of the variable into the HTML element FromPoint
                                            //with the "Button_Text" id
}


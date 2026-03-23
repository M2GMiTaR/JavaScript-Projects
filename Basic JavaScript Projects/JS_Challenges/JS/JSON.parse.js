// This is a JSON string (must be inside quotes)
var dog = '{ "name": "Dax", "breed": "Great Pyrenees", "color": "White"}';

// Convert JSON string into a JavaScript object
var JSONstring = JSON.parse(dog);

// Display the result inside the HTML element
document.getElementById("myDog").innerHTML =
  JSONstring.name + " the " + JSONstring.breed;

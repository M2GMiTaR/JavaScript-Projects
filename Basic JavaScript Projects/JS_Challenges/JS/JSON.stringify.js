// This function runs when the button is clicked
function convertToJSON() {

  // Step 1: Create a JavaScript object
  const user = {
    name: "Alice",
    age: 25,
    isStudent: true,
    hobbies: ["reading", "gaming"]
  };

  // Step 2: Convert the object into a JSON string
  const jsonString = JSON.stringify(user, null);

  // Step 3: Find the HTML element by its ID
  const outputElement = document.getElementById("output");

  // Step 4: Display the JSON string inside the <pre> tag
  // textContent ensures it shows as plain text (not HTML)
  outputElement.textContent = jsonString;
}

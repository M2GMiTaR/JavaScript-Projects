// This function runs when the paragraph is clicked
function myFunction() {
    // Create a string variable
    var sentence = "I am learning";

    // Use the += operator to concatenate more text
    sentence += " a lot from this book!";

    // Change the content of the HTML element with the id "Concatenate"
    document.getElementById("Concatenate").innerHTML = sentence;
}

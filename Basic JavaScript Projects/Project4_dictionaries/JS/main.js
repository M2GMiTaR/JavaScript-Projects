// Dictionary object (key-value pairs)

var myDictionary = {
    "JavaScript": "JavaScript; A programming language used mainly for web development.",
    "HTML": "HTML; The standard markup language for creating web pages.",
    "CSS": "CSS; A stylesheet language used to describe the look of web pages.",
    "Browser": "Browser; A software application used to access and view websites."
};

// Function to display a value from the directory at random
function showDefinition() {
    var definition = myDictionary["JavaScript"];
    document.getElementById("Dictionary").innerHTML = definition;
}
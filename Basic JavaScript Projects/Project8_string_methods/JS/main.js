// Concatenate

function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

// Slice Method
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);                        // the numbers indicate which characters will be displayed.
    document.getElementById("Slice").innerHTML = Section;
}

// Upper case and search
let text = "JavaScript is awesome and cool to learn";
let upperText = text.toUpperCase();                         // Makes the text displayed in upper case
document.getElementById("upperResult").innerHTML = 
    "Uppercase text: " + upperText;

let searchPosition = text.search("awesome");                // search() is used to find the word within bracket
document.getElementById("searchResult").innerHTML =
    "The word 'awesome' starts at index: " + searchPosition;

// Number method
function string_Method() {
    var X = 240;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

// toPrecision() Method
function precision_Method() {
    var X = 12043.5007938294;
    document.getElementById("Precision").innerHTML = X.toPrecision(10); // Specifies the lenght of the number
}

// toFixed and valueOf methods
function toFixed_Method() {
    var X = 12.56754;
    var fixedNumber = X.toFixed(2);  // rounds the number into 2 decimals
    document.getElementById("to_fixed_method").innerHTML = "Formatted number: " + fixedNumber;
}

function showValue() {
    var text = "I am a text.";
    var display_text = text.valueOf();
    document.getElementById("value_result").innerHTML = display_text;
}
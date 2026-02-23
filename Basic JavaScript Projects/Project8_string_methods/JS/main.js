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

//
let text = "JavaScript is awesome and cool to learn";
let upperText = text.toUpperCase();                         // Makes the text displayed in upper case
document.getElementById("upperResult").innerHTML = 
    "Uppercase text: " + upperText;

let searchPosition = text.search("awesome");                // search() is used to find the word within bracket
document.getElementById("searchResult").innerHTML =
    "The word 'awesome' starts at index: " + searchPosition;

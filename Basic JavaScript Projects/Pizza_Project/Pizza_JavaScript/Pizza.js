// ======================================
// MAIN FUNCTION - Starts Order Process
// ======================================

function getReceipt() {

    var text1 = "<h3>Clan Skryre Receives:</h3>";	    // This stores the text that will appear in the receipt area
    var runningTotal = 0;
    var sizeTotal = 0;
    var selectedSize;

    var sizeArray = document.getElementsByClassName("size");     // Get all radio buttons with class "size"

    for (var i = 0; i < sizeArray.length; i++) {	    // Loop through each size option
        if (sizeArray[i].checked) {				        // If radio button is selected
            selectedSize = sizeArray[i].value;          // Save selected size value
            text1 += selectedSize + "<br>";
        }
    }
    // Set price based on selected size
    if (selectedSize === "Clanrat Snack") {
        sizeTotal = 6;
    } else if (selectedSize === "Stormvermin Slice") {
        sizeTotal = 8;
    } else if (selectedSize === "Warpfire Feast") {
        sizeTotal = 10;
    } else if (selectedSize === "Doomwheel Deluxe") {
        sizeTotal = 14;
    } else if (selectedSize === "Vermintide Platter") {
        sizeTotal = 16;
    }

    runningTotal = sizeTotal;

    getTopping(runningTotal, text1);
}
// ======================================
// TOPPING CALCULATION FUNCTION
// ======================================
function getTopping(runningTotal, text1) {

    var toppingTotal = 0;
    var selectedTopping = [];	    // Array to store selected toppings
    var toppingArray = document.getElementsByClassName("toppings");		    // Get all checkboxes with class "toppings"
	// Loop through toppings
    for (var j = 0; j < toppingArray.length; j++) {			        // If topping is checked
        if (toppingArray[j].checked) {								// Add topping to array
            selectedTopping.push(toppingArray[j].value);		    // Add topping to receipt display
            text1 += toppingArray[j].value + "<br>";
        }
    }

    var toppingCount = selectedTopping.length;		    // Count how many toppings were selected
    /*
        Pricing Rule:
        - First topping is free
        - Each additional topping costs £1
    */
    if (toppingCount > 1) {							
        toppingTotal = (toppingCount - 1);
    }

    runningTotal += toppingTotal;		    // Add topping cost to total
    // Display receipt text
    document.getElementById("showText").innerHTML = text1;
    // Display final price
    document.getElementById("totalPrice").innerHTML =
        "<h3>Warpstone Payment Due: <strong>£" +
        runningTotal +
        ".00</strong></h3>";
}

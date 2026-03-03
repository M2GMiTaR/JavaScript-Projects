function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
        Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
        Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
        Color_Output = "Green" + Color_String;
        break;
        case "Blue":
        Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
        Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
        Color_Output = "Purple" + Color_String;
        break;
        default:
            Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

// get element by class name method
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed";
}

// <canvas> element
var c = document.getElementById("myCircle");    // Get the canvas element from the HTML
var ctx = c.getContext("2d");                   // Get the 2D drawing context
ctx.beginPath();
ctx.arc(95,50,40,0,2*Math.PI);
ctx.stroke();


// Linear Gradint Color
var c = document.getElementById("ID_Name");         // Get the canvas element from the HTML
var ctx = c.getContext("2d");                       // Get the 2D drawing context
var grd = ctx.createLinearGradient(0, 0, 200, 0);   // Define the rectangle size
// Add color stops to the gradient
grd.addColorStop(0, "red");                         // Start Color
grd.addColorStop(1, "white");                       // Stop Color
ctx.fillStyle = grd;                                // Apply the gradient as the fill style
ctx.fillRect(10, 10, 150, 80);                      // Draw the rectangle
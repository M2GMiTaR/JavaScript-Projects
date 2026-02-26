function countdown() {                                          // Defining fucntion
    var seconds = document.getElementById("seconds").value;     // gets value from HTML input in seconds

    function tick() {                           // this function runs once every seconds
        seconds = seconds -1;                   // subtracks 1 seconds from current time (counting down)
        timer.innerHTML = seconds;              // updates HTML element named timer - shows remaining seconds
        var time = setTimeout(tick, 1000);      // waits 1000 milliseconds (1 second). It is a loop so it ticks every second
        if (seconds == -1) {                    // checks if the timer went past 0, if it does it then displays alert with text and resets
            alert("Time is up!");
            clearTimeout(time);
            timer.innerHTML = "";
        }
    }
    tick();                                     // this starts the function 
}

// Slide show function below
let slideIndex = 1;         // Keeps track of the current slide number
showSlides(slideIndex);     // Displays the first slide when the page loads

// Next/previous controls
function plusSlides(n) {        // Moves to the next or previous slide
    showSlides(slideIndex +=n); // Adds or subtracts from the current slide index
}

//Thumbnail image controls
function currentSlide(n) {      // Displays a specific slide when a dot is clicked
    showSlides(slideIndex = n);
}

function showSlides(n) {    // Controls which slide is shown
    let i;
    let slides = document.getElementsByClassName("mySlides");       // Gets all slide elements
    let dots = document.getElementsByClassName("dot");              // Gets all dot elements
    if (n > slides.length) {slideIndex = 1}                         // If slide number exceeds total slides, go back to first slide
    if (n < 1) {slideIndex = slides.length}                         // If slide number is less than 1, go to last slide
    for (i = 0; i < slides.length; i++) {                           // Hides all slides
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");       // Removes the "active" class from all dots
    }
    slides[slideIndex-1].style.display = "block";                           // Displays the current slide
    dots[slideIndex-1].className += " active";                              // Adds the "active" class to the current dot
}
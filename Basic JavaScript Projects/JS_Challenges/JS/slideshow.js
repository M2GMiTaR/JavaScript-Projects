// Hide all slides except the first
$("#slideshow > div:gt(0)").hide();

// Set interval for slideshow
setInterval(function() {
    $('#slideshow > div:first')  // select first slide
        .fadeOut(1000)           // fade out current slide
        .next()                   // select next slide
        .fadeIn(1000)             // fade in next slide
        .end()                    // go back to first slide
        .appendTo('#slideshow');  // move first slide to end
}, 3000); // change slide every 3 seconds

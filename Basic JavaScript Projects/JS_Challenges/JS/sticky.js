// Get references to elements we will interact with
const contactBtn = document.getElementById("contactBtn");
const contactForm = document.getElementById("contactForm");
const closeBtn = document.getElementById("closeBtn");

// When user clicks the contact button
contactBtn.addEventListener("click", () => {
    // Show popup by removing 'hidden'
    contactForm.classList.remove("hidden");
});

// When user clicks the close (X) button
closeBtn.addEventListener("click", () => {
    // Hide popup again
    contactForm.classList.add("hidden");
});

// Close popup when clicking outside the form box
contactForm.addEventListener("click", (event) => {
    // Only close if user clicks the dark background
    if (event.target === contactForm) {
        contactForm.classList.add("hidden");
    }
});
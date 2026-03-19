// Wait until the user submits the form
// Then run validation before allowing submission
document.getElementById("contactForm").addEventListener("submit", function(e) {

    // If validation fails, prevent form submission
    if (!validateForm()) {
        e.preventDefault(); // stops page refresh / submission
    }
});


// Function to validate all form inputs
function validateForm() {

    // Get the form element
    let form = document.getElementById("contactForm");

    // Get input values and remove extra spaces
    let fname = form.fname.value.trim();
    let lname = form.lname.value.trim();
    let phone = form.phone.value.trim();

    // --- VALIDATION SECTION ---

    // Check if first name is empty
    if (fname === "") {
        alert("First Name must be filled out.");
        return false; // stop submission
    }

    // Check if last name is empty
    if (lname === "") {
        alert("Last Name must be filled out.");
        return false;
    }

    // Check if phone is empty
    if (phone === "") {
        alert("Phone Number must be filled out.");
        return false;
    }

    // Regular expression (regex) for phone format
    // \d = digit (0-9)
    // {3} = exactly 3 digits
    // Format: 123-456-7890
    let phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    // Test if phone matches pattern
    if (!phonePattern.test(phone)) {
        alert("Phone Number must be in the format: 555-867-5309");
        return false;
    }

    // If everything is valid
    alert("Form submitted successfully!");
    return true;
}

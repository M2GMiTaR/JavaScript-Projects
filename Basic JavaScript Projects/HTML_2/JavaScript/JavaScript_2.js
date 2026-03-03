function validateForm() {
    // Get values entered into the form fields (name, email, message)
    //document.forms allow access to the form by name
    let name = document.forms["contactForm"]["name"].value;
    let email = document.forms["contactForm"]["email"].value;
    let message = document.forms["contactForm"]["message"]. value;


    // Check if the name field is emtpy
    // if true, show an alert and stop form submission
    if (name ==="") {
        alert("Name must be filled out");
        return false; // prevents form from submitting
    }

    // check if email field is empty
    if (email ==="") {
        alert("Email must be filled out");
        return false; // prevents form from submitting
    }

    // Check if message field is empty
    if (message ==="") {
        alert("Message must be filled out");
        return false; // prevents form from submitting
    }

    // If all fields pass validation then form is allowed to submit and user sees success message
    alert("Form submitted successfully!")
    return true;
}
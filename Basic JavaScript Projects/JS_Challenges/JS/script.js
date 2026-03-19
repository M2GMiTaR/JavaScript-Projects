/* ================================= */
/* FORM CHALLENGE */
/* JavaScript form validation */
/* ================================= */

function validateForm() {

  var name = document.getElementById("name").value.trim();
  var phone = document.getElementById("phone").value.trim();

  if (name === "" || phone === "") {
    alert("Please fill in all fields before submitting.");
    return false;
  }

  return true;
}

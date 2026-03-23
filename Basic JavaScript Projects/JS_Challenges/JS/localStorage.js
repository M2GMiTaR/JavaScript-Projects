localStorage.setItem("Name", "Inti");
function showCat() {
    var name = localStorage.getItem("Name");
    document.getElementById("myCat").textContent = name;
}
// Get the modal
var modal = document.getElementById("modal");
// Get the button that opens the modal
var btn = document.getElementById("openBtn");
// Get the <span> element that closes the modal
var span = document.getElementById("closeBtn");

// When the user clicks on the button, open the modal
btn.onclick = function () {
    modal.style.visibility = "visible";
    modal.style.opacity = "1";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.visibility = "hidden";
    modal.style.opacity = "0";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";
    }
}
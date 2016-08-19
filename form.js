// JavaScript Document
function nameEntered(name) {
    if (name.value != "") {
        document.form1.nameTick.src = "Image/tick.png";
        document.form1.nameTick.alt = "tick";
    }
    else {
        document.form1.nameTick.src = "Image/cross.png";
        document.form1.nameTick.alt = "cross";
    }
}
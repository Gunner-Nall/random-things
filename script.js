toggle=false; counter=0;
function changeColor() {
    if (toggle) {
        document.getElementById("divsection").style.backgroundColor = "black";
        toggle=false
        document.getElementById("monkey").classList.remove("reverseGlow");
    }
    else {
        document.getElementById("divsection").style.backgroundColor = "rgb(118, 3, 250)";
        toggle=true
        document.getElementById("monkey").classList.add("reverseGlow");
    }

    if (counter==10) {
        document.getElementById("divsection").classList.add("shrek");
    }
    else {
        document.getElementById("divsection").classList.remove("shrek");
    }
    counter+=1
}
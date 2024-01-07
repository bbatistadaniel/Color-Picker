// Create audio variable
var audio = new Audio("assets/audios/click.mp3");
// Function to get HSL value from sliders
function getHSL(){
    var h = document.getElementById("hue").value;
    var s = document.getElementById("saturation").value;
    var l = document.getElementById("lightness").value;
    var HSL = `hsl(${h}, ${s}%, ${l}%)`;
    return HSL;
}

// Function to set HSL value to button and update color square
function setHSL(HSL = getHSL()){
    button = document.getElementById("HSL").innerText = HSL;
    var root = document.querySelector(":root");
    root.style.setProperty("--square_color", `${HSL}`);
}

// Function to copy HSL value to clipboard
function copy(){
    // Play audio when button is clicked
    audio.play();

    //Copy button text to clipboard
    navigator.clipboard.writeText(document.getElementById("HSL").innerText);
}

// Update HSL value continuously
setInterval(setHSL, 0);

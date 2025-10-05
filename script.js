let inputColor = document.getElementById("color-input");
let generateColor = document.getElementById("generate-color");
let randomColor = document.getElementById("random-color");

// when generate button is clicked
generateColor.addEventListener("click", e => {
    if (inputColor.value != ""){
        document.body.style.backgroundColor = inputColor.value;
    }
    inputColor.value = "";
});

// when random button is clicked
randomColor.addEventListener("click", (e) => {
    document.body.style.backgroundColor = generate_random_color();
    inputColor.value = "";
});

// generate random color
function generate_random_color() {
    let hue = Math.random() * 360;
    let saturation = Math.random() * 100;
    let lightness = Math.random() * 100;
    let alphsValue = Math.random();
    let color = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alphsValue})`;
    return color;
}
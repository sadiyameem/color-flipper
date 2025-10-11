let inputColor = document.getElementById("color-input");
let generateColor = document.getElementById("generate-color");
let randomColor = document.getElementById("random-color");
let colorCode = document.getElementById("color-code");
let copyColor = document.getElementById("copy-color");

// when generate button is clicked
generateColor.addEventListener("click", e => {
    if (inputColor.value != ""){
        document.body.style.backgroundColor = inputColor.value;
        
        let color = inputColor.value;
        document.body.style.backgroundColor = color;
        colorCode.textContent = `Current color: ${color}`;
    }
    inputColor.value = "";
});

// when random button is clicked
randomColor.addEventListener("click", () => {
    let color = generate_random_color();
    document.body.style.backgroundColor = color;
    colorCode.textContent = `Current color: ${color}`;
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

// copy color
copyColor.addEventListener("click", () => {
    navigator.clipboard.writeText(colorCode.textContent);
    alert("Copied to clipboard!");
});
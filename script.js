document.addEventListener('DOMContentLoaded', () => {
    const gradientButton = document.getElementById('gradientButton');
    const gradientCode = document.getElementById('gradientCode');
    const gradientBox = document.getElementById('gradientBox');
    const darkModeButton = document.getElementById('darkModeButton');
    const body = document.body;

    function getRandomColor() {
        return '#' + Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0');
    }

    function changeGradientColor() {
        const color1 = getRandomColor();
        const color2 = getRandomColor();
        gradientBox.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
        gradientCode.textContent = `${color1}, ${color2}`;
        body.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
    }

    gradientButton.addEventListener('click', changeGradientColor);
    darkModeButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    });
});























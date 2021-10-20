const canvas = document.querySelector(".canvas");
const slider = document.querySelector(".slider");
const numPixelsText = document.querySelector(".num-of-pixels");
const modeButton = document.querySelector(".toggle-mode");
const eraseButton = document.querySelector(".eraser");
const clearButton = document.querySelector(".clear");

let canvasHeight = canvas.clientHeight;
let canvasWidth = canvas.clientWidth;

let numPixels = slider.value;
numPixelsText.textContent = slider.value;

generatePixels();
normalMode();

slider.oninput = () => numPixelsText.textContent = slider.value;
slider.onchange = () => {
    removePixels();
    numPixels = slider.value;
    generatePixels();
};

let mode = "normal";
modeButton.onclick = toggleMode;
eraseButton.onclick = eraseMode;
clearButton.onclick = clearCanvas;

window.onresize = () => {
    removePixels();
    canvasHeight = canvas.clientHeight;
    canvasWidth = canvas.clientWidth;
    generatePixels();
}

function generatePixels() {
    for (let i = 0; i < numPixels**2; i++) {
        let canvasPixel = document.createElement("div");
        canvasPixel.setAttribute("class", "pixel");
        canvasPixel.style.height = `${canvasHeight / numPixels}px`;
        canvasPixel.style.width = `${canvasWidth / numPixels}px`;
        canvas.appendChild(canvasPixel);
    }
}

function removePixels() {
    for (let i = 0; i < numPixels**2; i++) {
        canvas.removeChild(canvas.lastChild);
    }
    canvasPixels = [];
}

function toggleMode() {
    if (mode === "normal") {
        mode = "random";
        modeButton.textContent = "Random";
        randomMode();
    } else if (mode === "random") {
        mode = "normal";
        modeButton.textContent = "Normal";
        normalMode();
    } else {
        alert("error detecting mode");
    }
}

function normalMode() {
    canvas.addEventListener('mouseover', (e) => {
        console.log(e.target);
        e.target.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    });
}

function randomMode() {
    canvas.addEventListener('mouseover', (e) => {
        console.log(e.target);
        e.target.style.backgroundColor = `#${Math.round(Math.random() * (0xffffff + 1)).toString(16)}80`;
    });
}

function eraseMode() {
    canvas.addEventListener('mouseover', (e) => {
        console.log(e.target);
        e.target.style.backgroundColor = "rgba(0, 0, 0, 0)";
    });
}

function clearCanvas() {
    for (let i = 0; i < canvas.childElementCount; i++) {
        canvas.childNodes[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}

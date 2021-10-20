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

slider.oninput = () => numPixelsText.textContent = slider.value;
slider.onchange = () => {
    removePixels();
    numPixels = slider.value;
    generatePixels();
};

let mode = "normal";
modeButton.onclick = toggleMode;
eraseButton.onclick = setEraseMode;
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
        canvasPixel.style.width= `${canvasWidth / numPixels}px`;
        canvas.appendChild(canvasPixel);
    }
    setNormalMode();
}

function removePixels() {
    for (let i = 0; i < numPixels**2; i++) {
        canvas.removeChild(canvas.lastChild);
    }
}

function setToggleMode() {
    if (mode === "normal") {
        mode = "random";
        modeButton.textContent = "Random";
        setRandomMode();
    } else if (mode === "random") {
        mode = "normal";
        modeButton.textContent = "Normal";
        setNormalMode();
    } else {
        alert("error detecting mode");
    }
}

function setNormalMode() {
    canvas.addEventListener('mouseover', (e) => {
        if (e.target.className === "pixel") {
            e.target.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        }
    });
}

function setRandomMode() {
    canvas.addEventListener('mouseover', (e) => {
        if (e.target.className === "pixel") {
            e.target.style.backgroundColor = `#${Math.round(Math.random() * (0xffffff + 1)).toString(16)}80`;
        }
    });
}

function setEraseMode() {
    canvas.addEventListener('mouseover', (e) => {
        if (e.target.className === "pixel") {
            e.target.style.backgroundColor = "rgba(0, 0, 0, 0)";
        }
    });
}

function clearCanvas() {
    for (let i = 0; i < canvas.childElementCount; i++) {
        canvas.childNodes[i].style.backgroundColor = "rgba(0, 0, 0, 0)";
    }
}


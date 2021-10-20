const canvas = document.querySelector(".canvas");
const slider = document.querySelector(".slider");
const numPixelsText = document.querySelector(".num-of-pixels");
const modeButton = document.querySelector(".toggle-mode");
const eraseButton = document.querySelector(".eraser");
const clearButton = document.querySelector(".clear");

let canvasHeight = canvas.clientHeight;
let canvasWidth = canvas.clientWidth;
let canvasPixels = [];

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
eraseButton.onclick = eraseMode;
clearButton.onclick = clearCanvas;

function generatePixels() {
    for (let i = 0; i < numPixels; i++) {
        canvasPixels.push([]);

        for (let j = 0; j < numPixels; j++) {
            let canvasPixel = document.createElement("div");
            canvasPixel.setAttribute("class", "pixel");
            canvasPixel.style.height = `${canvasHeight / numPixels}px`;
            canvasPixel.style.width = `${canvasWidth / numPixels}px`;
            canvasPixel.addEventListener('mouseenter', () => {
                canvasPixel.style.backgroundColor = "rgb(0, 0, 0, 0.7)";
            });

            canvasPixels[i].push(canvasPixel);
            canvas.appendChild(canvasPixels[i][j]);
        }
    }
}

function removePixels() {
    for (let i = 0; i < numPixels; i++) {
        for (let j = 0; j < numPixels; j++) {
            canvas.removeChild(canvasPixels[i][j]);
        }
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
    for (let i = 0; i < numPixels; i++) {
        for (let j = 0; j < numPixels; j++) {
            canvasPixels[i][j].addEventListener('mouseenter', () => {
                canvasPixels[i][j].style.backgroundColor = "rgb(0, 0, 0, 0.7)";
            });
        }
    }
}

function randomMode() {
    for (let i = 0; i < numPixels; i++) {
        for (let j = 0; j < numPixels; j++) {
            canvasPixels[i][j].addEventListener('mouseenter', () => {
                canvasPixels[i][j].style.backgroundColor = `#${Math.round(Math.random() * (0xffffff + 1)).toString(16)}80`;
            });
        }
    }
}

function eraseMode() {
    for (let i = 0; i < numPixels; i++) {
        for (let j = 0; j < numPixels; j++) {
            canvasPixels[i][j].addEventListener('mouseenter', () => {
                canvasPixels[i][j].style.backgroundColor = "rgb(0,0,0,0)";
            });
        }
    }
}

function clearCanvas() {
    for (let i = 0; i < numPixels; i++) {
        for (let j = 0; j < numPixels; j++) {
            canvasPixels[i][j].style.backgroundColor = "rgb(0,0,0,0)";
        }
    }
}

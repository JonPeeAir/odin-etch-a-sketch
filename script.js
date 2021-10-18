const canvas = document.querySelector(".canvas");
const slider = document.querySelector(".slider");
const numPixelsText = document.querySelector(".num-of-pixels");
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
                canvasPixel.style.backgroundColor = "black";
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

function clearCanvas() {
    for (let i = 0; i < numPixels; i++) {
        for (let j = 0; j < numPixels; j++) {
            canvasPixels[i][j].style.backgroundColor = "white";
        }
    }
}

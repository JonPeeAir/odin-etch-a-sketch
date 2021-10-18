const canvas = document.querySelector(".canvas");
let canvasHeight = canvas.clientHeight;
let canvasWidth = canvas.clientWidth;

let numPixels = 16;
let canvasPixels = [];

console.log(canvas.style.width);

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
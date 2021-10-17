const canvas = document.querySelector(".canvas");
let canvasPixels = [];

for (let i = 0; i < 16; i++) {
    canvasPixels.push([]);

    for (let j = 0; j < 16; j++) {
        canvasPixels[i].push(document.createElement("div"));
        canvasPixels[i][j].setAttribute("class", "pixel");
        canvasPixels[i][j].textContent = i + " " + j;
        canvas.appendChild(canvasPixels[i][j]);
    }
}
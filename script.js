const sketchBoard = document.querySelector(".sketch-board");
const eraseButton = document.querySelector(".erase-button")

function createGrid(pixelSize) {
    let gridArea = pixelSize * pixelSize;
    for(let i = 0; i < gridArea; i++) {
        let gridCell = document.createElement('div');
        gridCell.classList.add("pixel")
        sketchBoard.style.gridTemplateColumns = `repeat(${pixelSize}, auto)`;
        sketchBoard.style.gridTemplateRows = `repeat(${pixelSize}, auto)`;
        sketchBoard.insertAdjacentElement('beforeend', gridCell);
    }
    let gridPixels = sketchBoard.querySelectorAll('div');
    eraseButton.addEventListener('click', erase);
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', draw));
}


function draw() {
    this.style.backgroundColor = '#000000';
}

function drawRedShade() {
    let red = 255;
    let green = Math.floor(Math.random()*140);
    let blue = Math.floor(Math.random()*150);
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function drawBlueShade() {
    let red = 100;
    let green = Math.floor(Math.random()*255);
    let blue = 255;
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function drawRandomColor() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = Math.floor(Math.random()*255);
    let color = 
    this.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function drawWhite(){
    this.style.backgroundColor = '#FFFFFF';
}

//For erase button
function erase() {
    gridPixel.style.backgroundColor = white
}

function radioSelected() {
    let blackPen = document.querySelector("#black");
    
}


createGrid(15);



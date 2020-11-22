const sketchBoard = document.querySelector(".sketch-board");

const eraseButton = document.querySelector(".eraser-button");
const colorButtons = document.querySelectorAll(".color-button");
const newGridButton = document.querySelector(".new-grid-button");

const displaySize = document.querySelector('.range-number');
const sizeSlider = document.querySelector(".slider");

let color = '#000000';

testi();

function createGrid(pixelSize) {
    grid(pixelSize)

    let gridPixels = sketchBoard.querySelectorAll('div');

    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', pixelColor));
    

}

function grid(pixelSize) {
    let gridArea = pixelSize * pixelSize;

    for(let i = 0; i < gridArea; i++) {
        let gridCell = document.createElement('div');
        gridCell.classList.add("pixel")
        sketchBoard.style.gridTemplateColumns = `repeat(${pixelSize}, auto)`;
        sketchBoard.style.gridTemplateRows = `repeat(${pixelSize}, auto)`;
        sketchBoard.insertAdjacentElement('beforeend', gridCell);
    }
}

function pixelColor() {
    this.style.backgroundColor = color;
}

function drawRedShade() {
    let red = 255;
    let green = Math.floor(Math.random()*160);
    let blue = Math.floor(Math.random()*150);
    color = `rgb(${red}, ${green}, ${blue})`;
}

function drawBlueShade() {
    let red = Math.floor(Math.random()*255);
    let green = Math.floor(Math.random()*255);
    let blue = 255;
    color = `rgb(${red}, ${green}, ${blue})`;
}

//For erase button
function eraseAllColor() {
    let gridPixels = sketchBoard.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.style.backgroundColor = '#ffffff');
}

function playersPickedColor(val) {
    color = val;
}

function colorPicker(event) {
    switch(event.target.dataset.color) {
        case 'red':
            drawRedShade();
            break;
        case 'blue':
            drawBlueShade();
            break;
        case 'random':
            playersPickedColor(this.value)
            break;            
        case 'black':
            color = 'black';
            break;   
    }
}

function pixelSizeDisplay() {


    displaySize.textContent = sizeSlider.value + ' pixels';
    sizeSlider.addEventListener('mousemove', function() {
        displaySize.textContent = sizeSlider.value + ' pixels';
    })
}

/*function changeGridSize() {
    gridPixelSize = sizeSlider.value;
    console.log(gridPixelSize)
}*/


pixelSizeDisplay();



colorButtons.forEach(colorButton => colorButton.addEventListener('click', colorPicker));
eraseButton.addEventListener('click', eraseAllColor);

let number = 16;
createGrid(number)

function testi() {
    

    sizeSlider.addEventListener("mouseup", function() {
    number = parseInt(sizeSlider.value);
    console.log(number)
    
    eraseAllColor()
    createGrid(number)
});


}


const sketchBoard = document.querySelector(".sketch-board");


function createGrid(pixelSize) {
    let gridArea = pixelSize * pixelSize;
    for(let i = 0; i < gridArea; i++) {
        let gridCell = document.createElement('div');
        gridCell.classList.add("pixel")
        sketchBoard.style.gridTemplateColumns = `repeat(${pixelSize}, 1fr)`;
        sketchBoard.style.gridTemplateRows = `repeat(${pixelSize}, 1fr)`;
        sketchBoard.insertAdjacentElement('beforeend', gridCell);
    }
    let gridPixels = sketchBoard.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', draw));
}


function draw() {
    this.style.backgroundColor = '#000000';
}
let gridPixels = sketchBoard.querySelectorAll('td');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', draw));



createGrid(24);



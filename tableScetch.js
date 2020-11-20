
const sketchBoard = document.querySelector(".sketch-board");
sketchBoard.style.borderCollapse = "collapse";

let row;
let cell;

let allCells = document.querySelectorAll('td');



function createGrid(pixelSize) {
    for(let i = 0; i < pixelSize; i++) {
        row = sketchBoard.insertRow(i);

        for(let j = 0; j < pixelSize; j++) {
            cell = row.insertCell(j);
            cell.classList.add("pixel")
            
        }
    }
    let gridPixels = sketchBoard.querySelectorAll('td');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener('mouseover', draw));

}

function draw() {
    this.style.backgroundColor = '#000000';
}


createGrid(100);
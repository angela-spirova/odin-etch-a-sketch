const root = document.documentElement;
const container = document.getElementById('container');

const button = document.getElementById('grid-size-button');
const slider = document.getElementById('grid-size-slider');

let color = 'black';

const colorInput = document.getElementById('custom-color');
colorInput.addEventListener('input', () => {
    color = colorInput.value;
});



button.addEventListener('click', () => {
    clearGrid();
    const newGridSize = slider.value;
    createGrid(newGridSize);
});

slider.addEventListener('input', () => {
    const spans = document.querySelectorAll('.slider-value');
    spans.forEach((span) => {
        span.textContent = slider.value;
    });
})

function clearGrid(){
    container.innerHTML="";
}

function createGrid(gridSize){
    root.style.setProperty('--grid-size', gridSize);
    const gridCellSideLength = container.style.width / gridSize;
    for(let i=0; i<gridSize*gridSize; i++){
        const gridCell = document.createElement('div');

        gridCell.classList.add('grid-cell');

        gridCell.addEventListener('mouseover', () =>{
            colorGridCell(gridCell, color);
        });

        container.appendChild(gridCell);
    }
}

function colorGridCell(gridCell, color){
    gridCell.style.backgroundColor = color;
}

createGrid(16);
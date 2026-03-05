const root = document.documentElement;
const container = document.getElementById('container');

const slider = document.getElementById('grid-size-slider');

slider.addEventListener('input', () => {
    const spans = document.querySelectorAll('.slider-value');
    spans.forEach((span) => {
        span.textContent = slider.value;
    });

    clearGrid();
    const newGridSize = slider.value;
    createGrid(newGridSize);

});

let color = 'black';

const colorInput = document.getElementById('custom-color');

colorInput.addEventListener('input', () => {
    if(randomColorMode){
        randomColorMode = false;
    }
    color = colorInput.value;
});

const randomColorModeToggle = document.getElementById('random-color');
let randomColorMode = false;
randomColorModeToggle.addEventListener('click', () => {
    randomColorMode = true;
});


function clearGrid(){
    container.innerHTML="";
}

function createGrid(gridSize){
    root.style.setProperty('--grid-size', gridSize);
    for(let i=0; i<gridSize*gridSize; i++){
        const gridCell = document.createElement('div');

        gridCell.classList.add('grid-cell');

        gridCell.addEventListener('mouseover', () =>{
            if(randomColorMode){
                color = getRandomColor();
            }
            colorGridCell(gridCell, color);
        });

        container.appendChild(gridCell);
    }
}

function colorGridCell(gridCell, color){
    gridCell.style.backgroundColor = color;
}

function getRandomColor(){
    return `hsl(${Math.random()*255}, 100%, 50%)`;
}

const gridLinesButton = document.getElementById('grid-lines-button');

gridLinesButton.addEventListener('click', () => {
    document.querySelectorAll('.grid-cell').forEach((gridCell) =>{
        gridCell.classList.toggle('borderless-cell');
    });
});

createGrid(16);
const root = document.documentElement;
const container = document.getElementById('container');

let gridSize = 16;

const button = document.getElementById('grid-size-button');
const slider = document.getElementById('grid-size-slider');

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
            gridCell.style.backgroundColor = 'black';
        });

        container.appendChild(gridCell);
    }
}

createGrid();
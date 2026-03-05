const root = document.documentElement;
const container = document.getElementById('container');

function createGrid(gridSize=16){
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
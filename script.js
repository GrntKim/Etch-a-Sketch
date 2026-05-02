const grid = document.querySelector('.grid');

let gridSize = 16;

function drawGrid(gridNum) {
    grid.textContent = '';
    grid.style.setProperty('--grid-size', gridNum);
    for(let i=0; i<gridNum*gridNum; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        });
        grid.appendChild(cell);
    }
}

document.querySelector('.resize-button').addEventListener('click', () => {
    const input = prompt('Enter new size');
    if(input === null || input === '') return;
    gridSize = Number(input);
    drawGrid(gridSize);
});

document.querySelector('.reset-button').addEventListener('click', () => drawGrid(gridSize));

drawGrid(gridSize);
const grid = document.querySelector('.grid');

function drawGrid(gridNum) {
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

drawGrid(64);
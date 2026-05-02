const grid = document.querySelector('.grid');

let gridSize = 16;

function drawGrid(gridNum) {
    grid.textContent = '';
    grid.style.setProperty('--grid-size', gridNum);
    for(let i=0; i<gridNum*gridNum; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.hoverConunt = 0;

        cell.addEventListener('mouseover', () => {
            let hoverConunt = Number(cell.dataset.hoverConunt);
            if (hoverConunt < 10) hoverConunt++;

            cell.dataset.hoverConunt = hoverConunt;
            cell.style.backgroundColor = `rgba(0, 0, 0, ${hoverConunt/10})`;
        });
        grid.appendChild(cell);

    }
}

document.querySelector('.resize-button').addEventListener('click', () => {
    const input = prompt('Enter new size (1~100)');

    if (input === null) return;

    if (input === '' || Number.isNaN(Number(input))) {
        alert('Pleast enter a number');
        return;
    } 

    const newGridSize = Number(input);

    if (newGridSize <= 0 || newGridSize > 100) {
        alert('Out of limit (1~100)');
        return;
    }

    gridSize = newGridSize;
    drawGrid(gridSize);
});

document.querySelector('.reset-button').addEventListener('click', () => {
    if (confirm('Are you sure want to reset the canvas?'))
        drawGrid(gridSize)
});



drawGrid(gridSize);
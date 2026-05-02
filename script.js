const grid = document.querySelector('.grid');

let gridSize = 16;

function drawGrid(gridNum) {
    grid.textContent = '';
    grid.style.setProperty('--grid-size', gridNum);
    for(let i=0; i<gridNum*gridNum; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.hoverCount = 0;

        cell.addEventListener('mouseover', () => {
            let hoverCount = Number(cell.dataset.hoverCount);
            if (hoverCount < 10) hoverCount++;

            cell.dataset.hoverCount = hoverCount;
            cell.style.backgroundColor = `rgba(0, 0, 0, ${hoverCount/10})`;
        });
        grid.appendChild(cell);

    }
}

document.querySelector('.resize-button').addEventListener('click', () => {
    const input = prompt('Enter new size (1~100)');

    if (input === null) return;

    if (input.trim() === '' || Number.isNaN(Number(input))) {
        alert('Please enter a number');
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
    if (confirm('Are you sure you want to reset the canvas?'))
        drawGrid(gridSize)
});



drawGrid(gridSize);
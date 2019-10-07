function createAlien() {
	const alien = document.createElement("div");
	alien.setAttribute("class", "alien");
	alien.innerText = " Alien ";
	return alien;
}

function createRow() {
    const row = document.createElement("div");
    row.setAttribute('class','row')
	for (let i = 0; i < 10; i++) {
		row.append(createAlien());
    }
    return row;
}

function createGridOfAliens() {
    const grid = document.createElement('div');
    for (let i = 0; i < 4; i++) {
        grid.append(createRow())
    }
    return grid;
}

const grid   = createGridOfAliens()
document.body.appendChild(grid);

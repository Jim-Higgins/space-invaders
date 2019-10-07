function createAlien() {
	const alien = document.createElement("img");
	alien.setAttribute("class", "alien");
	alien.setAttribute("src", "alien.png");
	alien.innerText = " Alien ";
	return alien;
}

function createRow() {
	const row = document.createElement("div");
	row.setAttribute("class", "row");
	for (let i = 0; i < 10; i++) {
		row.append(createAlien());
	}
	return row;
}

function createGridOfAliens() {
	const grid = document.createElement("div");
	for (let i = 0; i < 4; i++) {
		grid.append(createRow());
	}
	return grid;
}

function createPlayer() {
	const player = document.createElement("img");
	player.setAttribute("class", "player");
	player.setAttribute("src", "ship1.png");
	player.innerText = "Player";
	return player;
}

function createBullet(yCoords) {
	const bullet = document.createElement("img");
	bullet.setAttribute("class", "bullet");
	bullet.setAttribute("src", "bullet.png");
	return bullet;
}

function handleKey(event) {
	// Fire Bullet
	if (event.keyCode === 32) {
		const yCoords = document.querySelector(".player").top - 10;
		document.body.appendChild(createBullet(yCoords));
	}
	// Move Left
	if (event.keyCode === 37) {
		const player = document.querySelector(".player");
		player.style.left = player.offsetLeft - 20 + "px";
	}
	// Move Right
	if (event.keyCode === 39) {
		const player = document.querySelector(".player");
		player.style.left = player.offsetLeft + 20 + "px";
	}
}

const player = createPlayer();
const bullet = createBullet();
const grid = createGridOfAliens();
document.body.appendChild(grid);
document.body.appendChild(player);

document.addEventListener("keydown", handleKey);

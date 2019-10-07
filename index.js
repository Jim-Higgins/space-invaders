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

function createBullet() {
  const bullet = document.createElement("img");
  bullet.setAttribute("class", "bullet");
  bullet.setAttribute("src", "bullet.png");
  return bullet;
}

function fireBullet(event) {
  if (event.keyCode === 32) document.body.appendChild(createBullet());
}

const player = createPlayer();
const bullet = createBullet();
const grid = createGridOfAliens();
document.body.appendChild(grid);
document.body.appendChild(player);
document.addEventListener("keyup", fireBullet);

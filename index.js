function createAlien() {
  const alien = document.createElement("img");
  alien.setAttribute("class", "alien");
  alien.setAttribute("src", "alien.png");
  alien.innerText = " Alien ";

  alien.addEventListener("click", () => {
    console.log("hello");
  });

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

function createBullet(xCoords) {
  const bullet = document.createElement("img");
  bullet.setAttribute("class", "bullet");
  bullet.setAttribute("src", "bullet.png");
  bullet.setAttribute("style", `left:${xCoords}px`);
  return bullet;
}

function handleKey(event) {
  // Fire Bullet
  if (event.keyCode === 32) {
    const xCoords = document.querySelector(".player").offsetLeft + 12;
    const bullet = createBullet(xCoords);
    document.body.appendChild(bullet);
    translateUp(bullet);
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

function translateUp(bullet) {
  let position = 30;
  let id = setInterval(frame, 1);
  function frame() {
    if (hitAlien(bullet)) {
      clearInterval(id);
      console.log("I have been Hit aaaggghhh");
    } else {
        clearInterval(id)
      position++;
      bullet.style.bottom = position + "px";
    }
  }
}

function hitAlien(bullet) {
  grid.childNodes.forEach(row => {
    row.childNodes.forEach(alien => {
        console.log(alien, bullet, '<--------')
      if (
        bullet.offsetLeft >= alien.offsetLeft &&
        bullet.offsetLeft < alien.offsetLeft + alien.width
      )
        return true;
    });
  });
  return false;
}

const player = createPlayer();
const bullet = createBullet();
const grid = createGridOfAliens();
document.body.appendChild(grid);
document.body.appendChild(player);

document.addEventListener("keydown", handleKey);

const cub = document.createElement('div');
const body = document.querySelector('body');

cub.style.width = '150px';
cub.style.height = '150px';
cub.style.background = 'red';
cub.style.borderRadius = '15px';
cub.style.position = 'absolute';
cub.style.top = '-150px';
cub.style.left = '0';

body.style.background = 'url("background.jpg") top center no-repeat';

body.append(cub);

const widthWindow = document.body.clientWidth;
const heightWindow = window.innerHeight;

const STEP = 50;

let isGameActive = false;
const cubWidth = cub.clientWidth;

function startGame() {
  if (!isGameActive) {
    isGameActive = true;
    const intervalId = setInterval(() => {
      const currentTop = parseInt(cub.style.top || 0);
      const cubHeight = cub.clientHeight;

      if (currentTop + cubHeight <= heightWindow - STEP) {
        cub.style.top = `${currentTop + STEP}px`;
      } else {
        clearInterval(intervalId);
        isGameActive = false;
        cub.style.top = `${heightWindow - cubHeight}px`;
      }
    }, 1000);
  }
}

const operations = {
  37: (currentLeft) => (currentLeft - STEP >= 0 && isGameActive) ? currentLeft - STEP : runLeft(currentLeft),
  65: (currentLeft) => (currentLeft - STEP >= 0 && isGameActive) ? currentLeft - STEP : runLeft(currentLeft),
  39: (currentLeft) => (currentLeft + STEP + cubWidth <= widthWindow - STEP && isGameActive) ? currentLeft + STEP : runRight(currentLeft),
  68: (currentLeft) => (currentLeft + STEP <= widthWindow - cubWidth && isGameActive) ? currentLeft + STEP : runRight(currentLeft),
  13: () => startGame(),
};

function runLeft(currentLeft) {
  return isGameActive ? Math.max(0, currentLeft - STEP) : currentLeft;
}

function runRight(currentLeft) {
  return isGameActive ? Math.min(widthWindow - cubWidth, currentLeft + STEP) : currentLeft;
}

function moveCub(e) {
  const currentLeft = parseInt(cub.style.left || 0);
  cub.style.left = `${operations[e.keyCode](currentLeft)}px`;
}

document.addEventListener('keydown', moveCub);


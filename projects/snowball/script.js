
let score = 0;
const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');

function createSnowball() {
  const snowball = document.createElement('div');
  snowball.classList.add('snowball');
  snowball.textContent = '❄️'; 

  snowball.style.top = Math.random() * 340 + "px";
  snowball.style.left = Math.random() * 90 + "%";

  snowball.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    snowball.remove();
  });

  gameArea.appendChild(snowball);

  setTimeout(() => {
    if (snowball.parentElement) {
      snowball.remove();
    }
  }, 4000);
}

setInterval(createSnowball, 2000);

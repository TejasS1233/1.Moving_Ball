const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = canvas.height / 2;
let dx = 2;
let dy = 2;
const ballRadius = 10;
function resizeCanvas() {
  const canvas = document.getElementById('gameCanvas');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = 'RED';
  ctx.fill();
  ctx.closePath();
}

function update() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if (y + dy > canvas.height - ballRadius || y + dy < ballRadius) {
    dy = -dy;
  }

  x += dx;
  y += dy;
}

setInterval(update, 10);

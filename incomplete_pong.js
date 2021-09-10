/* write a Gameboy screen with A, B, directional buttons, it plays pong with itself */
var canvas = document.createElement('canvas');
canvas.width = 160;
canvas.height = 144;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
var ball = {
  x: 80,
  y: 80,
  vx: 1,
  vy: 1,
  radius: 4,
  color: '#00FF00'
};
var paddle = {
  x: 80,
  y: 120,
  width: 16,
  height: 8,
  color: '#FF0000'
};
var gameState = {
  score: 0,
  paddle: paddle,
  ball: ball,
  playing: false
};
var keyStates = {
  left: false,
  right: false
};
var draw = function() {
  ctx.fillStyle = '#000000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = gameState.ball.color;
  ctx.beginPath();
  ctx.arc(gameState.ball.x, gameState.ball.y, gameState.ball.radius, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.fillStyle = gameState.paddle.color;
  ctx.fillRect(gameState.paddle.x, gameState.paddle.y, gameState.paddle.width, gameState.paddle.height);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '16px Arial';
  ctx.fillText(gameState.score, canvas.width / 2, 20);
};
var update = function() {
  if (gameState.playing) {
    gameState.ball.x += gameState.ball.vx;
    gameState.ball.y += gameState.ball.vy;
    if (gameState.ball.x + gameState.ball.radius > canvas.width) {
      gameState.ball.vx = -gameState.ball.vx;
      gameState.ball.x = canvas.width - gameState.ball.radius;
    }
    if (gameState.ball.x - gameState.ball.radius < 0) {
      gameState.ball.vx = -gameState.ball.vx;
      gameState.ball.x = gameState.ball.radius;
    }
    if (gameState.ball.y + gameState.ball.radius > canvas.height) {
      gameState.ball.vy = -gameState.ball.vy;
      gameState.ball.y = canvas.height - gameState.ball.radius;
    }
    if (gameState.ball.y - gameState.ball.radius < 0) {
      gameState.ball.vy = -gameState.ball.vy;
      gameState.ball.y = gameState.ball.radius;
    }
    if (gameState.ball.x - gameState.ball.radius < gameState.paddle.x + gameState.paddle.width &&
        gameState.ball.x + gameState.ball.radius > gameState.paddle.x &&
        gameState.ball.y + gameState.ball.radius > gameState.paddle.y &&
        gameState.ball.y - gameState.ball.radius < gameState.paddle.y + gameState.paddle.height) {
      gameState.ball.vy = -gameState.ball.vy;
      gameState.ball.y = gameState.paddle.y - gameState.ball.radius;
      gameState.score++;
    }
  }
};
var keyDown = function(e) {
  if (e.keyCode == 37) {
    keyStates.left = true;
  } else if (e.keyCode == 39) {
    keyStates.right = true;
  }
};
var keyUp = function(e) {
  if (e.keyCode == 37) {
    keyStates.left = false;
  } else if (e.keyCode == 39) {
    keyStates.right = false;
  }
};
var startGame =

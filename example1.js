/* Make a snowstorm on a black background */
var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'black';
ctx.fillRect(0, 0, canvas.width, canvas.height);
var snowflakes = [];
for (var i = 0; i < 100; i++) {
  snowflakes.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    d: Math.random() * 10 + 5
  });
}
function draw() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'white';
  for (var i = 0; i < snowflakes.length; i++) {
    var snowflake = snowflakes[i];
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, true);
    ctx.fill();
    snowflake.y += snowflake.d;
    if (snowflake.y > canvas.height) {
      snowflake.y = -snowflake.r;
      snowflake.x = Math.random() * canvas.width;
    }
  }
  window.requestAnimationFrame(draw);
}
draw();

/* Create a random dice roll generator with a button */
var diceRoll = document.createElement('button');
diceRoll.innerHTML = 'Roll the dice';
document.body.appendChild(diceRoll);
var dice = document.createElement('div');
dice.innerHTML = '<span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span>';
document.body.appendChild(dice);
diceRoll.onclick = function() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.innerHTML = '<span>' + randomNumber + '</span><span>' + randomNumber + '</span><span>' + randomNumber + '</span><span>' + randomNumber + '</span><span>' + randomNumber + '</span><span>' + randomNumber + '</span>';
};

/* Create a word guessing game */
var word = 'hello';
var wordDisplay = document.createElement('div');
wordDisplay.innerHTML = '_ _ _ _ _';
document.body.appendChild(wordDisplay);
var guess = document.createElement('input');
guess.type = 'text';
document.body.appendChild(guess);
var guessButton = document.createElement('button');
guessButton.innerHTML = 'Guess';
document.body.appendChild(guessButton);
guessButton.onclick = function() {
  var userGuess = guess.value;
  if (userGuess === word) {
    wordDisplay.innerHTML = 'You win!';
  } else {
    wordDisplay.innerHTML = '_ _ _ _ _';
  }
};

/* Create a simple calculator with user input */
var calculator = document.createElement('div');
calculator.innerHTML = '<input type="text" id="firstNumber" /> + <input type="text" id="secondNumber" /> = <span id="result"></span>';
document.body.appendChild(calculator);
var firstNumber = document.getElementById('firstNumber');
var secondNumber = document.getElementById('secondNumber');
var result = document.getElementById('result');
var addButton = document.createElement('button');
addButton.innerHTML = 'Add';
document.body.appendChild(addButton);
addButton.onclick = function() {
  var first = parseInt(firstNumber.value);
  var second = parseInt(secondNumber.value);
  result.innerHTML = first + second;
};

/* Make a red ball bounce around the screen */
var canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
var ball = {
  x: Math.random() * canvas.width,
  y: Math.random() * canvas.height,
  vx: Math.random() * 10 - 5,
  vy: Math.random() * 10 - 5,
  radius: 20
};
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, true);
  ctx.fillStyle = 'red';
  ctx.fill();
  ball.x += ball.vx;
  ball.y += ball.vy;
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.vx = -ball.vx;
  }
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.vy = -ball.vy;
  }
  window.requestAnimationFrame(draw);
}
draw();

/* Use an emoji to say hello */
var emoji = document.createElement('span');
emoji.innerHTML = '😀';
document.body.appendChild(emoji);
var sayHello = document.createElement('button');
sayHello.innerHTML = 'Say Hello';
document.body.appendChild(sayHello);
sayHello.onclick = function() {
  emoji.innerHTML = '😀';
};

/* Make a website for a cat that's an attorney. Provide a bio and a phone number. Create a small round avatar image: https://bit.ly/3fsc0rH. Center everything. */
var cat = document.createElement('div');
cat.innerHTML = '<img src="https://bit.ly/3fsc0rH" />';
document.body.appendChild(cat);
var bio = document.createElement('div');
bio.innerHTML = '<p>I am a lawyer.</p><p>I am a cat.</p>';
document.body.appendChild(bio);
var phone = document.createElement('div');
phone.innerHTML = '<p>555-555-5555</p>';
document.body.appendChild(phone);
var center = document.createElement('div');
center.style.textAlign = 'center';
center.style.margin = 'auto';
center.style.width = '100%';
center.style.height = '100%';
document.body.appendChild(center);
center.appendChild(cat);
center.appendChild(bio);
center.appendChild(phone);

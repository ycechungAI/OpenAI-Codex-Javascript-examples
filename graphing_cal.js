/* write a graphing calculator program */
var graph = document.createElement('div');
graph.innerHTML = '<canvas id="graph" width="500" height="500"></canvas>';
document.body.appendChild(graph);
var canvas = document.getElementById('graph');
var ctx = canvas.getContext('2d');
var x = 0;
var y = 0;
var dx = 1;
var dy = 1;
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(x, y, 10, 10);
  x += dx;
  y += dy;
  if (x > canvas.width) {
    dx = -1;
  }
  if (x < 0) {
    dx = 1;
  }
  if (y > canvas.height) {
    dy = -1;
  }
  if (y < 0) {
    dy = 1;
  }
  setTimeout(draw, 10);
}
draw();

// Graphics code
function clearBackground(bg) {
  resizeCanvas(windowWidth-2, windowHeight-2);
  if (bg) {
    background(bg);
  } else {
    background(81);
  }
}

function drawCrosshair(x, y) {
  strokeWeight(1.5);
  ellipse(x, y, 30);

  line(x,       y + 10,  x,       y + 20);
  line(x + 10,  y,       x + 20,  y     );
  line(x,       y - 10,  x,       y - 20);
  line(x - 10,  y,       x - 20,  y     );

  stroke(255, 0, 0, 100);
  strokeWeight(4);
  point(x, y);
}

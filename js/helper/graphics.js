// Graphics code
function clearBackground(bg) {
  if (bg) {
    background(bg);
  } else {
    background(81);
  }
  noFill();
  stroke(255);
  rect(0, 0, width, height);
}

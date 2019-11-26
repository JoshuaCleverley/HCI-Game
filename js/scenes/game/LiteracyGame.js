function LiteracyGame() {
  this.enter = function() {
    clearBackground();
  }

  this.draw = function() {
    clearBackground();
    strokeWeight(2);
    stroke(255);
    fill(255);
    text("Literacy!", 50, 100, 200);
  }
}

function LiteracyGame() {
  this.enter = function() {
    noCursor();
  }

  this.draw = function() {
    clearBackground();

    customCursor.Draw();
  }
}

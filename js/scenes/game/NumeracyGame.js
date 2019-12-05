function NumeracyGame() {
  this.enter = function() {
    noCursor();
  }

  this.draw = function() {
    // Clear background and draw buttons
    clearBackground();

    customCursor.Draw();
  }
}

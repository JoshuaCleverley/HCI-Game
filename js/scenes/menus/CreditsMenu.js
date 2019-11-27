
function CreditsMenu() {
  // Setup main menu
  this.enter = function() {
    this.buttons = [];

    // Create and add start button to button list
    let homeButton = new Clickable(0, 30);
    homeButton.text = "Home";
    homeButton.centerX = true;
    homeButton.onPress = function() {
      // Show subject choice menu
      mgr.showScene(MainMenu);
    }
    this.buttons.push(homeButton);
  }

  // Main loop for main menu
  this.draw = function() {
    // Clear background and draw buttons
    clearBackground();

    for (const button of this.buttons) {
      button.draw();
    }
  }
}

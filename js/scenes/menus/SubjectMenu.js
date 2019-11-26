
function SubjectMenu() {
  // Setup main menu
  this.enter = function() {
    this.buttons = [];

    // Create home button and add to buttons list
    let homeButton = new Clickable(20, 20);
    homeButton.text = "Home";
    homeButton.onPress = function() {
      // Go back to main menu
      mgr.showScene(MainMenu);
    }
    this.buttons.push(homeButton);

    // Create numeracy game button and add it to buttons list
    let numeracyButton = new Clickable(20, 100);
    numeracyButton.text = "Numeracy";
    numeracyButton.onPress = function() {
      // Start numeracy game
      mgr.showScene(NumeracyGame);
    }
    this.buttons.push(numeracyButton);

    // Create literacy game button and add it to buttons list
    let literacyButton = new Clickable(20, 180);
    literacyButton.text = "Literacy";
    literacyButton.onPress = function() {
      // Start literacy game
      mgr.showScene(LiteracyGame)
    }
    this.buttons.push(literacyButton);
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

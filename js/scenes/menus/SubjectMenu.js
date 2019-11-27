
function SubjectMenu() {
  // Setup main menu
  this.enter = function() {
    this.buttons = [];

    // Create home button and add to buttons list
    let homeButton = new Clickable(0, height/2 + 30);
    homeButton.text = "Home";
    homeButton.centerX = true;
    homeButton.onPress = function() {
      // Go back to main menu
      mgr.showScene(MainMenu);
    }
    this.buttons.push(homeButton);

    // Create numeracy game button and add it to buttons list
    let numeracyButton = new Clickable(0, height/2 + 30 + 95);
    numeracyButton.text = "Numeracy";
    numeracyButton.centerX = true;
    numeracyButton.onPress = function() {
      // Start numeracy game
      mgr.showScene(NumeracyGame);
    }
    this.buttons.push(numeracyButton);

    // Create literacy game button and add it to buttons list
    let literacyButton =new Clickable(0, height/2 + 30 + 2 * 95);
    literacyButton.text = "Literacy";
    literacyButton.centerX = true;
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

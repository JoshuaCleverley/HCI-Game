
function OptionsMenu() {
  // Setup main menu
  this.enter = function() {
    this.buttons = [];

    // Create home button and add it to button list
    let homeButton = new Clickable(0, height/2 + 30);;
    homeButton.text = "Home";
    homeButton.centerX = true;
    homeButton.onPress = function() {
      // Show main menu
      mgr.showScene(MainMenu);
    }
    this.buttons.push(homeButton);

    // Create text size button and add it to button list
    let textButton = new Clickable(0, height/2 + 30 + 95);
    textButton.text = "Aa";
    textButton.centerX = true;
    textButton.onPress = function() {
      // Switch text size to small or big
      if (options.textMode == "small") { // If text is currently smaller
        options.textMode = "big";
      } else {                           // If text is currently bigger
        options.textMode = "small";
      }
    }
    this.buttons.push(textButton);
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

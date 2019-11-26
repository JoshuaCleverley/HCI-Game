
function OptionsMenu() {
  // Setup main menu
  this.enter = function() {
    this.buttons = [];

    // Create home button and add it to button list
    let homeButton = new Clickable(20, 20);
    homeButton.text = "Home";
    homeButton.onPress = function() {
      // Show main menu
      mgr.showScene(MainMenu);
    }
    this.buttons.push(homeButton);

    // Create text size button and add it to button list
    let textButton = new Clickable(20, 100);
    textButton.text = "aA";
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

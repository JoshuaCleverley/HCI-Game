
function MainMenu() {
  // Setup main menu
  this.enter = function() {
    this.buttons = [];

    // Create and add start button to button list
    let startButton = new Clickable(20, 20);
    startButton.text = "Start";
    startButton.onPress = function() {
      // Show subject choice menu
      mgr.showScene(SubjectMenu);
    }
    this.buttons.push(startButton);

    // Create options button and add it to button list
    let optionsButton = new Clickable(20, 100);
    optionsButton.text = "Options";
    optionsButton.onPress = function() {
      // Show options menu
      mgr.showScene(OptionsMenu);
    }
    this.buttons.push(optionsButton);
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

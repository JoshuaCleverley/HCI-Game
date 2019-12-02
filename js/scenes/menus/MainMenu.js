
function MainMenu() {
  // Setup main menu
  this.enter = function() {
    this.buttons = [];

    // Create and add start button to button list
    let startButton = new Clickable(0, height/2 + 30);
    startButton.text = "Start";
    startButton.centerX = true;
    startButton.onPress = function() {
      // Show subject choice menu
      mgr.showScene(SubjectMenu);
    }
    this.buttons.push(startButton);

    // Create options button and add it to button list
    let optionsButton = new Clickable(0, height/2 + 30 + 95);
    optionsButton.text = "Options";
    optionsButton.centerX = true;
    optionsButton.onPress = function() {
      // Show options menu
      mgr.showScene(OptionsMenu);
    }
    this.buttons.push(optionsButton);

    // Create credits button and add it to button list
    let creditsButton = new Clickable(0, height/2 + 30 + 2*95);
    creditsButton.text = "Credits";
    creditsButton.centerX = true;
    creditsButton.onPress = function() {
      // Show options menu
      mgr.showScene(CreditsMenu);
    }
    this.buttons.push(creditsButton);
  }

  // Main loop for main menu
  this.draw = function() {
    // Clear background and draw buttons
    clearBackground(backgrounds.mainMenu);

    for (const button of this.buttons) {
      button.draw();
    }

    cursor.Draw();
  }
}

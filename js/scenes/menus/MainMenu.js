
function MainMenu() {
  // Setup main menu
  this.enter = function() {
    buttons = [];

    let startButton = new Clickable(20, 20);
    startButton.text = "Start";
    startButton.onPress = function() {
      mgr.showScene(SubjectMenu);
    }

    let optionsButton = new Clickable(20, 90);
    optionsButton.text = "Options";
    optionsButton.onPress = function() {
      mgr.showScene(OptionsMenu);
    }

    buttons.push(startButton);
    buttons.push(optionsButton);
  }

  // Main loop for main menu
  this.draw = function() {
    clearBackground();

    for (const button of buttons) {
      button.draw();
    }
  }
}

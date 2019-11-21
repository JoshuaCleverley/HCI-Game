
function OptionsMenu() {
  // Setup main menu
  this.enter = function() {
    buttons = [];

    let backButton = new Clickable(20, 20);
    backButton.text = "Back";
    backButton.onPress = function() {
      mgr.showScene(MainMenu);
    }

     buttons.push(backButton);
  }

  // Main loop for main menu
  this.draw = function() {
    clearBackground();

    for (const button of buttons) {
      button.draw();
    }
  }
}

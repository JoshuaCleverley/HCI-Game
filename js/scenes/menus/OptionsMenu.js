
function OptionsMenu() {
  // Setup main menu
  this.enter = function() {
    buttons = [];

    // Home button
    let homeButton = new Clickable(20, 20);
    homeButton.text = "Home";
    homeButton.onPress = function() {
      mgr.showScene(MainMenu);
    }

    let textButton = new Clickable(20, 100);
    textButton.text = "Text: " + options.aLetter;
    textButton.onPress = function() {
      if (options.textMode == "small") { // If text is currently smaller
        options.textMode = "big";
        options.aLetter = "A";
        textButton.text = "Text: A";
      } else {                           // If text is currently bigger
        options.textMode = "small";
        options.aLetter = "a";
        textButton.text = "Text: a";
      }
    }

     buttons.push(homeButton);
     buttons.push(textButton);
  }

  // Main loop for main menu
  this.draw = function() {
    clearBackground();

    for (const button of buttons) {
      button.draw();
    }
  }
}

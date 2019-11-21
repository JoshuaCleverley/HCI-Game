
function SubjectMenu() {
  // Setup main menu
  this.enter = function() {
    buttons = [];

    let homeButton = new Clickable(20, 20);
    homeButton.text = "Home";
    homeButton.onPress = function() {
      mgr.showScene(MainMenu);
    }

    let numeracyButton = new Clickable(20, 90);
    numeracyButton.text = "Numeracy";
    numeracyButton.onPress = function() {
      console.log("numeracy");
    }

    let literacyButton = new Clickable(20, 160);
    literacyButton.text = "Literacy";
    literacyButton.onPress = function() {
      console.log("literacy");
    }

    buttons.push(homeButton);
    buttons.push(numeracyButton);
    buttons.push(literacyButton);
  }

  // Main loop for main menu
  this.draw = function() {
    clearBackground();

    for (const button of buttons) {
      button.draw();
    }
  }
}

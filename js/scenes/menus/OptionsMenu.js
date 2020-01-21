// Copyright (C) 2019, Joshua Cleverley

// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <https://www.gnu.org/licenses/>.

function OptionsMenu() {
  // Setup main menu
  this.enter = function() {
    cursor();

    this.buttons = [];

    // Create home button and add it to button list
    let homeButton = new Clickable(0, height / 2 + 30);;
    homeButton.text = "Home";
    homeButton.centerX = true;
    homeButton.onPress = function() {
      // Show main menu
      mgr.showScene(MainMenu);
    }
    this.buttons.push(homeButton);

    // Create text size button and add it to button list
    let textButton = new Clickable(0, height / 2 + 30 + 95);
    textButton.text = "Aa";
    textButton.centerX = true;
    textButton.onPress = function() {
      // Switch text size to small or big
      if (options.textMode == "small") { // If text is currently smaller
        options.textMode = "big";
      } else { // If text is currently bigger
        options.textMode = "small";
      }
    }
    this.buttons.push(textButton);
  }

  // Main loop for main menu
  this.draw = function() {
    // Clear background and draw buttons
    clearBackground();

    textSize(100);
    fill(240)
    textAlign(CENTER, CENTER);
    text("Options", 50, 100, windowWidth-50, 200);

    for (const button of this.buttons) {
      button.draw();
    }
  }
}

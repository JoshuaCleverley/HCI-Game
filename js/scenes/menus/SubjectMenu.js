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

function SubjectMenu() {
  // Setup main menu
  this.enter = function() {
    cursor();

    this.buttons = [];

    // Create home button and add to buttons list
    let homeButton = new Clickable(0, height / 2 + 30);
    homeButton.text = "Home";
    homeButton.centerX = true;
    homeButton.onPress = function() {
      // Go back to main menu
      mgr.showScene(MainMenu);
    }
    this.buttons.push(homeButton);

    // Create numeracy game button and add it to buttons list
    let numeracyButton = new Clickable(0, height / 2 + 30 + 95);
    numeracyButton.text = "Numeracy";
    numeracyButton.centerX = true;
    numeracyButton.onPress = function() {
      // Start numeracy game
      mgr.showScene(NumeracyGame);
    }
    this.buttons.push(numeracyButton);

    // Create literacy game button and add it to buttons list
    let literacyButton = new Clickable(0, height / 2 + 30 + 2 * 95);
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

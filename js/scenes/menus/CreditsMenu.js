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

function CreditsMenu() {
  // Setup main menu
  this.enter = function() {
    cursor();

    this.buttons = [];

    // Create and add start button to button list
    let homeButton = new Clickable(0, 30);
    homeButton.text = "Home";
    homeButton.centerX = true;
    homeButton.onPress = function() {
      // Show subject choice menu
      mgr.showScene(MainMenu);
    }
    this.buttons.push(homeButton);
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

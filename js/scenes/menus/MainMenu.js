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

function MainMenu() {
  // Setup main menu
  this.enter = function() {
    cursor();

    this.buttons = [];

    // Create and add start button to button list
    let startButton = new Clickable(0, height / 2 + 30);
    startButton.text = "Start";
    startButton.centerX = true;
    startButton.onPress = function() {
      // Show subject choice menu
      mgr.showScene(SubjectMenu);
    }
    this.buttons.push(startButton);

    // Create options button and add it to button list
    let optionsButton = new Clickable(0, height / 2 + 30 + 95);
    optionsButton.text = "Options";
    optionsButton.centerX = true;
    optionsButton.onPress = function() {
      // Show options menu
      mgr.showScene(OptionsMenu);
    }
    this.buttons.push(optionsButton);

    // Create credits button and add it to button list
    let creditsButton = new Clickable(0, height / 2 + 30 + 2 * 95);
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
    clearBackground();

    for (const button of this.buttons) {
      button.draw();
    }
  }
}

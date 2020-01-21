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

// Declare options for the game
let options = {
  textMode: "small",
  smallTextSize: 20,
  bigTextSize: 40,
  frameRate: 50,
}

// Declare global variables
let mgr;
let customCursor;
let ships = [];
let score = 0;
let lives = 3;
let currentQuestion;

let gameButton;

// Main program setup
function setup() {
  // Create and clear the screen
  createCanvas(windowWidth, windowHeight);
  clearBackground();

  gameButton = new Clickable(60, windowHeight-90);
  gameButton.text = "Back";
  gameButton.onPress = function() {
    // Show subject choice menu
    mgr.showScene(SubjectMenu);
  }

  frameRate(options.frameRate);

  mgr = new SceneManager(); // Create the scene manager object
  customCursor = new Cursor();

  // Add menu screens to scene manager
  mgr.addScene(MainMenu);
  mgr.addScene(OptionsMenu);
  mgr.addScene(SubjectMenu);
  mgr.addScene(CreditsMenu);
  mgr.addScene(GameOverMenu);

  // Add game screens to scene manager
  mgr.addScene(LiteracyGame);
  mgr.addScene(NumeracyGame);

  // Setup and show main menu screen
  mgr.wire();
  mgr.showScene(MainMenu); // Show the scene
}

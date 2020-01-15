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

function LiteracyGame() {
  this.enter = function() {
    noCursor();
    currentQuestion = literacyQuestions[floor(random() * literacyQuestions.length)];
    ships = [];
    score = 0;
    lives = 3;
  }

  this.draw = function() {
    clearBackground();

    if (lives < 0) {
        mgr.showScene(GameOverMenu);
    }

    fill(200);
    stroke(0);
    strokeWeight(2);
    rect(0, 0, windowWidth/4.5, windowHeight);

    fill(0);
    strokeWeight(0);
    textAlign(LEFT, TOP);
    text("The friendly ships will have " + currentQuestion.question + " on them!", 20, 20, windowWidth/4.5-20, 200);
    text("Score: " + score, 20, 210, windowWidth-20, 230);
    text("Lives: " + lives, 20, 240, windowWidth-20, 260);

    gameButton.draw();

    if (frameCount % 40 == 0) {
      let shipAnswer = literacyQuestions[floor(random() * literacyQuestions.length)].answer;
      ship = new Ship();
      ship.Init(windowWidth/4.5, shipAnswer);
      ships.push(ship);
    }

    for (i in ships) {
      if (ships[i].Update()) {
        ships.splice(i, 1);
      } else {
        ships[i].Draw();
      }
    }

    customCursor.Draw();
  }

  this.mouseClicked = function() {
    for (i in ships) {
      if (ships[i].Click()) {
        ships.splice(i, 1);
      }
    }
  }
}

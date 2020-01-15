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

class Ship {
  Init(gameX, shipAnswer) {
    this.answer = shipAnswer;
    this.speed = 5;
    this.width = 150;
    this.height = 120;
    this.x = random(this.width+gameX, windowWidth-this.width*2);
    this.y = -100;
    this.alive = true;
  }

  Draw() {
    if (this.alive) {
      fill(255);
      stroke(0);
      strokeWeight(1);
      rectMode(CORNER);
      rect(this.x, this.y, this.width, this.height);

      fill(0);
      strokeWeight(0);
      textAlign(CENTER, CENTER);
      text(this.answer, this.x, this.y, this.width, this.height);
    } else {
      return
    }
  }

  Update() {
    if (this.alive) {
      this.y += this.speed;
      if (this.y > windowHeight + this.height*2) {
        if (currentQuestion.compare(this.answer)) {
          score += 10;
        } else {
          lives -= 1;
        }
        this.alive = false;
        return true;
      }
    }
    return false;
  }

  Click() {
    if (mouseX > this.x && mouseX <= this.x + this.width && mouseY > this.y && mouseY <= this.y + this.height) {
      // Ship is shot
      if (!currentQuestion.compare(this.answer)) {
        score += 1;
      } else {
        lives -= 1;
      }
      this.alive = false;
      console.log("SCORE: " + score);
      console.log("LIVES: " + lives);
      console.log("---------------");
      return true;
    } else {
      return false;
    }
  }
}

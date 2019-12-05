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

function clearBackground(bg) {
  resizeCanvas(windowWidth, windowHeight);
  if (bg) {
    background(bg);
  } else {
    background(81);
  }
}

function drawCrosshair(x, y) {
  strokeWeight(1.5);
  ellipse(x, y, 30);

  line(x,       y + 10,  x,       y + 20);
  line(x + 10,  y,       x + 20,  y     );
  line(x,       y - 10,  x,       y - 20);
  line(x - 10,  y,       x - 20,  y     );

  stroke(255, 0, 0, 100);
  strokeWeight(4);
  point(x, y);
}

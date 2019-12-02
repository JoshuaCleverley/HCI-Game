class Cursor {


  Draw() {
    noFill();
    this.FollowMouse();
    stroke(0);
    drawCrosshair(this.x, this.y);
  }

  FollowMouse() {
    this.x = mouseX;
    this.y = mouseY;
  }
}

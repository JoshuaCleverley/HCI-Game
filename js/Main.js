// Global variables
let buttons = [];
let mgr;

// Main program setup
function setup() {
  createCanvas(1024, 720); // Create the canvas to draw to
  clearBackground();


  mgr = new SceneManager(); // Create the scene manager object

  mgr.addScene(MainMenu);
  mgr.addScene(OptionsMenu);
  mgr.addScene(SubjectMenu);
  
  mgr.wire();
  mgr.showScene(MainMenu); // Show the scene
}

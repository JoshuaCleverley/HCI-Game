// Global variables
let options = {
  textMode: "small",
  smallTextSize: 20,
  bigTextSize: 40,
  aLetter: "a",
}

let buttons = [];
let mgr;

// Main program preload
function preload() {
  //options.font = loadFont('https://fonts.googleapis.com/css?family=Roboto&display=swap');
}

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

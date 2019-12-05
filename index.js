// Declare options for the game
let options = {
  textMode: "small",
  smallTextSize: 20,
  bigTextSize: 40,
  frameRate: 50,
}

// Declare global variables
let mgr;
let backgrounds = {};
let graphics;
let customCursor;

// Main program preload
function preload() {
  loadImage('assets/bg/MainMenu.png', (res) => {
    backgrounds.mainMenu = res;
  }, (err) => {
    console.log(err);
  });

  loadImage('assets/bg/OptionsMenu.png', (res) => {
    backgrounds.optionsMenu = res;
  }, (err) => {
    console.log(err);
  });

  loadImage('assets/bg/SubjectMenu.png', (res) => {
    backgrounds.subjectMenu = res;
  }, (err) => {
    console.log(err);
  });


  graphics = {

  }
}

// Main program setup
function setup() {
  // Create and clear the screen
  createCanvas(windowWidth, windowHeight);
  clearBackground();

  frameRate(options.frameRate);

  mgr = new SceneManager(); // Create the scene manager object
  customCursor = new Cursor();

  // Add menu screens to scene manager
  mgr.addScene(MainMenu);
  mgr.addScene(OptionsMenu);
  mgr.addScene(SubjectMenu);
  mgr.addScene(CreditsMenu);

  // Add game screens to scene manager
  mgr.addScene(LiteracyGame);
  mgr.addScene(NumeracyGame);

  // Setup and show main menu screen
  mgr.wire();
  mgr.showScene(MainMenu); // Show the scene
}

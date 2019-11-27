// Declare options for the game
let options = {
  screenWidth: 1024,
  screenHeight: 720,
  textMode: "small",
  smallTextSize: 20,
  bigTextSize: 40,
}

// Declare global variables
let mgr;
let backgrounds;
let graphics;

// Main program preload
function preload() {

  backgrounds = {
    //MainMenu: loadImage('../assets/bg/MainMenu.png'),
    //OptionsMenu: loadImage('../assets/bg/OptionsMenu.png'),
    //SubjectMenu: loadImage('../assets/bg/SubjectMenu.png'),
  }

  graphics = {

  }
}

// Main program setup
function setup() {
  // Create and clear the screen
  createCanvas(options.screenWidth, options.screenHeight);
  clearBackground();

  mgr = new SceneManager(); // Create the scene manager object

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

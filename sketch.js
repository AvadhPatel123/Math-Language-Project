// Declaring variables that will be used to create the spiral in the later function
var angle = 5.0;
var scalar = 5;
var speed = 0.08;
var x = 0;
var y = 0;


  
// Creates the canvas and sets the background color to black
function setup() {

  createCanvas(windowWidth, windowHeight);
  background(0);
  
  
}

// This functions draws the spiral(s)
function draw() {
//Sets the variables for the location of the spiral based off mouse location
  var offset_x = mouseX;
  var offset_y = mouseY;

//Creates spirals, made out of words and colors that are randomized, based on mouse location and mouse press
  if(mouseIsPressed) {
    let x = offset_x + cos(angle) * scalar * 3.5;
    let y = offset_y + sin(angle) * scalar * 3.5;
    let words = ['air', 'water', 'fire', 'earth'];
    let word = random(words);
    let r = random(255, 0, 0);
    let g = random(0, 255, 0);
    let b = random(0, 0, 255);
    text(word, x, y);
    fill(r, g, b);
    angle += speed;
    scalar += speed;
     
  }

}
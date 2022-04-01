//standard assets
let numImages = 18;
let scene = [];
let state = 'title';
let titleFont;
let standardFont;
let imgBG;
let answers = [
'The large field of grass with a singular tree sitting on top of the hill. A peaceful location surronded by nature',
"The sound of the crashing waves brings one's mind to ease.",
"The warmth, cozy feeling of being in bed can't be beat. The alarm clock sitting beside the bed waits idle for the time the orange sun to rise over the horizon",
"The cold weather sends shivers down the spine. The aurora magnificently glows in the dark blue sky",
"The small light of the candle captivates the gaze. The small flame dances while being surronded by darkness",
"The bustling city streets and cars echo throughout the city. The neon lights scattered across buildings bring life and color to the otherwise gray buildings",
"There's nothing like the magical night of fireworks",
"The darkness of the forest and the small flashing lights of fireflies allures people into nature",
"The comforting of the bright lights and the conveience store located on the side of a dark street eases one's mind, knowing the store haws everything you can ask for",
"The spooky figure becomes incredibly intriuging, to the point where the eye can't be drawn away from it",
"The crackling of the campfire brings the sensation of being outdoors. Marshmallows anyone?",
"The smell of delicious food drifts through the air. The anticipation of eating a delicious feast fills one's mind",
"The moonlight brightly glows off of the gray rock formations, contrasting with the vast sky full of stars",
"Staring up into the sky mesmerized by the beautiful sights of galaxy. The imagination of what might be out there stretches far and wide",
"The night lights lined up along the streets lights the path toward the end destination, guiding the path through the darkness",
"Nothing like a late night movie at the theater while munching on some popcorn",
"The flash of lightning and the crash of thunder strikes the air. A sight to behold",
"The bus station during a snowy night. The lingering feeling of hope that the bus will reach the desired destination"
];

//html
let backButton;
let favoriteButton;
let restartButton;
let aLink; //artist statement link
let elementY = 0; //movement for elements


//light level
let slider;
let lightLevelDisplay; //displays text number value
let lightLevel = 0; //0-2 values from slider
let adjustLight = 0; //light value for alpha

//image
let imageType = 0;

//vehicles
let vehicles = [];
let numVehicles = 2;
let alpha = 0;

//stars
let numStars = 25;
let stars = [];

function preload() {
  for (let i = 0; i < numImages; i++) {
    scene[i] = loadImage("images/" + i + '.jpg');
  }

  imgBG = loadImage('nightSkyBG.jpg');

  titleFont = loadFont('titleFont.ttf');
  standardFont = loadFont('normalFont.ttf');

}

//types of images
// tree = 0, beach = 1, bed = 2, cabin = 3, candle = 4, city = 5
// castle = 6, forest = 7, gas = 8, ghost =9, campfire = 10
// resturant = 11, rocky = 12, star = 13, street = 14, theater =15
// thunder = 16, transit = 17

function setup() {
  createCanvas(windowWidth, windowHeight);

  //creates star and vehicle objects
  starField();
  makeVehicles();

  //let aDiv = createDiv('Artist_Statement');

  //artist statement button  DOM interaction
  aLink = createA('Artist_Statement.html', 'Artist Statement');
  aLink.class('button');
  aLink.position(5, 0);
  aLink.id('artistStatement');

  //back button on location state
  backButton = createButton("Back");
  backButton.id('back');
  backButton.mousePressed(back);

  favoriteButton = createButton("Favorite");
  favoriteButton.size(100, 40);
  favoriteButton.id('back');
  favoriteButton.mousePressed(favorite);

  restartButton = createButton("Restart");
  restartButton.size(100, 40);
  restartButton.id('back');
  restartButton.mousePressed(reset);

  //slider for light options
  slider = createSlider(0, 2, 1, 1);

  slider.class("mySliders");

}


function draw() {
  //dynamic var for buttons
backButton.position(0, 0);
favoriteButton.position(width * 0.2, height * 0.4);
restartButton.position(width * 0.2, height * 0.4);
slider.position(50, height - 50);



  if (state === 'title') {

    //hide back button and favorite button
    backButton.hide();
    favoriteButton.hide();
    restartButton.hide();

    //call art statement and slider
    aLink.show();
    slider.show();

    //slider light level
    lightLevel = slider.value();

    background(20);

    //calling stars
    let xr = random(width);
    for (let i = 0; i < stars.length; i++) {
      stars[i].move();
      stars[i].show();
      stars[i].randomPos(xr);
    }


    title();

    textSize(10);

    //dev tool
    //coordinates();
  }

  if (state === 'play') {
    background(20);

    //remove artist Statement and slider
    aLink.hide();
    slider.hide();
    favoriteButton.hide();
    restartButton.hide();

    light();

    //display the vheicles
    for (let i = 0; i < vehicles.length; i++) {
      if (vehicles[i].found(mouseX, mouseY, adjustLight) == true) {
        vehicles[i].show(alpha);
      }
    }
  }

  if (state === 'location') {

    //call back button and favorite button
    backButton.show();
    favoriteButton.show();

    //background
    push();
    let c1 = color(0, 89, 207);
    let c2 = color(28, 0, 105);
    background(c2);

    pop();


    //calling stars
    for (let i = 0; i < stars.length; i++) {
      stars[i].move();
      stars[i].show();
    }

    image(scene[imageType], windowWidth / 3, windowHeight / 10, 700, 700);


  }

  if (state === 'finish') {
    //hide buttons
    favoriteButton.hide();
    backButton.hide();

    //show restart button
    restartButton.show();

    //same as location beginning
    push();
    let c1 = color(0, 89, 207);
    let c2 = color(28, 0, 105);
    background(c2);

    pop();


    //calling stars
    for (let i = 0; i < stars.length; i++) {
      stars[i].move();
      stars[i].show();
    }

    image(scene[imageType], windowWidth / 3, windowHeight / 10, 700, 700);
    //same as location ending

    //info text
    textSize(20);
    //textWrap(word);
    text(answers[imageType], width * 0.75, height/2, width * 0.2, height * 0.6);
  }
}

function title() {
  //title
  textSize(90);
  textFont(titleFont);
  stroke(255, 204, 0, 255);
  fill(255, 204, 0, 255);
  text('NightTime Stroll', width * 0.35, height * 0.4);

  //play button
  rect(width * 0.4, height * 0.6, width * 0.2, height * 0.1);
  textSize(50);
  textFont(standardFont);
  stroke(0);
  fill(0);
  text('play', width * 0.48, height * 0.67);
  //0.4, 0.6  0.6  0.7
  if (mouseX < width * 0.6 && mouseX > width * 0.4) {
    if (mouseY < height * 0.7 && mouseY > height * 0.6) {
      if (mouseIsPressed) {
        state = 'play';
      }
    }
  }

  lightSlider();

}

function lightSlider() {
  //light level slider
  stroke(0, 0, 0, 255);
  fill(255, 204, 0, 255);
  textSize(30);
  text('light level: ' + lightLevelDisplay, 20, height - 80);

  if (lightLevel == 0) {
    lightLevelDisplay = 'low';
  } else if (lightLevel == 1) {
    lightLevelDisplay = 'medium';
  } else {
    lightLevelDisplay = 'high'
  }
}

function light() {

  if (lightLevel == 0) {
    adjustLight = 0;
  } else if (lightLevel == 1) {
    adjustLight = 25;
  } else {
    adjustLight = 50;
  }

  let aL = adjustLight * 2;

  fill(210, 210, 210, 50);
  circle(mouseX, mouseY, 110 + aL);
  fill(242, 242, 242, 150);
  circle(mouseX, mouseY, 90 + aL);
  fill(250, 250, 250, 255);
  circle(mouseX, mouseY, 70 + aL);
}


//creates stars
function starField() {

  for (let i = 0; i < numStars; i++) {
    stars[i] = new Star();
  }
}

//creates vehicles
function makeVehicles() {
  for (let i = 0; i < numVehicles; i++) {
    vehicles[i] = new Vehicle();
  }

}

//clicking on vehicle
function mousePressed() {
  for (let i = 0; i < vehicles.length; i++) {
    vehicles[i].clicked(mouseX, mouseY);

  }
}

//back to the light state
function back() {
  state = 'play';

  resetVehicles();

  backButton.hide();
}

//choose image
function favorite() {
  state = 'finish';
}

function reset() {
  state = 'title';
  resetVehicles();
}


function moveElement() {
  elementY = elementY + 0.3;
  if (elementY > height) {
    elementY = 0;
  }
}

function resetVehicles() {
  for (let i = 0; i < numVehicles; i++) {
    vehicles[i] = vehicles.splice(i);
  }

  for (let i = 0; i < numVehicles; i++) {
    vehicles[i] = new Vehicle();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

//developer tool
function coordinates() {
  //for development purposes
  fill(255, 0, 0);
  noStroke();
  text("(" + mouseX + "," + mouseY + ")", mouseX, mouseY);
}

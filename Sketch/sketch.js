let scene = [];
let state = 'title';

function preload(){
  for(let i = 0; i < scene.length; i++){
    scene[i] = loadImage("images/" + i + '.jpg');
  }
}
// tree = 0, beach = 1, bed = 2, cabin = 3, candle = 4, city = 5
// castle = 6, forest = 7, gas = 8, ghost =9, campfire = 10
// resturant = 11, rocky = 12, star = 13, street = 14, theater =15
// thunder = 16, transit = 17

function setup() {
  createCanvas(windowWidth * 0.7, windowHeight * 0.7);
}


function draw() {


  if (state === 'title'){
    title();
  }
}

function title(){
  background(20);
  textSize(60);
  stroke(255, 204, 0);
  text('NightTime Strole', width*0.1, height * 0.5-100);
}

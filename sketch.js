const frameCountInSheet = 8;
const frameWidth = 587 / frameCountInSheet;
const frameHeight = 92;

let spriteSheet;
let characterX;
let characterY;
let facing = 1;

function preload() {
  spriteSheet = loadImage('1/fly/all.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  characterX = width / 2;
  characterY = height / 2;
  imageMode(CENTER);
}

function draw() {
  background('#bde0fe');

  const moving = keyIsDown(LEFT_ARROW) || keyIsDown(RIGHT_ARROW);

  if (keyIsDown(LEFT_ARROW)) {
    characterX -= 3;
    facing = -1;
  } else if (keyIsDown(RIGHT_ARROW)) {
    characterX += 3;
    facing = 1;
  }

  characterX = constrain(characterX, frameWidth / 2, width - frameWidth / 2);

  const frame = moving ? floor(frameCount / 8) % frameCountInSheet : 0;
  push();
  translate(characterX, characterY);
  scale(facing, 1);
  image(
    spriteSheet,
    0,
    0,
    frameWidth,
    frameHeight,
    frame * frameWidth,
    0,
    frameWidth,
    frameHeight
  );
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  characterX = constrain(characterX, frameWidth / 2, width - frameWidth / 2);
  characterY = constrain(characterY, frameHeight / 2, height - frameHeight / 2);
}

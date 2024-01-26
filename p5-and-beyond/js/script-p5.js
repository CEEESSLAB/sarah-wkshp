// Here are 2 options to create navigatable buttons using P5 functions.
// 1) using P5 rect() and text() functions with a general mouseClicked() event listener
// 2) using P5 createButton() function with an anonymous function in a mouseClicked event listener

// In this example, the buttons make a player go left or right.

let playerPosX = 250;

const buttonWidth = 100;
const buttonHeight = 30;
const buttonRadius = 5; //makes the buttons' edges rounder

const leftBtnX = 50;
const leftBtnY = 425;

function setup() {
  // Create the canvas where the command board and game will be drawn
  createCanvas(500, 500);
}

function draw() {
  background(235);
  // and this is where the participant would interact with the game via an interface

  // create a command board
  fill("purple");
  rect(0, 400, 500, 100);

  //create navigatable buttons on the command board.

  let buttonText = {
    left: "⇜",
    right: "⇝",
  };

  //   1.1) Draw a button using rect() and text() functions
  //   Create the left button with P5 rectangle and text with different styles
  push();
  stroke("aqua");
  strokeWeight(4);
  fill("yellow");
  rect(50, 425, buttonWidth, buttonHeight, buttonRadius);

  fill("red");
  noStroke();
  textSize(50);
  textAlign(CENTER);
  text(buttonText.left, 100, 450); //the text's position is independent from its rect container (challenging when creating animations or caus any change)
  pop();

  //  2.1) Create the right button using P5 createButton function
  let rightBtn = createButton(buttonText.right);
  rightBtn.position(350, 450); // Button cannot be stylized via P5, and position is independent from the canvas (P5)

  //  2.2)create an event listener on the right button to move the player right
  rightBtn.mousePressed(() => {
    playerPosX = playerPosX + 10;
  });

  // this is where all the game visualization would go, right now it's a (ellipse) player
  drawThePlayer();
}

// 1.2) Create a general mouse Pressed event listener
function mousePressed() {
  // And only make the player go left if the mouse has been pressed inside the left button
  if (
    mouseX >= leftBtnX &&
    mouseX <= leftBtnX + buttonWidth &&
    mouseY >= leftBtnY &&
    mouseY <= leftBtnY + buttonHeight
  ) {
    playerPosX = playerPosX - 10;
  }
}

function drawThePlayer() {
  // [Something a little bit more visually pleasing to insert here]
  push();
  fill(5);
  strokeWeight(6);
  stroke("aqua");
  ellipse(playerPosX, 250, 50);
  pop();
}

// Here are 2 options to create navigatable buttons using P5 functions.
// 1) using P5 rect() and text() functions with a general mouseClicked() event listener
// 2) using P5 createButton() function with an anonymous function in a mouseClicked event listener

// In this example, the buttons make a player go left or right.

let playerPosX = 250;

// const buttonWidth = 100;
// const buttonHeight = 30;
// const buttonRadius = 5;

// const leftBtnX = 50;
// const leftBtnY = 425;

// const RightBtnX = 350;
// const RightBtnY = 450;

function setup() {
  // createCanvas(500, 500);
}

function draw() {
  background(235);

  // fill("purple");
  // rect(0, 400, 500, 100);

  // let buttonText = {
  //   left: "⇜",
  //   right: "⇝",
  // };

  //   1.1) rect() and text() button
  // push();
  // stroke("aqua");
  // strokeWeight(4);
  // fill("yellow");
  // rect(50, 425, buttonWidth, buttonHeight, buttonRadius);

  // fill("red");
  // noStroke();
  // textSize(50);
  // textAlign(CENTER);
  // text(buttonText.left, 100, 450); //the text's position is independent from its rect container (challenging when creating animations or caus any change)
  // pop();

  //  2.1) createButton() function
  // const rightBtn = createButton(buttonText.right);
  // rightBtn.position(350, 450); //stylize ?, position?

  // //  2.2)Specifi event listener
  // rightBtn.mousePressed(() => {
  //   playerPosX = playerPosX + 10;
  // });

  // incredible game visualization found below
  drawThePlayer();
}

// 1.2) general mouse Pressed event listener
// function mousePressed() {
//   if (
//     mouseX >= leftBtnX &&
//     mouseX <= leftBtnX + buttonWidth &&
//     mouseY >= leftBtnY &&
//     mouseY <= leftBtnY + buttonHeight
//   ) {
//     playerPosX = playerPosX - 10;
//   }
// }

function drawThePlayer() {
  // [Something a little bit more visually pleasing to insert here]
  push();
  fill(5);
  strokeWeight(6);
  stroke("aqua");
  ellipse(playerPosX, 250, 50);
  pop();
}

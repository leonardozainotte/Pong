let ballx = 300;
let bally = 200;
let balld = 15;
let r = balld / 2;
let speedballx = 5;
let speedbally = 5;

let player1x = 5;
let player1y = 150;
let player1w = 10; 
let player1h = 90;

let player2x = 585;
let player2y = 150;
let speedplayer2;

let pointsp1 = 0;
let pointsp2 = 0;

let pong;
let pointgame;
let sound;

function preload(){
  sound = loadSound("trilha.mp3")
  pointgame = loadSound("ponto.mp3")
  pong = loadSound("raquetada.mp3")
}

function setup() {
  createCanvas(600, 400);
  sound.loop();
}

function draw() {
  background(00);
  showBall();
  moveBall();
  collisionBall();
  collisionPlayer1();
  collisionPlayer2();
  showPlayer1(player1x,player1y);
  movePlayer1();
  showPlayer2(player2x,player2y);
  moveplayer2();
  score();
  points();
  ballbug();
}

function showBall(){
  circle(ballx,bally,balld);
}

function showPlayer1(){
  rect(player1x,player1y,player1w,player1h)
}

function showPlayer2(x, y){
  rect(x,y,player1w,player1h)
}

function moveBall(){
  ballx += speedballx;
  bally += speedbally;
}

function movePlayer1(){
  if (keyIsDown(87)) {
    player1y -= 5;
  }
  if (keyIsDown(83)) {
    player1y += 5;
  }
}

function moveplayer2(){
  if (keyIsDown(UP_ARROW)) {
    player2y -= 5;
  }
  if (keyIsDown(DOWN_ARROW)) {
    player2y += 5;
  }
}

function collisionBall(){
  if (ballx + r > width || ballx - r < 0){
  speedballx *= -1;
  }  
  
  if (bally + r > height || bally - r < 0){
  speedbally *= -1
  }
}

function collisionPlayer1(){
  if (ballx - r < player1x + player1w && bally - r < player1y + player1h && bally + r > player1y){
    speedballx *= -1;
    pong.play();
  }
}

function collisionPlayer2(){
  if (ballx + r > player2x && bally - r < player2y + player1h && bally + r > player2y){
    speedballx *= -1;
    pong.play();
  }
}

function score(){
  textAlign(CENTER);
  textSize(20);
  fill(255);
  text(pointsp1, 250, 22);
  text(pointsp2, 350, 22);
  rect(300,0,3,400);
}

function points(){
  if (ballx > 593){
    pointsp1 += 1;
    pointgame.play();
  }
  if (ballx < 7){
    pointsp2 += 1;
    pointgame.play();
  }
}

function ballbug(){
    if (ballx - r < 0){
    console.log('bolinha ficou presa');
    ballx = 23;
    }
}


//theme: sustaining mental health
var sleep;
var outside;
var eat;
var shell;
var van;
var collfree;
var health = 0;
var beep = 200;


function preload() {
  sleep = loadSound("assets/lullaby.mp3");
  outside = loadSound('assets/travel.mp3');
  eat = loadSound('assets/wiggles.mp3');


  sleep.loop();
  sleep.stop();
  outside.loop();
  outside.stop();
  eat.loop();
  eat.stop();

}




function setup() {
  createCanvas(3000, 300);
  shell = loadFont('assets/shelline.otf');
  collfree = loadFont('assets/CollectionFree.otf');
  van = loadFont('assets/Vanilla_Twilight.otf');
}

function draw() {

  switch(health) {

    case 0:
      background(61, 1, 88);
      fill('white');
      textFont(shell, 30);
      text('Some Ways To Sustain Good Mental Health \n-click to begin-', 50, 50);
      break;

    case 1:
      sleep.play();
      doBeep(2, 100);
      break;

    case 2:
      background('black');
      fill('white');
      textFont(van, 36);
      text('1. Get plenty of sleep. Most college students require seven to nine hours, although it is not unheard of to require more.', 25, 50);
      doBeep(3, 300);

      break;


    case 3:
      outside.play();
      doBeep(4, 100);
      break;

    case 4:
      background(0, 204, 255);
      fill('black');
      textFont(van, 36);
      text('2. Spend some time outside. Even as little as five minutes outside can improve your mental health. \nConsider eating your lunch or dinner outside to change your routine up and absorb some vitamin D.', 50, 50);
      doBeep(5, 300);
      break;



    case 5:
      eat.play();
      doBeep(6, 100);
      break;

    case 6:
      background(253, 91, 120);
      fill('black');
      textFont(van, 36);
      text('3. Eat a piece of fruit. Chances are good that you are dehydrated. Fruit has a high water content and will help alleviate your dehydration.', 50, 50);
      doBeep(0, 200);
      break;



  }
}


function mouseReleased() {
  health++;

  sleep.pause();
  outside.pause();
  eat.pause();


}

function doBeep(variableHealth, variableBeep) {
  beep--;
  if (beep <= 0) {
    beep = variableBeep;
    health = variableHealth;
  }
}

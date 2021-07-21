
// This P5 sketch gets data from the people in space API and then displays the number of people in space as colorful circles.

function setup() { 
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  loadJSON("http://api.open-notify.org/astros.json", dataReceived);
}

function dataReceived(data){

  for (let i = 0; i < data.number; i++){
    fill(random(15), random(15), random(200));
    ellipse(random(width),random(height),50,50, 50);
  }

}

function draw() { 

  }
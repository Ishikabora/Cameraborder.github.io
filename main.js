function preload()
{

}

function setup()
{
    noStroke();
    canvas = createCanvas(400, 340);
    canvas.position(490, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function take_snapshot()
{
    save('student_name.png');
}

function draw()
{
    image(video, 100, 100, 200, 150);

    noStroke();
  
  fill("red");
  circle(50, 50, 60);
  
  fill("green");
  rect(35, 75, 30, 200);
  
  fill("red");
  circle(50, 300, 60);
  
  fill("green");
  rect(75, 285, 250, 30);
  
  fill("red");
  circle(340, 300, 60);
  
  fill("green");
  rect(325, 75, 30, 200);
  
  fill("red");
  circle(340, 50, 60);
  
  fill("green");
  rect(74, 35, 240, 30);
}


var rect;
function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  var rect=createSprite(150,340,20,100);
  var rect=createSprite(129,310,20,160);
  var rect=createSprite(113,285,10,210);
  var rect=createSprite(183,355,43,70);
  var rect=createSprite(217,340,20,100);
  var rect=createSprite(239,310,20,160);
  var rect=createSprite(256,285,10,210);
}

function draw() {
  background(255,255,255);  
  triangle(130,200,120,230,140,230)
  triangle(181,280,163,320,203,320)
  triangle(239,200,229,230,249,230)
  drawSprites();
  rect.display()
  rect.display()
  rect.display()
  rect.display()
  rect.display()
  rect.display()
  rect.display()
}
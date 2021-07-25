var path;
var pathImg;
var boy;
var left;
var right;
function preload()
{
  //pre-load images
  pathImg=loadImage("path.png")

  boy=addAnimation("runner-1.png,runner-2.png")
}

function setup()
{
  createCanvas(400,400);
  //create sprites here
  boy=createSprite(100,100,120,120);

path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY=4;
path.scale=1.2;

right=CreateSprite(-100,-100,200,100)
right.visible=false;

left=createSprite(100,100,200,100)
left.visible=false;
}

function draw() 
{
  background(0);
  path.collide(right);
  path.collide(left);
  if(path.y>400){
    path.y=height/2;

    path.x=mouseX
    if(path.x=60)
    {
      path.x=60;
    }
    if(path.x>340)
    {
      path.x=340;
    }

}

}
var albert;
var john;
var johnhealth=30;
var alberthealth=20;

function preload()
{
  albertImage = loadImage("Military.png")
  johnImage = loadImage ("Mafia.png")

}
function setup ()
{
  createCanvas(800,800);
  albert = createSprite(200,790,50,50);
  john = createSprite(600,790,50,50);
 albert.addImage("sting",albertImage);
john.addImage("sting",johnImage);
}
function draw()
{
  //hit();
  //block();
  //health();
  /*albert.y=albert.y+1.6;
  john.y=john.y+1.6;
  if(keyDown("space")){
    albert.velocityY=-10;
*/
  
  drawSprites();
  }
function hit(){
if (keyDown("x"))
{
    albert.velocityX=20;
    albert.collide(john);
    if(albert.collide(john)){
      johnhealth=johnhealth-3;
  }
}
}
function block()
{
  if(keyDown("m")&& john.collide(albert))
  {
    johnhealth=johnhealth-0;
    alberthealth=alberthealth-0;
  }
}
function health()
{
      if (alberthealth===0)
      {
        albert.destroy;
      }
      if(johnhealth===0)
      {
        john.destroy;
      }  
  }
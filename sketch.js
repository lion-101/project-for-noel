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
  albert = createSprite(200,650,300,300);
  john = createSprite(600,650,200,200);
  invisibleGround = createSprite(400,790,800,10)
 albert.addImage("sting",albertImage);
john.addImage("sting",johnImage);
albert.scale=0.3;
john.scale=0.2;
}
function draw()
{
  fill(255)
  alberthit();
  albertblock();
  health();
  johnhit();
  johnblock();
  john();
  albert.velocityY=albert.velocityY+1;
  john.velocityY=john.velocityY+1;
  invisibleGround.visible=false;
  (john.collide(invisibleGround));
  (albert.collide(invisibleGround));
  console.log("Albert Davies wakes up in a hospital, memory lost. He is rushed to ICU and blanks out. Once he gets out of the hospital, he feels a strong urge to help people, the people of Britain, his country. He is in good physical shape for a reason he does not understand so he signs up for the british secret service. He gets in, topping the auditioners, with the selectors talking about his natural instinct for shooting and close combat, believing that he could be a really good addition to the service. Albert does not know why he was so much better than all his fellow auditioners and why the gun in his hand felt so right. Two years later he’s sent on a mission, there is an underground organisation, SERPENT were going on a spree of attacks, cutting down 12,700 people in the process. Alberts mission was to track them down and take down the boss, John. He wades through all the SERPENT mercenaries and comes to John who recognises Albert as the boss and tells him that he is the former boss of SERPENT, however John does not want to give up his place as the boss of SERPENT and battles Albert for the rights to do whatever they want with the organization")
  if(keyDown("space"))
  {
    albert.velocityY=-10;
  }
  function john()
  {
    var rand = Math.round(random(1,2))
    if(rand === 1)
    {
      john.johnhit
    }
    else
    {
      john.johnblock;
    }
  }
  
  drawSprites();
  }


function johnhit()
{
  john.velocityX=-20;
  john.collide(albert)
  if(john.collide(albert)){
    alberthealth=alberthealth-3;
  }
}
function johnblock()
{
  if(keyDown("space")&& john.collide(albert))
  {
    johnhealth=johnhealth-3;
  }
}
function alberthit()
{
if (keyDown("x"))
{
    albert.velocityX=20;
    albert.collide(john);
    if(albert.collide(john)){
      johnhealth=johnhealth-3;
  }
}
}
function albertblock()
{
  if(keyDown("m")&& john.collide(albert))
  {
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

var albert;
var john;
var billy;
var johnhealth=30;
var alberthealth=20;
var billyhealth=60;
var johnfight=0;
var billyfight=1;
var over=2;
var gameState=johnfight
function preload()
{
  albertImage = loadImage("Military.png")
  johnImage = loadImage ("Mafia.png")
  billyImage = loadImage ("Billy the mafia boss.png")
}
function setup ()
{
  createCanvas(800,800);
  albert = createSprite(200,650,300,300);
  john = createSprite(600,650,200,200);
  invisibleGround = createSprite(400,790,800,10)
  albert.addImage("sting",albertImage);
  john.addImage("sting",johnImage);
  billy.addImage("sting", billyImage);
  albert.scale=0.3;
  john.scale=0.2;
  billy.scale=0.25;
}
function draw()
{
  fill(255)
  alberthit();
  albertblock();
  health();
  johnhit();
  johnblock();
  johnactive();
  albert.velocityY=albert.velocityY+1;
  john.velocityY=john.velocityY+1;
  invisibleGround.visible=false;
  (john.collide(invisibleGround));
  (albert.collide(invisibleGround));
  console.log("Albert Davies wakes up in a hospital, memory lost. He is rushed to ICU and blanks out. Once he gets out of the hospital, he feels a strong urge to help people, the people of Britain, his country. He is in good physical shape for a reason he does not understand so he signs up for the british secret service. He gets in, topping the auditioners, with the selectors talking about his natural instinct for shooting and close combat, believing that he could be a really good addition to the service. Albert does not know why he was so much better than all his fellow auditioners and why the gun in his hand felt so right. Two years later he’s sent on a mission, there is an underground organisation, SERPENT were going on a spree of attacks, cutting down 12,700 people in the process. Alberts mission was to track them down and take down the boss, John. He wades through all the SERPENT mercenaries and comes to John who recognises Albert as the boss and tells him that he is the former boss of SERPENT, however John does not want to give up his place as the boss of SERPENT and battles Albert for the rights to do whatever they want with the organization, once albert defeats John, he learns that John is not the actual leader of SERPENT, the real leader of SERPENT drops down and attacks Albert, his name is Billy")
  if(keyDown("space"))
  {
    albert.velocityY=-10;
  }
  if (gameState===johnfight)
  {
    johnactive();
    johnhit();
    johnblock();
    alberthit();
    albertblock();
    health();

    if(albert.destroy===true)
    {
      gameState=over
    }
    if (john.destroy===true)
    {
      gameState===billyfight
    }
  }
    else if(gameState===end)
    {
      text("gameover", 400, 400);
    }
    else if(gameState===billyfight)
    {
      var billy=createSprite(600,650,200,200);
      billyhit();
      billyblock();
      billyactive();
      alberthit();
      albertblock();
      health();
    }
  
  
  drawSprites();
  }

  function johnactive()
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
  function billyactive()
  {
    var rand = Math.round(random(1,2))
    if(rand === 1)
    {
      billy=billyhit;
    }
    else
    {
      billy=billyblock;
    }
  }
function johnhit()
{
  john.velocityX=-20;
  john.collide(albert)
  if(john.collide(albert)){
    alberthealth=alberthealth-3;
  }
}

function billyhit()
{
  billy.velocityX=-20;
  billy.collide(albert)
  if(billy.collide(albert)){
    alberthealth=alberthealth-3;
  }
}
function billyblock()
{
  if(billy.collide(albert))
  {
    billyhealth=billyhealth-0;
  }
}
function johnblock()
{
  if(john.collide(albert))
  {
    johnhealth=johnhealth-0;
  }
}
function johnblock()
{
  if(john.collide(albert))
  {
    johnhealth=johnhealth-0;
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
      if (billyhealth===0)
      {
        billy.destroy
      }
}

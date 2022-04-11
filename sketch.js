
var rocket,enemy1,enemy2, enemy3, bullet, back;

var rocketImage, enemy1Image, enemy2Image, enemy3Image, bulletImage, backImage;

var enemy1Group, enemy2Group, enemy3Group, bulletGroup;

var missionfailedImage;

var killSound;


var life =3;
var score=0;
var gameState=1

function preload(){
  rocketImage = loadImage("rocket.png")
  missionfailedImage = loadImage("missionfailed.png")
  bulletImage = loadImage("bullet.png")
  enemy1Image = loadImage("enemy1.png")
  enemy2Image = loadImage("enemy2.png")
  enemy3Image = loadImage("enemy3.png")
  killSound=loadSound("killSound.wax")
  
  backImage= loadImage("bg.jpg")
}
function setup() {
  createCanvas(800, 600);

  missionfailed=createSprite(200,200,100,100)
  missionfailed.addImage(missionfailedImage)
  missionfailed.scale=0.9

  back= createSprite(50, width/2, 100,height);
  back.addImage(backImage)
  
  rocket= createSprite(90, 100, 50,50);
  rocket.addImage(rocketImage)
  rocket.scale=0.5
  
  bulletGroup = createGroup();   
  enemy1Group = createGroup();   
  enemy2Group = createGroup(); 
  enemy3Group = createGroup();   
  
  heading= createElement("h1");
  scoreboard= createElement("h1");
}

function draw() {
  background("#BDA297");
  heading.html("Life: "+life)
  heading.style('color:red'); 
  heading.position(150,20)

  scoreboard.html("Score: "+score)
  scoreboard.style('color:red'); 
  scoreboard.position(width-200,20)

  if(gameState===1){
    rocket.y=mouseY  
   missionfailed.visible=false
    if (frameCount % 80 === 0) {
      createEnemy1();
    }

    if (frameCount % 100 === 0) {
      createEnemy2();
    }

    if (frameCount % 100 === 0) {
      createEnemy3();
    }

    if(keyDown("space")){
      shootBullet();
    }

    if(enemy1Group.isTouching(bulletGroup)){
      for(var i=0;i<enemy1Group.length;i++){       
       if(enemy1Group[i].isTouching(bulletGroup)){
            enemy1Group[i].destroy()
            bulletGroup.destroyEach()
            score = score+2
            killSound.play()
            } 
      }
    }
    if(enemy2Group.isTouching(bulletGroup)){
      for(var i=0;i<enemy2Group.length;i++){       
       if(enemy2Group[i].isTouching(bulletGroup)){
            enemy2Group[i].destroy()
            bulletGroup.destroyEach()
            score = score+2
            killSound.play()
            } 
      }
    }
    if(enemy3Group.isTouching(bulletGroup)){
      for(var i=0;i<enemy3Group.length;i++){       
       if(enemy3Group[i].isTouching(bulletGroup)){
            enemy3Group[i].destroy()
            bulletGroup.destroyEach()
            score = score+2
            killSound.play()
            } 
      }
    }
    if(enemy1Group.isTouching(rocket)){
    for(var i=0;i<enemy1Group.length;i++){         
     if(enemy1Group[i].isTouching(rocket)){
      enemy1Group[i].destroy()
         life=life-1
        
          } 
    }
   }
   if(enemy2Group.isTouching(rocket)){
    for(var i=0;i<enemy1Group.length;i++){         
     if(enemy2Group[i].isTouching(rocket)){
      enemy2Group[i].destroy()
         life=life-1
     
          } 
    }
   }
   if(enemy3Group.isTouching(rocket)){
    for(var i=0;i<enemy3Group.length;i++){         
     if(enemy3Group[i].isTouching(rocket)){
      enemy3Group[i].destroy()
         life=life-1
     }
    }
   }
   if(life===0){
     rocket.destroy();
     bulletGroup.destroyEach()
     enemy1Group.destroyEach()
     enemy2Group.destroyEach()
     enemy3Group.destroyEach()
   missionfailed.visible=true
    
   }
  
    drawSprites();
  }
    
  
}

function createEnemy1(){
  enemy1 = createSprite(800,random(20,780),40,40);
  enemy1.addImage(enemy1Image);
  enemy1.scale = 0.5;
  enemy1.velocityX = -8;
  enemy1.lifetime = 400;
  enemy1Group.add(enemy1);
}
function createEnemy2(){
  enemy2 = createSprite(800,random(20,780),40,40);
  enemy2.addImage(enemy2Image);
  enemy2.scale = 0.5;
  enemy2.velocityX = -8;
  enemy2.lifetime = 400;
  enemy2Group.add(enemy2);
}
function createEnemy3(){
  enemy3 = createSprite(800,random(20,780),40,40);
  enemy3.addImage(enemy3Image);
  enemy3.scale = 0.5;
  enemy3.velocityX = -8;
  enemy3.lifetime = 400;
  enemy3Group.add(enemy3);
}

function shootBullet(){
  bullet= createSprite(150, width/2, 50,20)
  bullet.y= rocket.y-20
  bullet.addImage(bulletImage)
  bullet.scale=0.12
  bullet.velocityX= 7
  bulletGroup.add(bullet)
}
















/*
var kills = 0

var play=1
var end=0
var gameState=play
var bg,bgImage,ss,ssImage,e1,e2,e3,e1Imgage,e2Image,e3Image,b1,b1Image


function preload() {
bgImage=loadImage("bg.jpg")
ssImage=loadImage("ss.png")
e1Image=loadImage("e1.png")
e2Image=loadImage("e2.png")
e3Image=loadImage("e3.png")
b1Image=loadImage("b1.png")
}

function setup() {
  createCanvas(1900,1310);
  
  ss=createSprite(980, 1100, 50, 50);
  ss.addImage(ssImage)
  ss.scale=2
  b1Group=new Group()
  e1Group=new Group()
  e2Group=new Group()
  e3Group=new Group()
  }
  
  function draw() {
    background(bgImage); 
  
  
  
  
    
    if (gameState===play) {
      ss.x=mouseX 
      edges=createEdgeSprites()
      ss.collide(edges)
      ss.x = World.mouseX;
  
      if (keyDown("space")) {
        shootb1();
      } 
     
      enemy();
      e2();
      e3()
   
      if (b1Group.isTouching(e1Group)) {
        b1Group.destroy();
        e1Group.destroy();
       kills=kills+1
      }
      if (b1Group.isTouching(e2Group)) {
        b1Group.destroy();
        e2Group.destroy();
       kills=kills+1
      }
      if (b1Group.isTouching(e3Group)) {
        b1Group.destroy();
        e3Group.destroy();
       kills=kills+1
      }
       if (e1Group.isTouching(ss)||e2Group.isTouching(ss)||e3Group.isTouching(ss)) {
       gameState=end
      }
  
    }
      if (gameState===end){
       // ss.x=width/2;
   // ss.y=height/2;
       ss.scale=0.8;
         
        b1Group.destroyEach();
       e1Group.destroyEach();
       e2Group.destroyEach();
       e3Group.destroyEach();
        
         
      b1Group.setVelocityYEach(0);
       e1Group.setVelocityYEach(0);
      e2Group.setVelocityYEach(0);
      e3Group.setVelocityYEach(0);
       
        
       ss.visible=false
      }
       
   
      
       drawSprites();
       textSize(50);
       fill(255);
       text("kills: "+ kills,50,50);
      
    }
  
    function shootb1(){
      b1= createSprite(987,1060)
      b1.x=ss.x
      b1.addImage(b1Image)
      b1.scale=1
      b1.velocityY= -50
      b1Group.add(b1)
    }
       
    function enemy() {
       if (frameCount % 250 === 0) {
         enemy = createSprite(600,100,40,10);
         enemy.y = Math.round(random(80,130));
         enemy.addImage(e1Image);
         enemy.scale = 0.5;
         enemy.velocityY=3;
      // e1.lifetime = 134;
       e1Group.add(enemy);
        }
    }
    function e2() {
      if (frameCount % 320 === 0) {
        e2 = createSprite(600,100,40,10);
       e2.y = Math.round(random(80,130));
       e2.addImage(e2Image);
      e2.scale = 0.5;
       e2.velocityY=3;
     // e2.lifetime = 134;
      e2Group.add(e2);
       }
   }
    
   function e3() {
    if (frameCount % 400 === 0) {
      e3 = createSprite(600,100,40,10);
     e3.y = Math.round(random(80,130));
     e3.addImage(e3Image);
    e3.scale = 0.5;
     e3.velocityY=3;
   //  e3.lifetime = 134;
    e3Group.add(e3);
     }
}
  
*/
  
  
  
  
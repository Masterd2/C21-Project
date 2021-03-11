var canvas;
var music;
var green, yellow, red, blue;
var box;
var top1, bottom1, left1, right1, edges1;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    green=createSprite(90, 560, 180, 20);
    green.shapeColor="green";
    yellow=createSprite(290, 560, 180, 20);
    yellow.shapeColor="yellow";
    red=createSprite(490, 560, 180, 20);
    red.shapeColor="red";
    blue=createSprite(690, 560, 180, 20);
    blue.shapeColor="blue";


    //create box sprite and give velocity
    box=createSprite(400, 300, 20, 20);
    box.velocityX=-2;
    box.velocityY=-4;

    edges1=new Group();
    top1=createSprite(400, 0, 800, 10);
    top1.visible=false
    edges1.add(top1);
    bottom1=createSprite(400, 600, 800, 10);
    bottom1.visible=false
    edges1.add(bottom1);
    left1=createSprite(0, 300, 10, 600);
    left1.visible=false
    edges1.add(left1);
    right1=createSprite(800, 300, 10, 600);
    right1.visible=false
    edges1.add(right1);

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    //it didn't work so I had to make sprites

    if (box.isTouching(green))
    {
        box.bounceOff(green);
        box.shapeColor="green"
    }
    if (box.isTouching(yellow))
    {
        box.bounceOff(yellow);
        box.shapeColor="yellow"
    }
    if (box.isTouching(red))
    {
        box.bounceOff(red);
        box.shapeColor="red"
    }
    if (box.isTouching(blue))
    {
        box.bounceOff(blue);
        box.shapeColor="blue"
    }

    //add condition to check if box touching surface and make it bounce
    box.bounceOff(top1);
    box.bounceOff(bottom1);
    box.bounceOff(left1);
    box.bounceOff(right1);
    
    drawSprites();
}

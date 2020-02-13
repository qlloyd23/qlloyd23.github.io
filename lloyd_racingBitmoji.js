var bitX = 19;
var bitY = 49;
var bunX = -4;
var bunY = 322;
var frogX = 189;
var frogY = 673;
var x = 1;


var drawBitmoji = function(bitmojiX,bitmojiY) {
    background(255, 255, 255);
    fill(255, 0, 0);
    arc(bitmojiX+75,bitmojiY+100,58,100,181,359);//shirt
    noStroke();
    quad(bitmojiX+51,bitmojiY+58,bitmojiX+99,bitmojiY+58,bitmojiX+97,bitmojiY+93,bitmojiX+53,bitmojiY+93);
    fill(250, 229, 165);
    ellipse(bitmojiX+75,bitmojiY+40,40,40);//head
    ellipse(bitmojiX+75,bitmojiY+50,60,40);//headTop
    fill(148, 107, 24); 
    ellipse(bitmojiX+55,bitmojiY+25,20,20);//hair
    ellipse(bitmojiX+50,bitmojiY+29,20,20);//|
    ellipse(bitmojiX+70,bitmojiY+18,20,20);//v
    ellipse(bitmojiX+80,bitmojiY+16,28,20);
    ellipse(bitmojiX+94,bitmojiY+25,20,20);
    ellipse(bitmojiX+99,bitmojiY+30,20,20);
    fill(250, 229, 165);
    ellipse(bitmojiX+55,bitmojiY+30,20,20);//headleft
    ellipse(bitmojiX+95,bitmojiY+30,20,20);//headright
    fill(255, 255, 255);
    ellipse(bitmojiX+55,bitmojiY+30,15,15);//eyeleft
    ellipse(bitmojiX+95,bitmojiY+30,15,15);//eyeright
    stroke(0, 0, 0);
    arc(bitmojiX+75,bitmojiY+50,50,30,0,180);
    line(bitmojiX+50,bitmojiY+50,bitmojiX+100,bitmojiY+50);
    fill(20, 65, 201);
    ellipse(bitmojiX+53,bitmojiY+30,5,5);
    ellipse(bitmojiX+95,bitmojiY+32,5,5);
    fill(0, 0, 0);
    line(bitmojiX+68,bitmojiY+42,bitmojiX+73,bitmojiY+42);//nostril left
    line(bitmojiX+77,bitmojiY+42,bitmojiX+82,bitmojiY+42);//nostril right
    fill(255, 255, 255);
    fill(0, 0, 0);
    textFont("monospace",32);
    text("QL",bitmojiX+54,bitmojiY+96);
    textSize(29);
    fill(255, 255, 255);
    text("QL",bitmojiX+55,bitmojiY+95);
};
    
var drawBunny = function(bunnyX,bunnyY){
    var eyesize = 30;
    var teethlength = 30;
    scale(1/2);
    ellipse(bunnyX+150, bunnyY+70, 60, 120);  // left ear
    ellipse(bunnyX+240, bunnyY+70, 60, 120);  // right ear
    
    ellipse(bunnyX+200, bunnyY+170, 150, 150);    // face
    
    fill(0, 0, 0);
    ellipse(bunnyX+170, bunnyY+150, eyesize, eyesize);  // left eye
    ellipse(bunnyX+230, bunnyY+150, eyesize, eyesize);  // right eye
    
    line(bunnyX+150, bunnyY+200, bunnyX+250, bunnyY+200);   // mouth
    
    noFill();
    rect(bunnyX+185, bunnyY+200, 15, teethlength); // left tooth
    rect(bunnyX+200, bunnyY+200, 15, teethlength); // right tooth
    
};

var drawFrog = function(x,y){
    noStroke();
    fill(30, 204, 91); // a nice froggy green!
    
    ellipse(x, y, 200, 100); // face
    ellipse(x - 50, y - 50, 40, 40); // left eye socket
    ellipse(x + 50, y - 50, 40, 40); // right eye socket
    
    fill(255, 255, 255); // for the whites of the eyes!
    ellipse(x - 50, y - 50, 30, 30); // left eyeball
    ellipse(x + 50, y - 50, 30, 30); // right eyeball
    
    fill(0, 0, 0);
    ellipse(x,y,100,50);
    rect(x - 50, y - 50,10,10);
    rect(x + 50, y - 50,10,10);
};

draw = function(){
    var bitmojiSpeed = random(1,5);
    var frogSpeed = random(1,5);
    var bunnySpeed = random(1,5);
    drawBitmoji(bitX,bitY);
    drawBunny(bunX,bunY);
    drawFrog(frogX,frogY);
    frogX = frogX + frogSpeed;
    bunX += bunnySpeed;
    bitX += bitmojiSpeed;
};


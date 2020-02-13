var bitmojiX = 0;
var bitmojiY = 60;

var drawBitmoji = function() {
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
drawBitmoji();
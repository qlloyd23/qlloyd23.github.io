draw = function() {
    fill(255, 0, 0);
    arc(75,100,58,100,181,359);//shirt
    noStroke();
    quad(51,58,99,58,97,93,53,93);
    fill(250, 229, 165);
    ellipse(75,40,40,40);//head
    ellipse(75,50,60,40);//headTop
    fill(148, 107, 24); 
    ellipse(55,25,20,20);//
    ellipse(50,29,20,20);
    ellipse(70,18,20,20);
    ellipse(80,16,28,20);//
    ellipse(94,25,20,20);
    ellipse(99,30,20,20);
    fill(250, 229, 165);
    ellipse(55,30,20,20);
    ellipse(95,30,20,20);
    fill(255, 255, 255);
    ellipse(55,30,15,15);
    ellipse(95,30,15,15);
    stroke(0, 0, 0);
    arc(75,50,50,30,0,180);
    line(50,50,100,50);
    fill(20, 65, 201);
    ellipse(53,30,5,5);
    ellipse(95,32,5,5);
    fill(0, 0, 0);
    line(68,42,73,42);//nostril left
    line(77,42,82,42);//nostril right
    fill(255, 255, 255);
    fill(0, 0, 0);
    textFont("monospace",32);
    text("QL",54,96);
    textSize(29);
    fill(255, 255, 255);
    text("QL",55,95);
};

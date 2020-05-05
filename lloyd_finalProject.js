var sceneNum = 0;//holds current scene calue
var CELL_HEIGHT = 40;//cells width and height 
var CELL_WIDTH = 40;
var cells = [];//array of cells heavily propertized and sorted
var tR = 255;//the next three variables represent the temprary r,g,b values the board needs for creating and identifying cell colors set as white to start
var tG = 255;// |
var tB = 255;// V
var tC = 8;//represents certain rgb values as variables temporarily.

var Cell = function(x,y,i,j){//an object function that holds idetifiers for each parameter
    this.x = x;//x any y pixel location
    this.y = y;
    this.i = i;//x and y replacements for game grid
    this.j = j;
    this.r = 255;//rgb values
    this.g = 255;
    this.b = 255;
    this.pc = 8;// puzzle color 
    this.c = 8;// color identifier (mostly stationary)
};

Cell.prototype.draw = function(){//function that draws cells based on its properties
    fill(this.r, this.g, this.b);
    noStroke();
    rect(this.x,this.y,CELL_WIDTH, CELL_HEIGHT);
};

Cell.prototype.drawHov = function(){//draws cell for instance while mouse is hovering 
    fill(this.r,this.g,this.b);
    stroke(135, 135, 135);
    rect(this.x,this.y,CELL_WIDTH-1, CELL_HEIGHT-1);
};

Cell.prototype.drawPuz = function(){//function that draws cells solid for puzzle
    fill(this.r, this.g, this.b);
    stroke(0, 0, 0);
    rect(this.x,this.y,CELL_WIDTH, CELL_HEIGHT);
};

Cell.prototype.drawMoveHov = function(){//function that draws open cell on the puzzle board
    fill(this.r, this.g, this.b);
    stroke(58, 158, 0);
    rect(this.x+1,this.y+1,CELL_WIDTH-2, CELL_HEIGHT-2);
};

var Button = function(config) {// kahn button object function
    this.x = config.x || 0;
    this.y = config.y || 0;
    this.width = config.width || 100;
    this.height = config.height || 50;
    this.label = config.label || "Click";
};
Button.prototype.draw = function() {
    fill(70, 197, 204);
    rect(this.x, this.y, this.width, this.height, 5);
    fill(0, 0, 0);
    textSize(19);
    textAlign(LEFT, TOP);
    text(this.label, this.x+10, this.y+this.height/4);
};
var ColorB = function(config) {//Circular button object function for color buttons
    this.x = config.x||0;
    this.r = config.r||0;
    this.g = config.g||0;
    this.b = config.b||0;
};

ColorB.prototype.draw = function() {//draws circular colored button when called
    fill(this.r, this.g, this.b);
    stroke(0, 0, 0);
    ellipse(this.x, 35, 50, 50);
};
function checkForHover(x,y){//loops through cells to detect if mouse is hovering. returns true for the cell
    if (mouseX > x && mouseX < x + CELL_WIDTH && mouseY > y && mouseY < y + CELL_HEIGHT){
        return true;
    }else{
        return false;
    }
}
function checkForcHover(x,y){//same as cell check for hover but for color buttons
    if (mouseX > x && mouseX < x + 50 && mouseY > 10 && mouseY < 60){
        return true;
    }else{
        return false;
    }
}
function checkForbHover(x,y){//same as cell check for hover but for kahn buttons
    if (mouseX > x && mouseX < x + 100 && mouseY > y && mouseY < y + 50){
        return true;
    }else{
        return false;
    }
}

function shuffleArray(arr){// array function based on function by All things javascript LLC on youtube.
    var holdPos;//holds the array index position
    var hold;//holds the value being swapped
    for(var i = arr.length-1; i > 0;i--){//goes through each item in the array and shuffles it
        holdPos = round(random(0,i+1));
        hold = arr[i];
        arr[i] = arr[holdPos];
        arr[holdPos] = hold;
    }
    return arr;
}

function colorPicker(a){//changes the temporary color for redrawing cells as different colors
    if(cells[a].pc === 1){//holds rgb values for specific numbers 1 is red and so on
        tR = 255;
        tG = 0;
        tB = 0;
    }else if(cells[a].pc === 2){//orange
        tR = 255;
        tG = 155;
        tB = 0;
    }else if(cells[a].pc === 3){//Yellow
        tR = 255;
        tG = 255;
        tB = 0;
    }else if(cells[a].pc === 4){//Green
        tR = 0;
        tG = 255;
        tB = 0;
    }else if(cells[a].pc === 5){//Blue
        tR = 0;
        tG = 0;
        tB = 255;
    }else if(cells[a].pc === 6){//Purple
        tR = 255;
        tG = 0;
        tB = 255;
    }else if(cells[a].pc === 7){//Brown
        tR = 130;
        tG = 75;
        tB = 0;
    }else if(cells[a].pc === 8){//White
        tR = 255;
        tG = 255;
        tB = 255;
    }else if(cells[a].pc === 0){// hidden black color for open spot on puzzle
        tR = 0;
        tG = 0;
        tB = 0;
    }
}

function swapOpen(a){//swaps the rgb values of the selected cells location and the open cell
    var holdI;//holds the open cells index location
    for(var i = 0; i < cells.length;i++){
        if(cells[i].pc === 0){//checks if the given location (i) is open
            holdI = i;
        }
    }
    cells[holdI].pc = cells[a].pc;//swaps present Color and all rgb values with the open space
    cells[holdI].r = cells[a].r;
    cells[holdI].g = cells[a].g;
    cells[holdI].b = cells[a].b;
    cells[holdI].drawPuz();
    cells[a].pc = 0;
    cells[a].r = 0;
    cells[a].g = 0;
    cells[a].b = 0;
    cells[a].drawPuz();//draws new open space
}

function checkOpen(a,b){//returns true if the location of the input is beside an open space
    var oppI;//open spaces temporaryi value
    var oppJ;//open spaces temporary j value
    for(var i = 0; i < cells.length;i++){
        if(cells[i].pc === 0){
            oppI = cells[i].i;
            oppJ = cells[i].j;
        }
    }
    if((oppI === a && (oppJ === b-1 ||oppJ === b+1))||(oppJ === b && (oppI === a-1 ||oppI === a+1))){//checks if the corisponding locations are the same as the open location returns true if so
        return true;
    }else{
        return false;
    }
}

function checkWin(){//runs through all puzzle spaces and counts if the current color of the spot is equal to the actual color of the spot
    var wrong = 0;//number of incorrect spaces
    for(var i = 0; i < cells.length;i++){
        if(cells[i].pc !== cells[i].c){
            wrong++;
        }
    }
    if(wrong === 0){//returns true when there are no wrong spaces
        return true;
    }
}

//Start
var btnStrt = new Button({//json for buttons
    x: width/2-50,
    y: height/2,
    label:"  START"
});

var btnPuzzle = new Button({//|
    x: width-101,
    y: height-51,
    label:"Puzzlize"
});

var btnRestart = new Button({//V
    x: width-101,
    y: height-51,
    label:"Restart"
});

var cRed = new ColorB({//json for color buttons with rgb values of corrisponding color
    x: 25,
    r: 255,
    g: 0,
    b: 0,
});
var cOrange = new ColorB({
    x: 75,
    r: 255,
    g: 155,
    b: 0,
});
var cYellow = new ColorB({
    x: 125,
    r: 255,
    g: 255,
    b: 0,
});
var cGreen = new ColorB({
    x: 175,
    r: 0,
    g: 255,
    b: 0,
});
var cBlue = new ColorB({
    x: 225,
    r: 0,
    g: 0,
    b: 255,
});
var cPurple = new ColorB({
    x: 275,
    r: 255,
    g: 0,
    b: 255,
});
var cBrown = new ColorB({
    x: 325,
    r: 130,
    g: 75,
    b: 0,
});
var cWhite = new ColorB({
    x: 375,
    r: 255,
    g: 255,
    b: 255,
});

function createCells(){//makes an array of cell objects whos parameters will change for the game
    var x = 80;//starting x location of cells
    var y = 75;//starting y location
    for(var j = 0;j < 6;j++){
        for(var i = 0;i < 6;i++){
            cells.push(new Cell(x,y,i,j));//pushes the physical location of the cell and the grid location with i and j variables
            x += CELL_WIDTH;
        }
        y += CELL_HEIGHT;
        x = 80;//first increment
    }
}
createCells();//cells should always be full unless reset


//scene functions
//the next 4 functions draw different scenes. they are called by the sceneNum
function drawStart(){
    background(189, 125, 189);
    fill(230, 255, 0);
    textFont("monospace",41);
    text("Paint & Puzzle",72,118);
    textSize(19);
    text("By: Quinn Lloyd",130,166);
    btnStrt.draw();
}

function drawPaintBoard(){
    background(172, 240, 247);
    for(var i = 0; i < cells.length; i++){
        cells[i].draw();
    }
    cRed.draw();
    cOrange.draw();
    cYellow.draw();
    cGreen.draw();
    cBlue.draw();
    cPurple.draw();
    cBrown.draw();
    cWhite.draw();
    btnPuzzle.draw();
    textFont("monospace",25);
    fill(0, 53, 138);
    text("Paint A Picture!",120,323);

}

function drawPuzzleBoard(){
    background(0, 107, 117);
    textFont("monospace",18);
    fill(255, 255, 255);
    text("Click Around the Black Box to Swap Peices",31,28);
    text("Re-Create Your Picture",112,343);
    textSize(15);
    text("The Open Space Goes in the Bottom Right When Finished",5,365);
}

function drawWin(){
    background(138, 153, 0);
    textFont("monospace",71);
    fill(238, 255, 0);
    text("You Win!",58,-5);
    btnRestart.draw();
}

function randomizeBoard(){//
    var rdmBoard = [];// list of color identifiers of all cells will be randomized
    for(var i = 0;i < cells.length;i++){
        if(i === cells.length-1){
            cells[i].c = 0;
            rdmBoard.push(0);
        }else{
            rdmBoard.push(cells[i].c);
        }
    }
    shuffleArray(rdmBoard);// shuffles the board colors
    for(var i = 0;i < cells.length;i++){
        cells[i].pc = rdmBoard[i];
    }
    for(var i = 0;i < cells.length;i++){//sets each of the cells colors equal to their scrammbled values
        colorPicker(i);
        cells[i].r = tR;
        cells[i].g = tG;
        cells[i].b = tB;
        cells[i].drawPuz();
    }
    
}

function hover(){//defines where and how to draw cells based on the scene and mouse location
    for (var i = 0; i < cells.length; i++){
        if (checkForHover(cells[i].x,cells[i].y) && sceneNum === 1){//checks if mouse is over cell and highlights the cell
            cells[i].drawHov();
        }else if(sceneNum === 1){
            cells[i].draw();
        }else if(sceneNum === 2 && checkOpen(cells[i].i,cells[i].j) && checkForHover(cells[i].x,cells[i].y)){//checks if the  mouse is on a spot and if the spot is beside an open spot 
            cells[i].drawMoveHov();//draws cell with green stroke to indicate that it can be moved
        }else if(sceneNum === 2){
            cells[i].drawPuz();
        }else if(sceneNum === 3){
            cells[i].draw();//draws final picture
        }
        if(checkForHover(cells[i].x,cells[i].y) && mouseIsPressed && sceneNum === 1){//sets cell colors on the board to the temporary color when in painting scene
            cells[i].r = tR;
            cells[i].g = tG;
            cells[i].b = tB;
            cells[i].c = tC;
            cells[i].draw();
        }
    }
}

function mouseClicked(){
    if(checkForbHover(btnStrt.x,btnStrt.y) && sceneNum === 0){
        sceneNum++;
    }
    if(checkForbHover(btnPuzzle.x,btnPuzzle.y) && sceneNum === 1){
        sceneNum++;
        randomizeBoard();
    }
    for(var i = 0; i < cells.length;i++){// runs the swap function if a highlighted cells is picked
        if(checkForHover(cells[i].x,cells[i].y) && sceneNum === 2 && checkOpen(cells[i].i,cells[i].j)){
            swapOpen(i);//swaps the open spot with current index location
        }
    }
    if(checkForbHover(btnRestart.x,btnRestart.y) && sceneNum === 3){//checks if restart was pressed
        sceneNum = 0;
        cells = [];//reset cells for new game
        createCells();
    }
    if(checkForcHover(cRed.x-25)){//changes the temporary color if mouse is over a color button (1-8 red-white)
        tR = 255;
        tG = 0;
        tB = 0;
        tC = 1;
    }else if(checkForcHover(cOrange.x-25)){
        tR = 255;
        tG = 155;
        tB = 0;
        tC = 2;
    }else if(checkForcHover(cYellow.x-25)){
        tR = 255;
        tG = 255;
        tB = 0;
        tC = 3;
    }else if(checkForcHover(cGreen.x-25)){
        tR = 0;
        tG = 255;
        tB = 0;
        tC = 4;
    }else if(checkForcHover(cBlue.x-25)){
        tR = 0;
        tG = 0;
        tB = 255;
        tC = 5;
    }else if(checkForcHover(cPurple.x-25)){
        tR = 255;
        tG = 0;
        tB = 255;
        tC = 6;
    }else if(checkForcHover(cBrown.x-25)){
        tR = 130;
        tG = 75;
        tB = 0;
        tC = 7;
    }else if(checkForcHover(cWhite.x-25)){
        tR = 255;
        tG = 255;
        tB = 255;
        tC = 8;
    }
}
    
function draw(){//draws scenes and game boared based on the sceneNum
    if(sceneNum === 0){
        drawStart();
    }else if(sceneNum === 1){
        drawPaintBoard();
        hover();
    }else if(sceneNum === 2){
        drawPuzzleBoard();
        hover();
        if(checkWin()){// changes the board when the game is complete
            sceneNum++;
        }
    }else if(sceneNum === 3){
        drawWin();
        hover();
    }
}


var ball;
var storehere;
var helpthiscodeplz;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    storehere = firebase.database();
    var localvariablehere = storehere.ref('ball/position')
    localvariablehere.on('value',functionfunction,eRrOr)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        notafinction(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        notafinction(1,0);
    }
    else if(keyDown(UP_ARROW)){
        notafinction(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        notafinction(0,+1);
    }
    drawSprites();
}

function notafinction(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}
function functionfunction(ahemSTOREHERE2){
helpthiscodeplz = ahemSTOREHERE2.val();
ball.x = helpthiscodeplz.x;
ball.y = helpthiscodeplz.y;
}
function eRrOr(){
console.log('u just got PRANKD')
}
function notafinction(x,y){
storehere.ref('ball/position').set({
x:helpthiscodeplz.x+x, y:helpthiscodeplz.y+y
})
}
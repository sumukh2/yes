var canvas=new fabric.Canvas('canavas');
playerX=10;
playerY=10;
blockimagewidth=30;
blockimageheight=30;
var player_object="";
var block_object="";
function playerupdate(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:playerY,
            left:playerX

        });
        canvas.add(player_object);
    });
}
function newimage(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(blockimagewidth);
        block_object.scaleToHeight(blockimageheight);
        block_object.set({
            top:playerY,
            left:playerX

        });
        canvas.add(block_object);
    });
}
window.addEventListener("keydown",mykeydown);
function mykeydown(e){
    keyPressed=e.keyCode;
    if(e.shiftKey==true&&keyPressed=='80'){
        blockimagewidth=blockimagewidth+10;
        blockimageheight=blockimageheight+10;
    document.getElementById("current-widtha").innerHTML=blockimagewidth;
    document.getElementById("current-heightss").innerHTML=blockimageheight;    
    }
    if(e.shiftKey&&keyPressed=='77'){
        blockimagewidth=blockimagewidth-10;
        blockimageheight=blockimageheight-10;
    document.getElementById("current-widtha").innerHTML=blockimagewidth;
    document.getElementById("current-heightss").innerHTML=blockimageheight;    
    }
    if(keyPressed=='38'){
        up();
    }
    if(keyPressed=='40'){
        down();
}
if(keyPressed=='37'){
    left();
}
if(keyPressed=='39'){
    right();
}
if(keyPressed == '65') { 
newimage('face.png'); console.log("w"); }
if(keyPressed == '66') { 
newimage('body.png'); console.log("t"); }
if(keyPressed == '67') { 
newimage('legs.png'); console.log("z"); }
if(keyPressed == '68') { 
newimage('right.png'); console.log("l"); }
if(keyPressed == '69') { 
newimage('left.png'); console.log("4bhrfu84"); }
}


function up(){
    if(playerY>=0){
        playerY=playerY-blockimageheight;
        canvas.remove(player_object);
        playerupdate();
    }
}
function down(){
    if(playerY<=500){
        playerY=playerY+blockimageheight;
        canvas.remove(player_object);
        playerupdate();
    }
}
function right(){
    if(playerX<=850){
        playerX=playerX+blockimagewidth;
        canvas.remove(player_object);
        playerupdate();
    }
}
function left(){
    if(playerX>=0){
        playerX=playerX-blockimagewidth;
        canvas.remove(player_object);
        playerupdate();
    }
}
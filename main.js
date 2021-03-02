var canvas=new fabric.Canvas("myCanvas");

blockwidth=30;
blockheight=30;

xofplayer=10;
yofplayer=10;

var objectofplayer="";
var objectofblock="";

function updateplayer(){

 fabric.Image.fromURL("player.png",function(IMG){

     objectofplayer = IMG;
    objectofplayer.scaleToWidth(150);
    objectofplayer.scaleToHeight(140);
    objectofplayer.set({

              top:yofplayer,
              left:xofplayer});


 

        canvas.add(objectofplayer);});

}

function newimage(get_image){

 fabric.Image.fromURL(get_image,function(IMG){
   
    objectofblock=IMG;

    objectofblock.scaleToWidth(blockwidth);
    objectofblock.scaleToHeight(blockheight);
    objectofblock.set({

 top:yofplayer,
 left:xofplayer});

 canvas.add(objectofblock);});


 }


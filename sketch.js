var rocket
var astroid
var blue
var blueImg
var astroid
function preload(){
rocket=loadImage("rocket.jpg")
astroid=loadImage("astroid.jpg")

}

function setup() {
depth()


}

function draw() {

 if(keyDown(RIGHT_ARROW)){
    rocket.velocityX=5
    }
    if(keyDown(LEFT_ARROW)){
        rocket.velocityX=-5
        }
        
        
        
 drawSprites()
 
}
function depth(){
    rocketImg=loadImage("rocket.jpg")
blueImg=loadImage("blue.jpg")


 rocket=createSprite(200,200,10,10)
 blue=createSprite(400,200,10,10)

 rocket.addImage("rocket.jpg",rocketImg)
 
 blue.velocityY=1
 blue.addImage("blue.jpg",blueImg)
 if(blue.y > 5){
    blue.y = 1
  }
 rocket.scale=0.4
 blue.scale=10
 astroid.scale=0.5
 rocket.depth=blue.depth
    rocket.depth+=1;
  

    
 



    
   
}




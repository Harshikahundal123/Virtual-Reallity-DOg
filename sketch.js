//Create variables here
var Dog, HappyDog
var database
var foodS
var FoodStock 

function preload()
{
   DogImage = loadImage("images/dog1mg.png");
   HappyDogImage = loadImage("images/dog2mg1.png")
   	//load images here
}

function setup() {
	createCanvas(500, 500);
  Dog = createSprite()
  Dog.addImage("dog1mg",DogImage)
  database = firebase.database;
  foodStock = database.ref('food');
  foodStock.on("value, readStock");

}
function writeStock (x){
  if(x<-0){
      x-0;
  } else {
    x-x-1 ;
  }
  database.ref('/').update({
  Food : x
  })
}
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    Dog.addImage(dog2mg);

  }
    
  



function draw() {  
background(46,139,87);
 
  drawSprites();
  //add styles here
  Text("Note: Press UP Arrow key to feed Drago Milk")
  

}




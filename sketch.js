

var doghappy
var dog
var food
var foodS
var foodStock
var database
var dog1


function preload(){

    doghappy=loadImage("happydog.png")
    dog = loadImage("Dog.png")

}

function setup() {
    database = firebase.database();
    food =foodstockref;
    createCanvas(500, 500);
    pet = createSprite(250,350,5,5);
    pet.addImage(dog);
    pet.scale =0.25;
  var foodstockref = database.ref("food");
   foodstockref.on("value",readStock);
  }
  
  
  function draw() {  
  background("green");
    drawSprites();
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    pet.addImage(doghappy)
   
  }

  textSize(19)
  fill("blue")
  text("note:Press UP_ARROW key to feed Drago Milk",50,50);
  text("food remaining:"+foodS,50,100);
  
  }
  
  function readStock(data){
    foodS=data.val();
  }
  function writeStock(x){
    database.ref("/").update({
      food:x
    })
    foodS = foodS-1;

    if(foodS<=0){
        foodS=0
    }
  
  }
  


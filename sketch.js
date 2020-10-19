var dog, happyDog, database, food, foodStock, dogimg, happyDogimg;

function preload()
{
  dogimg = loadImage("images/dogImg.png");
  happyDogimg = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(800, 600);
  database = firebase.database();
  dog = createSprite(400, 300, 20, 20);
  dog.addImage(dogimg, 400, 300);
  dog.scale = 0.2;

  foodStock = database.ref("Food").on("value", readStock);
}

function draw() {  
  background("orange");
  drawSprites();
  if(keyWentDown("up")){
    updateStock(food)
    dog.addImage(happyDogimg);
  }
  textSize(25);
  fill("blue");
  textFont("Impact");
  text("Remaining food: "+ food, 280, 50);
}

function readStock(data){
  food = data.val();
}
function updateStock(x){
   if(x<=0){
     x = 0;
   }
   else{
     x = x - 1;
   }
   database.ref('/').update({
   Food:x
  })
}



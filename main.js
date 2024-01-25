img = "";
statu = "";
objects = [];


function preload(){
  img = loadImage("dog_cat.jpg");

}


function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocoSSD' , modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting image";
}

function modelLoaded()
{
  console.log("Model Loaded");
  statu = true;
  objectDetector.detect(img, gotResult);
}

function gotResult(error, results){
  if (error) {
    console.log(error);
  }
  console.log(results);
  objects = results;
}

function draw(){


   image(img, 0, 0, 640, 420);

   if(statu != "")
   {
   fill("#FF0000");
   text("Dog", 60, 55);
   noFill();
   stroke("#FF0000");
   rect(30, 60 ,450 ,350);
   
   fill("#FF0000");
   text("Cat", 280, 55);
   noFill();
   stroke("#FF0000");
   rect(280, 60 ,360 ,350);
    }
}





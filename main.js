status="";

function setup(){
    canvas=createCanvas(300,300);
canvas.position(505,70);
video=createCapture(VIDEO);
video.hide();

}
function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
  }
  
  function start()
  {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    object_name = document.getElementById("object_name").value;
  }
  

function draw(){
    image(video,0,0,350,350);
}
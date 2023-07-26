status = "";

function setup(){
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    video.size(400, 400);
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modalLoaded);
    document.getElementById("input_1").value;
}

function modalLoaded(){
    console.log("MODAL LOADED !")
    status = true;
}

function draw(){
    image(video, 0, 0, 400, 400);
}
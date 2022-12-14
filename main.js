noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX =0;
difference= 0;
function setup(){
    canvas = createCanvas(500,500);
    canvas.position(530,100);
    video = createCapture(VIDEO);
    video.size(550,500);
    posenet  = ml5.poseNet(video,modelloded)
    posenet.on("pose",gotposes)
}

function preload(){
    
}

function modelloded(){
    console.log("modelloded");
}

function draw(){
    background("#ECECEC");
    fill('#F90093');
    stroke('#F90093');
    square(noseX,noseY,difference);

}

function gotposes(resultes){
    if(resultes.length > 0 ){
        console.log(resultes);
        noseX =  resultes[0].pose.nose.x;
        noseY =  resultes[0].pose.nose.y;
        console.log("noseX = "+noseX+ " noseY = "+noseY);
        leftwristX = resultes[0].pose.leftWrist.x;
        rightwristX = resultes[0].pose.rightWrist.x;
        difference = floor(leftwristX - rightwristX);
        console.log("leftwristX = "+leftwristX+" rightwristX = "+rightwristX+ " difference = "+difference);
    }
}
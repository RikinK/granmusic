song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3")
}

function setup()
{
    canvas = createCanvas(450, 450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video, 0, 0, 450, 450);
}

function gotPoses(results)
{
    if(results.lenght > 0){
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristX = results[0].pose.leftWrist.y;
        rightWristX = results[0].pose.rightWrist.x;
        rightWristX = results[0].pose.rightWrist.y;
        console.log("leftWristX = " + leftWristX + " leftWristY = " + leftWristY);
        console.log("rightWristX = " + rightWristX + " rightWristY = " + rightWristY);
    }
}






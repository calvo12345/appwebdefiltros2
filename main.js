noseX=0;
noseY=0;

function preload() {
    clownNose = loadImage('https://s3-whjr-curriculum-uploads.whjr.online/eab2da9b-164a-462f-b252-4e6e4613d5e3.gif');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('poseNet foi inicializado');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x-15;
        noseY = results[0].pose.nose.y-15;
    }
}

function draw() {
    Image(video, 0, 0, 300, 300);
    Image(moustacheImage, noseX, noseY, 30, 30);
}

function takeSnapshot(){
    save('myFilterImage.png');
}
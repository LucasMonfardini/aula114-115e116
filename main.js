noseX=0;
noseY=0;


function preload()
{
clownNose = loadImage('https://i.postimg.cc/c1RNbYH5/clownnose.png');
}

function setup()
{
 canvas = createCanvas(300,300);
 canvas.center();
 video = createCapture(VIDEO);
 video.hide();
 video.size(300,300);

 poseNet = ml5.poseNet(video, modelLoaded);
 poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
 console.log('modelo carregado');
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

function draw()
{
 image(video,0,0,300,300);
 image(clownNose,noseX, noseY, 30, 30);
}

function takeSnapshot()
{
 save('myFilterImage.png');
}
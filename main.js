function setup(){

    video = createCapture(VIDEO)
    video.size(550, 500)

    canvas = createCanvas(550, 550)
    canvas.position(560 , 150)

    poseNet = ml5.poseNet(video, moddelloadded)

    poseNet.on('pose', gotposses)

}
function  moddelloadded (){

    console.log("PoseNet Is Loadded")
}
function draw(){

    background("yellow")
}
function gotposses(results){

    if(results.length > 0){

        console.log(results)
    }

}
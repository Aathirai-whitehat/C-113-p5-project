function preload(){

}

function setup(){
    canvas=createCanvas(600,600);
    canvas.position(200,200);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,50,50,500,500);
    fill(200,200,0);
    rect(0,0,50,600);
    rect(0,0,600,50);
    rect(550,0,50,600);
    rect(0,550,600,50);
    fill(200,0,0);
    circle(0,0,150);
    circle(600,0,150);
    circle(0,600,150);
    circle(600,600,150);
}

function take_snapshot(){
    save("aathirai.png");
    
}

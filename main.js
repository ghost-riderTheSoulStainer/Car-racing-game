function setup(){
    canvas=document.getElementById('myCanvas')
    ctx=canvas.getContext("2d")
}
function add(){
    background_imgTag=new Image();//defining a variable with a new image
    background_imgTag.onload= uploadBackground;//setting a function, onloading this variable
    background_imgTag.src= background_image; //load image

    car_1imgTag = new Image(); //defining a variable with a new image
    car_1imgTag.onload=uploadcar1 //setting a function, onloading this variable
    car_1imgTag.src = car1_image //load image
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadcar1(){
    ctx.drawImage(car_1imgTag, car1_x, car1_y, car1_width, car1_height);
}
window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38'){
            car1_up();
            console.log("up arrow key");
        }
        if(keyPressed == '40'){
            car1_down();
            console.log("down arrow key");
        }
        if(keyPressed == '37'){
            car1_left();
            console.log("left arrow key");
        }
        if(keyPressed == '39'){
            car1_right();
            console.log("right arrow key");
        }
        
}
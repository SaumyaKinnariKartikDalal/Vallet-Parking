//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
//Give specific height and width to the car image
var car_h = 100;
var car_w = 75;
var car_x = 5;
var car_y = 225;
background_image = "parkingLot.jpg";
greencar_image = "car2.png";
var bg_img_tag = "";
var car_img_tag = "";

//Set initial position for a car image.

function add() {
	//upload car, and background images on the canvas.
	bg_img_tag = new Image()
    bg_img_tag.onload = uploadBackground;
    bg_img_tag.src = background_image;

    car_img_tag = new Image();
    car_img_tag.onload = uploadgreencar;
    car_img_tag.src = greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(bg_img_tag, 0, 0, canvas.width, canvas.height)

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(car_img_tag, car_x, car_y, car_w, car_h)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if (car_y >= 0) {
        car_y = car_y - 10;
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
	//Define function to move the car downward
	if (car_y <= 300) {
        car_y = car_y + 10;
		uploadBackground();
        uploadgreencar();
	}
}

function left()
{
	//Define function to move the car left side
	if (car_x >= 0) {
        car_x = car_x - 10;
		uploadBackground();
        uploadgreencar();
	}
}

function right()
{
	//Define function to move the car right side
	if (car_x <= 700) {
        car_x = car_x + 10;
		uploadBackground();
        uploadgreencar();
	}
}

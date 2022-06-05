//Sets up the game loop function to be repeated
app.ticker.add( (delta) => {
	game_loop();
});


//Creates a basic circle for a sprite image
//To be replaced with birds and other such beautiful things later
function get_sprite(){
	let o = new PIXI.Graphics();
	o.beginFill(0x55aadd);
	o.drawCircle(0,0,5);
	return o;
}

//Setup
let circle=get_sprite();
circle.x=100;
circle.y=100;

//Function that dictates how the circle moves
function move_circle(obj){
	let speed=5;
	if (right_key_pressed()){
		obj.x+=speed;
	}
	if (left_key_pressed()){
		obj.x-=speed;
	}
	if (up_key_pressed()){
		obj.y-=speed;
	}
	if (down_key_pressed()){
		obj.y+=speed;
	}
	if (obj.x<0){
		obj.x=0;
	}
	if (obj.x>900){
		obj.x=900;
	}
	if (obj.y<0){
		obj.y=0;
	}
	if (obj.y>600){
		obj.y=600;
	}
}

let circle_sprite=new Movable(circle,move_circle);
circle_sprite.initialize();

let plat=new Platform(300,300,100,100);
plat.initialize();

//Game Loop
function game_loop(){
	circle_sprite.move();
}



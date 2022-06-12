//Sets up the game loop function to be repeated
app.ticker.add( (delta) => {
	game_loop();
});

//Setup
let circle=get_circle();
circle.x=100;
circle.y=100;

//Function that dictates how the circle moves
function move_circle(o){
	//zoom
	let speed=10;

	obj=o.display;

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
	if (obj.x+obj.height>900){
		obj.x=900-obj.height;
	}
	if (obj.y<0){
		obj.y=0;
	}
	if (obj.y+obj.height>600){
		obj.y=600-obj.height;
	}
	block=o.fields["Obstacle"];
	position=detectCollision(o,block);


	//Collision detection - kinda janky around corners but actual game physics will be more complex
	if(position["right"]==0 && position["left"]==-1 && Math.abs(position["top"]+position["bottom"])<2){
		obj.x=block.display.x-obj.width;
		position=detectCollision(o,block);
	}
	if(position["right"]==1 && position["left"]==0 && Math.abs(position["top"]+position["bottom"])<2){
		obj.x=block.display.x+block.display.width;
		position=detectCollision(o,block);
	}
	if(position["bottom"]==0 && position["top"]==-1 && Math.abs(position["left"]+position["right"])<2){
		obj.y=block.display.y-obj.height;
		position=detectCollision(o,block);
	}
	if(position["bottom"]==1 && position["top"]==0 && Math.abs(position["left"]+position["right"])<2){
		obj.y=block.display.y+block.display.height;
	}

}

//Function for bird movement (I know the bird doesn't look like a bird yet lol) - mostly uses code from circle movement for now
function move_bird(b) {
	let speed=12;

	obj=b.display;

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
	if (obj.x+obj.width>900){
		obj.x=900-obj.width;
	}
	if (obj.y<0){
		obj.y=0;
	}
	if (obj.y+obj.height>600){
		obj.y=600-obj.height;
	}
	block=b.fields["Obstacle"];
	position=detectCollision(b,block);
	if(position["right"]==0 && position["left"]==-1 && Math.abs(position["top"]+position["bottom"])<2){
		obj.x=block.display.x-obj.width;
		position=detectCollision(b,block);
	}
	if(position["right"]==1 && position["left"]==0 && Math.abs(position["top"]+position["bottom"])<2){
		obj.x=block.display.x+block.display.width;
		position=detectCollision(b,block);
	}
	if(position["bottom"]==0 && position["top"]==-1 && Math.abs(position["left"]+position["right"])<2){
		obj.y=block.display.y-obj.height;
		position=detectCollision(b,block);
	}
	if(position["bottom"]==1 && position["top"]==0 && Math.abs(position["left"]+position["right"])<2){
		obj.y=block.display.y+block.display.height;
	}
}

let plat=new Block(get_platform(300,300,250,200));
plat.initialize();


let circle_sprite=new Movable(circle,{"Obstacle":plat},move_circle);
circle_sprite.initialize();


let bird1 = new Movable(get_bird(300,100,0x00ffff,1), {"Obstacle":plat}, move_bird);
bird1.initialize();

//Game Loop
i=0
function game_loop(){
	circle_sprite.move();
	bird1.move();
	plat.display.width+=Math.sin(i)/3;//*Sin wave vibes*
	plat.display.height+=Math.cos(i)/3;
	i+=.01;
}

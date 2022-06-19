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
	const maxVel = 10;
	const xAcc = 0.3;
	const yAcc = 0.2;
	o.display.x+=o.fields["x-vel"];
	o.display.y+=o.fields["y-vel"];

	obj=o.display;
	if (right_key_pressed()){
		if (o.fields["x-vel"]<maxVel){
			o.fields["x-vel"]+=xAcc;
		}
	}
	if (left_key_pressed()){
		if (o.fields["x-vel"]>-1*maxVel){
			o.fields["x-vel"]-=xAcc;
		}
	}
	if (up_key_pressed()){
		if(o.fields["grounded"]){
			o.fields["y-vel"]=-1*maxVel;
			o.fields["grounded"]=false;
		}
	}
	if (o.fields["grounded"]){
		o.fields["x-vel"]*=.98;
	}
	o.fields["y-vel"]+=yAcc;
	if (obj.x<0){
		obj.x=0;
		o.fields["x-vel"]*=-1/2;
	}
	if (obj.x+obj.height>900){
		obj.x=900-obj.height;
		o.fields["x-vel"]*=-1/2;
	}
	if (obj.y+obj.height>600){
		obj.y=600-obj.height;
		o.fields["grounded"]=true;
	}
	blocks=o.fields["Obstacles"];
	for (var i=0;i<blocks.length;i++){
		block=blocks[i];
		position=detectCollision(o,block);
		//bottom corner collisions
		if(position["bottom"]==1 && position["top"]==0 && position["right"]==0 && position["left"]==-1) {
			obj.y=block.display.y+block.display.height;
			if (o.fields["y-vel"]<0) {
				o.fields["y-vel"]*=-1/2;
			}
		}
		else if(position["bottom"]==1 && position["top"]==0 && position["left"]==0 && position["right"]==1) {
			obj.y=block.display.y+block.display.height;
			if (o.fields["y-vel"]<0) {
				o.fields["y-vel"]*=-1/2;
			}
		}

		else if(position["bottom"]==0 && position["top"]==-1 && Math.abs(position["left"]+position["right"])<2){
			obj.y=block.display.y-obj.height;
			o.fields["grounded"]=true;
			o.fields["y-vel"]=0;
			position=detectCollision(o,block);
		}
		else if(position["bottom"]==1 && position["top"]==0 && Math.abs(position["left"]+position["right"])<2){
			obj.y=block.display.y+block.display.height;
			o.fields["y-vel"]*=-.5;
			// o.display.y+=o.fields["y-vel"];
			position=detectCollision(o,block);
		}
		else if(position["right"]==0 && position["left"]==-1 && Math.abs(position["top"]+position["bottom"])<2){
			obj.x=block.display.x-obj.width;
			o.fields["x-vel"]*=-1/2;
		}
		else if(position["right"]==1 && position["left"]==0 && Math.abs(position["top"]+position["bottom"])<2){
			obj.x=block.display.x+block.display.width;
			o.fields["x-vel"]*=-1/2;
		}
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

let plat=new Block(get_platform(0,575,900,25));
plat.initialize();

let plat2=new Block(get_platform(300,350,250,20));
plat2.initialize();

let plat3=new Block(get_platform(100,300,40,25));
plat3.initialize();

let plat4=new Block(get_platform(650,200,80,25));
plat4.initialize();

//let plat3=new Block(get_platform(0,775,900,5));
//plat2.initialize();

let circle_sprite=new Movable(circle,
	{
	"Obstacles":[plat,plat2,plat3,plat4],
	"x-vel":0,
	"y-vel":0,
	"grounded":false
	},
	move_circle);
circle_sprite.initialize();


let bird1 = new Movable(get_bird(300,100,0x00ffff,1.5), {"Obstacle":plat}, move_bird);
bird1.initialize();

//Game Loop
i=0
function game_loop(){
	circle_sprite.move();
	bird1.move();
	//plat.display.width+=Math.sin(i)/3;//*Sin wave vibes*
	//plat.display.height+=Math.cos(i)/3;
	i+=.01;
}

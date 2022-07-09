

let app = new PIXI.Application({
	width:900,
	height:600
});
document.body.appendChild(app.view);



app.ticker.add( (delta) => {
	game_loop();
});




bird = new Physical();
bird.graphic_function=get_bird;
bird.draw_params={
	"x":0,
	"reversed":false
}
bird.draw();

bird.y=300;

plats=[construct_block(0,800,900)];

y=600;
for(var i=0;i<30;i++){
	width=Math.floor(Math.random()*400)+50;
	x=Math.floor(Math.random()*(900-width));
	y_offset=Math.floor(Math.random()*60)-30;
	plats.push(construct_block(x,y+y_offset,width));
	y-=200;
}

level = new Level(plats);


function game_loop(){
	move_obj(bird);
	bird.draw();
	move_level(level,bird);
	level.draw();
}




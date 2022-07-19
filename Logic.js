

function move_obj(object){
	acc=.2
	max_speed=15
	if (left_key_pressed()){
		object.vX-=acc;
		object.draw_params["reversed"]=true;
	}
	if (right_key_pressed()){
		object.vX+=acc;
		object.draw_params["reversed"]=false;
	}
	if (Math.abs(object.vX)>max_speed){
		object.vX+= (object.vX<0) ? -1*max_speed : max_speed;
	}
	object.vX*=.97;
	if (object.x<0 ){
		object.vX*=-.8;
		object.x=0;
	}
	if(object.x+object.width>900){
		object.vX*=-.8;
		object.x=900-object.width;
	}
	object.x+=object.vX;
	object.draw_params["x"]=object.x;
}

function move_level(level,obj,feet){
	speed_up=20;
	acc_down=.4;
	if (up_key_pressed() && level.grounded){
		level.vY=speed_up;
		level.grounded=false;
	}
	level.grounded=false;
	for(var i=0;i<level.components.length;i++){
		collis1=detectCollision(feet,level.components[i]);
		collis2=detectCollision(level.components[i],feet);
		if(level.vY<0 && collis2["top"]==0 && (collis1["left"]==0 || collis1["right"]==0)
			&& level.components[i].type=="block"){
			level.grounded=true;
			first=obj.y+obj.height;
			current=level.components[i].y
			diff=first-current;
			level.changeY(diff);
		}
	}
	//Change Color
	for(var i=level.components.length-1;i>=0;i--){
		if(level.components[i].type=="Color"){
			collis=detectCollision(obj,level.components[i]);
			if(Math.abs(collis["left"]+collis["right"])<2 && Math.abs(collis["bottom"]+collis["top"])<2){
				obj.draw_params["color"]=level.components[i].draw_params["color"];
				level.components[i].type="Empty";
				level.components[i].graphic.clear();
				level.components[i].graphic_function=null;
			}
		}
	}
	level.vY-=acc_down;
	if(level.grounded){
		level.vY=0;
	}
	level.changeY(level.vY);
}

function move_feet_block(feet,bird){
	w=feet.width;
	h=feet.height;
	x=bird.x;
	y=bird.y;
	bW=bird.width;
	bH=bird.height;
	if (bird.draw_params["reversed"]){
		feet.x=x+bW/2-w/2-23;
		feet.y=y+bH-h;
	} else {
		feet.x=x+bW/2-w/2;
		feet.y=y+bH-h;
	}
}




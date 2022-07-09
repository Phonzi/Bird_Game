

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

function move_level(level,obj){
	speed_up=20;
	acc_down=.4;
	if (up_key_pressed() && level.grounded){
		level.vY=speed_up;
		level.grounded=false;
	}
	level.grounded=false;
	for(var i=0;i<level.components.length;i++){
		collis1=detectCollision(obj,level.components[i]);
		collis2=detectCollision(level.components[i],obj);
		if(level.vY<0 && collis2["top"]==0 && (collis1["left"]==0 || collis1["right"]==0)){
			level.grounded=true;
			first=obj.y+obj.height;
			current=level.components[i].y
			diff=first-current;
			level.changeY(diff);
		}
	}
	level.vY-=acc_down;
	if(level.grounded){
		level.vY=0;
	}
	level.changeY(level.vY);
}





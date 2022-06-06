
function get_circle(){
	let o = new PIXI.Graphics();
	o.beginFill(0x55aadd);
	o.drawCircle(20,20,20);
	return o;
}

function get_platform(x,y,width,height,border=1){
	let graphics=new PIXI.Graphics();
	graphics.beginFill(0x3377bb);//Border Color
	graphics.drawRect(0,0,width,height);
	graphics.beginFill(0x000000);//Inside Color
	graphics.drawRect(border,border,width-2*border,height-2*border);
	graphics.x=x;
	graphics.y=y;
	return graphics
}




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
	return graphics;
}

function get_bird(x, y) {
	let b = new PIXI.Graphics();
	b.x = x;
	b.y = y;
	b.beginFill(0x0000ff);
	b.lineStyle(2, 0x404040, 1);
	const wing = [b.x+-33, b.y+18, b.x+-57, b.y+7, b.x+-64, b.y+9];
	b.drawPolygon(wing);
	b.endFill();
	return b;
}

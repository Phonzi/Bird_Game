
function get_circle(){
	let o = new PIXI.Graphics();
	o.beginFill(0x55aadd);
	o.drawCircle(20,20,20);
	return o;
}


function get_platform(params){
	border=1;
	let graphics=new PIXI.Graphics();
	graphics.beginFill(0x3377bb);//Border Color
	graphics.drawRect(0,0,params["width"],params["height"]);
	graphics.beginFill(0x000000);//Inside Color
	graphics.drawRect(border,border,params["width"]-2*border,params["height"]-2*border);
	return graphics;
}



function get_bird(params) {
	sc=1;
	x=params["x"];
	y=0;
	reversed=params["reversed"];
	color="#00ffff";
	let footStep = 100*sc;
	let b = new PIXI.Graphics();
	b.beginFill(0x00ffff);
	b.lineStyle(1*sc, 0x404040, 1);
	let x_adj=64;  //  X adjustment = -1 * min(x_coordinates)
	let y_adj=10;  //  Y adjustment = -1 * min(y_coordinates)

	flip = function(lst){
		return lst;
	}
	if(reversed){
		flip = function(lst){
			for(var i=0;i<lst.length;i+=2){
				lst[i]=x_adj-lst[i];
			}
			return lst;
		}
	}

	const tail = flip([(-33+x_adj)*sc, (18+y_adj)*sc, (-57+x_adj)*sc, (7+y_adj)*sc, (-64+x_adj)*sc, (9+y_adj)*sc]);
	b.drawPolygon(tail);
	b.endFill();
	b.beginFill(0x00ffff);
	const body = flip([x_adj*sc, y_adj*sc, (-43+x_adj)*sc, (18+y_adj)*sc, (-36+x_adj)*sc, (23+y_adj)*sc, (-27+x_adj)*sc, (27+y_adj)*sc, (-16+x_adj)*sc, (28+y_adj)*sc, (-4+x_adj)*sc, (24+y_adj)*sc, (1+x_adj)*sc, (18+y_adj)*sc, (1+x_adj)*sc, (9+y_adj)*sc, x_adj*sc, y_adj*sc]);
	b.drawPolygon(body);
	 //head
	if(reversed)
		b.drawCircle(x_adj-x_adj*sc, y_adj*sc, 10*sc);
	else
		b.drawCircle(x_adj*sc, y_adj*sc, 10*sc);
	b.beginFill(0x00e0e0);
	const wing = flip([(-9+x_adj)*sc, (12+y_adj)*sc, (-7+x_adj)*sc, (17+y_adj)*sc, (-8+x_adj)*sc, (21+y_adj)*sc, (-13+x_adj)*sc, (25+y_adj)*sc, (-25+x_adj)*sc, (25+y_adj)*sc, (-35+x_adj)*sc, (22+y_adj)*sc, (-41+x_adj)*sc, (18+y_adj)*sc, (-9+x_adj)*sc, (12+y_adj)*sc]);
	b.drawPolygon(wing);
	b.beginFill(0x404040);
	const beak = flip([(9+x_adj)*sc, (2+y_adj)*sc, (22+x_adj)*sc, (9+y_adj)*sc, (7+x_adj)*sc, (8+y_adj)*sc]);
 	b.drawPolygon(beak);
	b.beginFill(0x000000);
	if(reversed)
		b.drawCircle(x_adj-x_adj*sc, (-1+y_adj)*sc, 2*sc);
	else
		b.drawCircle(x_adj*sc, (-1+y_adj)*sc, 2*sc);
	b.endFill();
 	b.lineStyle(2*sc, 0x404040, 1);
	b.beginFill(0x404040);
	if (x%footStep >= 0 && x%footStep<footStep/2) { //this isn't working quite yet lol
	  let leg1 = flip([(-20+x_adj)*sc, (28+y_adj)*sc, (-18+x_adj)*sc, (43+y_adj)*sc]);
	  b.drawPolygon(leg1);
	  let leg2 = flip([(-15+x_adj)*sc, (28+y_adj)*sc, (-14+x_adj)*sc, (35+y_adj)*sc]);
	  b.drawPolygon(leg2);
	} else if (x%footStep>=footStep/2 && x%footStep<footStep) {
	  let leg1 = flip([(-20+x_adj)*sc, (28+y_adj)*sc, (-19+x_adj)*sc, (35+y_adj)*sc]);
	  b.drawPolygon(leg1);
	  let leg2 = flip([(-15+x_adj)*sc, (28+y_adj)*sc, (-13+x_adj)*sc, (43+y_adj)*sc]);
	  b.drawPolygon(leg2);
	}
	b.x = x;
	b.y = y;
	return b;
}


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

//Okay, so I tweaked this function in a couple places and just wanted to explain why -
//This graphics library is kind of strange in that every object is on its own coordinate system
//so like, graphic.x=10, won't necessarily move a drawing to x=10
//it'll actually move it 10 spaces to the right of where it's originally drawn
//which is weird and kinda confusing
//
//So that means that we have to coordinate where we originally draw objects so that
//we only have to keep track of one coordinate system (hopefully lol)
//In making the physics/movement functions, I arbitrarily choose for the x,y position of an object
//to mean the position of the top left corner of the smallest constraining rectangle around the object
//(I could've probably phrased that better but I'm a little sugar drunk right now)
//
//So practically, when we first draw objects, the aim is for their left side to touch the left side of the
//game box and their top to touch the top of the game box
//That's why I added the x_adj and y_adj here, to translate the polygon so the smallest x's and y's for
//the coordinates are exactly at zero
//
//After the object is drawn for the first time, we can place it anywhere without worrying, which is why I
//moved the b.x=x; and b.y=y; to the bottom of the function
//
//This was a long comment for a small change
//Thank you for reading through :)
//
//                _.-.
//            .-.  `) |  .-.
//        _.'`. .~./  \.~. .`'._
//    .-'`.'-'.'.-:    ;-.'.'-'.`'-.
//     `'`'`'`'`   \  /   `'`'`'`'`
//                 /||\
//                / ^^ \
//                `'``'`
//
//


function get_bird(x, y, color, sc) {
	let b = new PIXI.Graphics();
	b.beginFill(color);
	b.lineStyle(1*sc, 0x404040, 1);
	let x_adj=64*sc;  //  X adjustment = -1 * min(x_coordinates)
	let y_adj=-7*sc;  //  Y adjustment = -1 * min(y_coordinates)
	const tail = [(-33+x_adj)*sc, (18+y_adj)*sc, (-57+x_adj)*sc, (7+y_adj)*sc, (-64+x_adj)*sc, (9+y_adj)*sc];
	b.drawPolygon(tail);
	const body = [];
	const back = [x_adj*sc, y_adj*sc, (-43+x_adj)*sc, (18+y_adj)*sc];
	b.drawPolygon(back);
	b.drawCircle(x_adj*sc, y_adj*sc, 10*sc);
	const wing = [];
	b.beginFill(0x000000);
	const beak = [(9+x_adj)*sc, (2+y_adj)*sc, (22+x_adj)*sc, (9+y_adj)*sc, (7+x_adj)*sc, (8+y_adj)*sc];
	b.endFill();
	b.x = x;
	b.y = y;
	return b;
}

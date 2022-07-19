

class Construct{
	constructor(){
		this.x=0;
		this.y=0;
		this.width=0;
		this.height=0;
		this.draw_params={};
		this.graphic_function;
		this.graphic=null;
		this.type="";
	}
	draw(){
		if (!(this.graphic==null)){
			app.stage.removeChild(this.graphic);
			this.graphic.clear();
		}
		if (this.graphic_function!=null){
			this.graphic=this.graphic_function(this.draw_params);
			app.stage.addChild(this.graphic);
			this.align_graphic();
		}
	}
	align_graphic(){
		this.graphic.x=this.x;
		this.graphic.y=this.y;
		this.width=this.graphic.width;
		this.height=this.graphic.height;
	}
}

class Physical extends Construct{
	constructor(){
		super();
		this.vX=0;
		this.vY=0;
	}
}

function construct_color(x,y,color){
	circle = new Construct();
	circle.type="Color";
	circle.draw_params={"color":color};
	circle.graphic_function=get_color_circle;
	circle.x=x;
	circle.y=y;
	return circle;
}

function construct_block(x,y,width){
	block = new Construct();
	block.x=x;
	block.y=y;
	block.draw_params={"width":width,"height":10};
	block.graphic_function=get_platform;
	block.type="block";
	return block;
}

class Level extends Physical{
	constructor(blocks){
		super();
		this.components=blocks;
		this.grounded=false;
	}
	changeX(delta){
		for(var i=0;i<this.components.length;i++)
			this.components[i].x+=delta;
	}
	changeY(delta){
		for(var i=0;i<this.components.length;i++)
			this.components[i].y+=delta;
	}
	draw(){
		for(var i=0;i<this.components.length;i++){
			this.components[i].draw()
			this.components[i].align_graphic();
		}
	}
}








//Basic structure for all spite objects on the game 
class Block{
	constructor(display_object){
		this.display=display_object;
	}
	initialize(){
		app.stage.addChild(this.display);
	}
}

//A Block that have additional fields inserted into it
class Component extends Block{
	constructor(display_object,additional_fields){
		super(display_object);
		this.fields=additional_fields;
	}
}

//Anything that has to respond to some motion/physics
class Movable extends Component{
	constructor(display_object,physics_variables,movement_function){
		super(display_object,physics_variables);
		this.movement=movement_function;
	}
	move(){
		this.movement(this);
	}
}

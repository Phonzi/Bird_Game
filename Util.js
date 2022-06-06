
var keys_pressed = {
	"Left_Arrow":false,
	"Right_Arrow":false,
	"Up_Arrow":false,
	"Down_Arrow":false,
	"Space":false
};

function set_key_value(event_code, value){
	code_eqivs={
		32:"Space",
		37:"Left_Arrow",
		38:"Up_Arrow",
		39:"Right_Arrow",
		40:"Down_Arrow"
	};
	key=code_eqivs[event_code];
	keys_pressed[key]=value;
}

document.body.addEventListener("keydown", function (e){
	set_key_value(e.keyCode,true);
});

document.body.addEventListener("keyup", function (e){
	set_key_value(e.keyCode,false);
});


function left_key_pressed(){
	return keys_pressed["Left_Arrow"]
}

function right_key_pressed(){
	return keys_pressed["Right_Arrow"]
}

function down_key_pressed(){
	return keys_pressed["Down_Arrow"]
}

function up_key_pressed(){
	return keys_pressed["Up_Arrow"]
}






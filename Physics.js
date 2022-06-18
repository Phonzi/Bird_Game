
//Assigns each edge in block 1
//A value of -1 if it's above/left of
//A value of 0 if it's between
//A value of 1 if it's below/right of
//
//
//Example 1
//	Top:0 Bottom:0 Left:0 Right:0
//	Block 1 is fully inside Block 2
//
//Example 2
//	Top:-1 Bottom:1 Left:-1 Right:1
//	Block 2 is fully inside Block 1
//
//Example 3
//	Top:0 Bottom:0 Left:-1 Right:0
//	Block 1 collided with Block 2 along Block 1's right side
//
//Example 4
//	Top:-1 Bottom:0 Left:0 Right:1
//	Block 1 collided with Block 2 along Block 1's bottom left corner

function detectCollisionNumerically(x_1,y_1,width_1,height_1,x_2,y_2,width_2,height_2){
	b1_x_l=x_1;
	b1_x_r=x_1+width_1;

	b2_x_l=x_2;
	b2_x_r=x_2+width_2;

	b1_y_t=y_1;
	b1_y_b=y_1+height_1;

	b2_y_t=y_2;
	b2_y_b=y_2+height_2;

	relations={
		"top":0,
		"left":0,
		"bottom":0,
		"right":0
	}

	//left edge
	if (b1_x_l < b2_x_l){
		relations["left"]-=1;
	}
	if (b1_x_l > b2_x_r){
		relations["left"]+=1;
	}
	//right edge
	if (b1_x_r < b2_x_r){
		relations["right"]-=1;
	}
	if (b1_x_r > b2_x_l){
		relations["right"]+=1;
	}
	//top edge
	if (b1_y_t < b2_y_t){
		relations["top"]-=1;
	}
	if (b1_y_t > b2_y_b){
		relations["top"]+=1;
	}
	//bottom edge
	if (b1_y_b < b2_y_b){
		relations["bottom"]-=1;
	}
	if (b1_y_b > b2_y_t){
		relations["bottom"]+=1;
	}
	return relations
}




function detectCollision(block1,block2){
	x_1=block1.display.x;
	y_1=block1.display.y;
	width_1=block1.display.width;
	height_1=block1.display.height;

	x_2=block2.display.x;
	y_2=block2.display.y;
	width_2=block2.display.width;
	height_2=block2.display.height;

	return detectCollisionNumerically(x_1,y_1,width_1,height_1,x_2,y_2,width_2,height_2);

}

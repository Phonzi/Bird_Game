
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

function detectCollision(block1,block2){
	b1_x_l=block1.display.x;
	b1_x_r=block1.display.x+block1.display.width;

	b2_x_l=block2.display.x;
	b2_x_r=block2.display.x+block2.display.width;

	b1_y_t=block1.display.y;
	b1_y_b=block1.display.y+block1.display.height;

	b2_y_t=block2.display.y;
	b2_y_b=block2.display.y+block2.display.height;

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






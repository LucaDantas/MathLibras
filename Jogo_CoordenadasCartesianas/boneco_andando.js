function circle(px, py, radius, stroke, colorfill, colorstroke){
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.arc(px, py, radius, 0, 2*Math.PI, false);
	ctx.fillStyle = colorfill;
	ctx.fill();
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
}


function corpoParado(px, py, lenght, colorhead, colorarms, colorskin, deg){
	ctx.save();
	var rad = deg*Math.PI/180;
	ctx.translate(px, py);
	ctx.rotate(rad);
	//

	//ARMS
	rectangleRound(-lenght/2, lenght/8 , lenght, lenght/4 , lenght/6, 0, nocolor, colorarms);
	//HEAD
	triangle(-lenght/14, -lenght/6, lenght/14, -lenght/6, 0, -lenght/7 - lenght/7, 0, colorskin, nocolor);
	circle(0, 0, lenght/5, 0, colorhead, nocolor);

	ctx.translate(-px, -py);
	ctx.restore();
}
var side = false;
var chg = false;
//THE ONLY DIFFERENCE BETWEEN THIS ONE AND THE ONE STANDING STILL IS THAT THIS ONE WILL HAVE FEET THAT MOVE IN DIFFERENT POSITIONS BASED TO PASS THE IDEA THAT IT'S MOVING
function andando(px, py, lenght, colorhead, colorarms, colorskin, colorfeet, position, deg){
	ctx.save();
	var rad = deg*Math.PI/180;
	ctx.translate(px, py);
	ctx.rotate(rad);
	//

	//FEET
	if(position%( Math.floor( 2*(lenght) /7 ) +2) > lenght/7){
		if(!chg){
			side = !side;
			chg = true;
		}
		if(!side){
			rectangleRound(lenght/6, position%( Math.floor(lenght/7) +1) + lenght/8.5 - lenght/7, lenght/7, lenght/4.5, lenght/10, 0, nocolor, colorfeet);
			rectangleRound(-lenght/3.2, -position%( Math.floor(lenght/7) +1) + lenght/8.5 + lenght/7, lenght/7, lenght/4.5, lenght/10, 0, nocolor, colorfeet);
		}
		else{
			rectangleRound(lenght/6, -position%( Math.floor(lenght/7) +1) + lenght/8.5 + lenght/7, lenght/7, lenght/4.5, lenght/10, 0, nocolor, colorfeet);
			rectangleRound(-lenght/3.2, position%( Math.floor(lenght/7) +1) + lenght/8.5 - lenght/7, lenght/7, lenght/4.5, lenght/10, 0, nocolor, colorfeet);
		}
	}
	else{
		if(side) position = -position;
		chg = false;
		rectangleRound(lenght/6, position%( Math.floor(lenght/7) +1) + lenght/8.5, lenght/7, lenght/4.5, lenght/10, 0, nocolor, colorfeet);
		rectangleRound(-lenght/3.2, -position%( Math.floor(lenght/7) +1) + lenght/8.5, lenght/7, lenght/4.5, lenght/10, 0, nocolor, colorfeet);
	}
	
	corpoParado(0, 0, lenght, colorhead, colorarms, colorskin, 0);

	//
	ctx.translate(-px, -py);
	ctx.restore();
}
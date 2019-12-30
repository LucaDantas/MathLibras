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


function corpoParado(px, py, lenght, colorhead, colorarms, colorfeet, colorskin, deg){
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
	//FEET


	//
	ctx.translate(-px, -py);
	ctx.restore();
}
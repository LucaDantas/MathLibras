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

function rectangleRound(px, py, w, h, r, stroke, strokefill, colorfill, rotation){
    ctx.translate(px,py);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus		
    ctx.translate(-px,-py);
    
	var pontox = [px, px + r, px + w - r, px + w];
	var pontoy = [py, py - r, py - h + r, py - h]; 
	ctx.beginPath();
	ctx.lineCap="round";
	ctx.setLineDash([1,0]);
	ctx.moveTo(pontox[0], pontoy[1]);
	ctx.lineTo(pontox[0], pontoy[2]);			
	ctx.quadraticCurveTo(pontox[0], pontoy[3], pontox[1], pontoy[3]);			
	ctx.lineTo(pontox[2], pontoy[3]);			
	ctx.quadraticCurveTo(pontox[3], pontoy[3], pontox[3], pontoy[2]);
	ctx.lineTo(pontox[3], pontoy[1]);			
	ctx.quadraticCurveTo(pontox[3], pontoy[0], pontox[2], pontoy[0]);			
	ctx.lineTo(pontox[1], pontoy[0]);			
	ctx.quadraticCurveTo(pontox[0], pontoy[0], pontox[0], pontoy[1]);	 
	ctx.lineWidth = stroke;
	ctx.strokeStyle = strokefill;	
	ctx.fillStyle = colorfill;
	ctx.fill();				
    ctx.stroke();
    
    ctx.restore();
}

function corpoParado(px, py, lenght, colorhead, colorarms, colorfeet, rotation){
    rectangleRound(px - lenght/2, py + lenght/11 , lenght, lenght/5 , lenght/8, 0, nocolor, colorarms, rotation);
    circle(px, py, lenght/5, 0, colorhead, nocolor);
}
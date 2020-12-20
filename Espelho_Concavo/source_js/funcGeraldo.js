// Funcoes padrao da biblioteca de geralfit que eu usei

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var redcolor 				= '#e74c3c';
var orangecolor 			= '#e67e22';
var darkcolor 				= '#2c3e50';

function point(x, y, color){
	var x; y; color;
	ctx.beginPath();	
	ctx.arc(x, y, 2, 0, 2*Math.PI, false);
	ctx.fillStyle = color;
	ctx.fill();
	ctx.lineWidth = 1;
	ctx.strokeStyle = color;
	ctx.stroke();
}

function line(x1, y1, x2, y2, stroke, colorstroke){
	var x1; y1; x2; y2; stroke; colorstroke;
	ctx.beginPath();	
	ctx.lineCap="round";	
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();	
}

function arcCircle2(x, y, radius, angI, angF, stroke, color){	
	var x; y; radius; angI; angF; stroke; color;	
	var ang1 = angI*Math.PI/180;
	var ang2 = angF*Math.PI/180;
	ctx.beginPath();	
	ctx.arc(x, y, radius, ang1, ang2, false);		
	ctx.lineWidth = stroke;
	ctx.strokeStyle = color;	
	ctx.stroke();	
}

function linedash(x, y, width, stroke, colorstroke,rotation){
	var x; y; width; stroke; colorstroke; rotation;
	var passo = 5;
	var limit = Math.trunc((width-5)/10);
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-x,-y);
	//
	ctx.beginPath();
	for (var i = 0; i <= limit; i++){
		ctx.moveTo(x + 10*i, y);
		ctx.lineTo (x + 10*i + passo, y);
	}
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	//
	ctx.restore();
}

function vector(x, y, width, rotation, stroke, colorstroke){
	var x; y; width; rotation; stroke; colorstroke;
	var mult;
	var modulo = Math.abs(width);
	var ang;
	if(width >=0){
		ang = rotation;
	}else{
		ang = rotation + 180;
	}
		
	if(modulo < 10){
		mult = modulo/10;
	}else{
		mult = 1;
	}	
	var setaw = 10*mult;
	var setah = 10*mult;
	ctx.save();
	ctx.translate(x,y);
	ctx.rotate(ang*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-x,-y);
	//Linha
	if(width !=0){
		ctx.beginPath();		
		ctx.moveTo(x, y);
		ctx.lineTo(x + modulo-2, y);
		ctx.lineWidth = stroke;
		ctx.strokeStyle= colorstroke;
		ctx.stroke();
		//Seta	
		ctx.beginPath();		
		ctx.moveTo(x + modulo, y);
		ctx.lineTo(x + modulo - setaw, y - setah/2);
		ctx.lineTo(x + modulo - setaw, y + setah/2);
		ctx.fillStyle= colorstroke;
		ctx.closePath();
		ctx.fill();	 
	}
	//	
	ctx.restore();	
}
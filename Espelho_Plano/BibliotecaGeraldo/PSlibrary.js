/*
-------------------------------------------------------
1. Elementos Geométricos
1.1 Reta entre dois pontos: line
1.2 Reta com tamanho e ângulo: lineAngle
1.3 Reta pontilhada: dottedLine
1.4 Circulo: circle	
1.5 Arco de Circunferência:
1.6 Retângulo: rectangle
1.6 Retângulo rotacionavel (no centro)
1.7 Triângulo retângulo: triangleR (x0, y0, B, H, stroke; colorfill, colorstroke);
1.8 Triângulo qualquer: triangle3p
- Triângulo retângulo
- Triângulo pitagórico
- Triângulo retângulo com ângulo
1.5 Vetor: vector 

-------------------------------------------------------
2. Texto
2.1 Escrever: text
2.2 Escrever com subscrito: textSubs
2.3 Escrever nome de vetor: textVector
2.4 Escrever nome de vetor negativo: textVectorNegative
2.4 Escrever nome de vetor com subscrito: textVectorSubs
-------------------------------------------------------
3. Estrutura
3.1 Superfície: surface
3.2 Escala X: graduatedScaleX
3.3 Escala Y: graduatedScaleY
3.4 Barra de dimensão: simpleScale
3.5 Reticulado: grid
1.6 Eixo X: axisX
1.7 Eixo Y: axisY
1.8 Sistema de Coordenadas: coordinates (x0, y0, Lx, Ly, scale, stroke, colorstroke);
-------------------------------------------------------
4. Veículos
4.1 Carrinho vista lateral:
4.2 Carrinho vista superior:
4.3 Foguete
4.4 
-------------------------------------------------------
*Laboratório
01. Mola
02. Dinamômetro
03. Termômetro
04. Balança
05. Polia
06. Peso
07. Velocîmetro
08. Cronômetro
09. Resistor
10. Fonte de tensão
11. Chave liga/desliga
13. Bico de bunsen
14. Chama
15. Becker
16. Olho (observador)
17. Regua
18. Transferidor
19. Lentes
18. Espelhos esféricos
19. Transferidor
20. Regua
21. Lâmpada
22. Boneco palito
23. Boneco fixo
*/
//PADRÃO DE CORES (FLAT DESIGN) ---------------------------------------------
var whitecolor 				= 'rgb(255,255,255)';
var redcolor 				= '#e74c3c';
var orangecolor 			= '#e67e22';
var greencolor 				= '#218c74';
var darkcolor 				= '#2c3e50';
var bluecolor 				= '#3498db';
var graycolor 				= '#718093';
var concretcolor1 			= '#95a5a6';
var concretcolor2 			= 'rgba(189, 195, 199,1.0)';
var shadowcolordark 		= '#2d3436';
var shadowcolorbright 		= '#95a5a6';
var nocolor					= 'rgba(0,0,0,0)';

//  -----------------------------------------------------
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');	
function drawTime(time){	
	setInterval(desenhar,time);
}
function draw(desenhar){
	window.animationFrame = (function(){
		return  window.requestAnimationFrame       || 
		window.webkitRequestAnimationFrame || 
		window.mozRequestAnimationFrame    || 
		window.oRequestAnimationFrame      || 
		window.msRequestAnimationFrame     || 
		function(callback, element){
			window.setTimeout(callback);
		};
	})();	
	animationFrame(desenhar); 
}

function clear(){
	ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// GEOMETRIA  GEOMETRIA GEOMETRIA GEOMETRIA -----------------------------------------------------

//LINHA RETA ENTRE DOIS PONTOS
function line(px1, py1, px2, py2, stroke, colorstroke){
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.lineCap="round";	
	ctx.moveTo(px1, py1);
	ctx.lineTo(px2, py2);
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
}

//RETA COM TAMANHO E ÂNGULO
function lineAngle(px, py, width, rotation, stroke, colorstroke){
	ctx.save();
	ctx.translate(px,py);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-px,-py);
	//
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.moveTo(px,py);
	ctx.lineTo(px + width, py);
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	//
	ctx.restore();
}	

//LINHA RETA PONTILHADA ENTRE DOIS PONTOS (S e L configuração o estilo)
function linedash (px1,py1, px2, py2, S, L, stroke, colorstroke){
	ctx.setLineDash([S,L]);
	ctx.beginPath();			
	ctx.moveTo(px1, py1);
	ctx.lineTo(px2, py2);
	ctx.closePath();
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();			
}

//LINHA PONTILHADA
function linhapontilhada3(x0,y0,comprimento,cor,rotacao){
	var passo = 5;
	ctx.save();
	ctx.translate(x0,y0);
	ctx.rotate(rotacao*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-x0,-y0);
	//
	ctx.beginPath();
	for (var i = 0; i<=comprimento; i++){
		ctx.moveTo(x0 + 10*i, y0)
		ctx.lineTo (x0+10*i+passo, y0)
	}
	ctx.lineWidth = 1;
	ctx.strokeStyle = cor;
	ctx.stroke();
	//
	ctx.restore();
}

//EIXO (POSICIONADO NO CENTRO)
function axisAngle(px, py, widht, rotation, stroke, colorstroke){
	ctx.save();
	ctx.translate(px,py);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-px,-py);
	//
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.moveTo(px-widht/2,py);
	ctx.lineTo(px - 2 + widht/2 - 8,py);
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	arrow(px + widht/2,py,10,colorstroke,90);
	//
	ctx.restore();
}

//CÍRCULO
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

//CÍRCULO COM ESCALA E ROTAÇÃO
function circleScale(px, py, radius, scalex, scaley, rotation, stroke, colorfill, colorstroke){
	ctx.save();
	ctx.translate(px,py);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus	
	ctx.translate(-px*scalex,-py*scaley);
	ctx.scale(scalex,scaley);
	//
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.arc(px, py, radius, 0, 2*Math.PI, false);
	ctx.fillStyle = colorfill;
	ctx.fill();
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	//
	ctx.restore();
}

//ARCO DE CIRCUNFERÊNCIA PREENCHIDO COM DOIS ÂNGULOS
function arcCircle(px, py, radios, angI, angF, stroke, colorFill, colorStroke){	
	//
	var ang1 = angI*Math.PI/180;
	var ang2 = angF*Math.PI/180;
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.moveTo(px,py);
	ctx.arc(px, py, radios, ang1, ang2, false);
	ctx.lineTo(px,py);	
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorStroke;
	ctx.fillStyle = colorFill;
	ctx.fill();	
	ctx.stroke();	
}

//ARCO DE CIRCUNFERÊNCIA COM DOIS ÂNGULOS
function arcCircle2(px, py, radios, angI, angF, stroke, colorStroke){	
	//
	var ang1 = angI*Math.PI/180;
	var ang2 = angF*Math.PI/180;
	ctx.beginPath();
	ctx.setLineDash([1,0]);	
	ctx.arc(px, py, radios, ang1, ang2, false);	
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorStroke;	
	ctx.stroke();	
}

//ARCO DE CIRCUNFERÊNCIA VAZADO COM DOIS ÂNGULOS E ESCALA
function arcCircle3(px, py, radios, angI, angF, stroke, scalex, scaley, colorStroke){	
	ctx.save();
	ctx.translate(px,py);	
	ctx.translate(-px,-py);
	ctx.scale(scalex,scaley);
	//
	var ang1 = angI*Math.PI/180;
	var ang2 = angF*Math.PI/180;
	ctx.beginPath();
	ctx.setLineDash([1,0]);	
	ctx.arc(px, py, radios, ang1, ang2, false);	
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorStroke;	
	ctx.stroke();	
	//
	ctx.restore();
}

//RETÂNGULO
function rectangle(px, py, w, h, stroke, colorfill, colorstroke){
	ctx.beginPath();
	ctx.lineCap="round";	
	ctx.setLineDash([1,0]);
	ctx.rect(px, py, w, h);
	ctx.fillStyle = colorfill;
	ctx.fill();
	ctx.lineWidth = stroke;	
	ctx.strokeStyle = colorstroke;
	ctx.stroke();	
}

//RETÂNGULO ROTACIONÁVEL
function rectangleRotation(px, py, w, h, rotation, stroke, colorfill, colorstroke){
	ctx.save();
	ctx.translate(px,py);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-px,-py);
	//
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.rect(px, py, w, h);
	ctx.fillStyle = colorfill;
	ctx.fill();
	ctx.lineWidth = stroke;	
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	//
	ctx.restore();	
}

//RETÂNGULO COM BORDA ARREDONDADA --------------------------------------
function rectangleRound(px, py, w, h, r, stroke, strokefill, colorfill){
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
}	

//RETÂNGULO VAZADO
function rectangleEmpyt(px, py, w, h, stroke, colorstroke){
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.rect(px, py, w, h);	
	ctx.lineWidth = stroke;	
	ctx.strokeStyle = colorstroke;
	ctx.stroke();	
}

//TRIÂNGULO QUALQUER
function triangle(px1, py1, px2,py2, px3,py3, stroke, colorfill, colorstroke){
	ctx.beginPath();
	ctx.lineCap="round";
	ctx.setLineDash([1,0]);	
	ctx.moveTo(px1, py1);
	ctx.lineTo(px2, py2);
	ctx.lineTo(px3, py3);
	ctx.closePath();	
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();	
	ctx.fillStyle = colorfill;
	ctx.fill();	
}

//TRIÂNGULO RETÂNGULO COM ÂNGULO DE ABERTURA
function triangleRectangle(px1, py1, angle, base, stroke, colorfill, colorstroke){
	var angR = angle*Math.PI/180;
	var height = base*Math.tan(angR);
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.moveTo(px1, py1);
	ctx.lineTo(px1 + base, py1);
	ctx.lineTo(px1 + base, py1 - height);
	ctx.closePath();	
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();	
	ctx.fillStyle = colorfill;
	ctx.fill();	
}

//QUADRILÁTERO
function quadrangle(px1, py1,px2, py2, px3, py3, px4, py4, rotation, stroke, colorfill, colorstroke){	
	var px1; py1; px2; py2; px3; py3; px4; py4; rotation; stroke; colorfill; colorstroke;
	//
	ctx.beginPath();
	ctx.lineCap="round";		
	ctx.moveTo(px1, py1);
	ctx.lineTo(px2, py2);
	ctx.lineTo(px3, py3);
	ctx.lineTo(px4, py4);
	ctx.closePath();	
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();	
	ctx.fillStyle = colorfill;
	ctx.fill();	
	//
	ctx.restore();
}

//CURVA BEZIER
function curveBezier(px1, py1, dx1, dy1, dx2, dy2, px2, py2, stroke, colorstroke){
	ctx.beginPath();
	ctx.moveTo(px1,py1);
	ctx.bezierCurveTo(px1 + dx1,py1 + dy1,px2 + dx2,py2 + dy2,px2,py2);
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();			
}


//ESCALAS NÚMÉRICAS -------------------------------------------------->
function ScaleNumberPosX(px, py, width, scale, dist, font, color){
	var N = 0;
	var passo = 0;
	var dx = 0;
	var font;
	
	for (var i = 0; i <= width; i++){		
		textbold(N, font,'verdana', px + passo - dx, py, darkcolor);
		N = N + scale;
		if(N < 10){
			dx  = 0;
		}else{
			dx = 5;
		}
		passo = passo + dist;			
	}
}

function ScaleNumberPosY(px, py, width, scale, dist, font, color){
	var N = 0;
	var passo = 0;
	var dy = 0;
	var dx = 0;
	var font;
	
	for (var i = 0; i <= width; i++){		
		textbold(N, font,'verdana', px + dx, py - passo, darkcolor);
		N = N + scale;
		if(N < 10){
			dx  = 0;
		}else{			
			dx = -5;
		}
		
		if(N > 100){
			dx  = -10;
		}else{			
			dx = -5;
		}
		passo = passo + dist;			
	}
}

function ScaleNumberNegY(px, py, width, scale, dist, font, color){
	var N = -scale;
	var passo = 0;
	var dy = 0;
	var dx = 0;
	var font;
	
	for (var i = 0; i <= width; i++){	
		if(N < -10){
			dx  = 0;
		}else{			
			dx = 5;
		}
		textbold(N, font,'verdana', px + dx, py + passo, darkcolor);
		N = N - scale;
		
		passo = passo + dist;			
	}
}



function numberScalePositive(px, py, width, scale, dist, color){	
	var N = 0;
	var passo = 0;
	var dx = 0;
	
	for (var i = 0; i <= width; i++){		
		textbold(N, '7','verdana', px + passo - dx, py, darkcolor);
		N = N + scale;
		if(N < 10){
			dx  = 0;
		}else{
			dx = 5;
		}
		passo = passo + dist;			
	}
}

function numberScalePositive2(px, py, width, scale, dist, color){	
	var N = scale;
	var passo = 0;
	var dx = 0;
	
	for (var i = 0; i <= width; i++){		
		textbold(N, '8','verdana', px + passo - dx, py, darkcolor);
		N = N + scale;
		if(N < 10){
			dx  = 0;
		}else{
			dx = 5;
		}
		passo = passo + dist;			
	}
}

function numberScalePositiveY(px, py, width, scale, dist, color){	
	var N = 0;
	var passo = 0;
	var dy = 0;
	var dx = 0;
	
	for (var i = 0; i <= width; i++){		
		textbold(N, '8','verdana', px + dx, py - passo, darkcolor);
		N = N + scale;
		if(N < 10){
			dx  = 0;
		}else{			
			dx = -5;
		}
		passo = passo + dist;			
	}
}

function numberScalePositive2Y(px, py, width, scale, dist, color){	
	var N = scale;
	var passo = 0;
	var dy = 0;
	
	for (var i = 0; i <= width; i++){		
		textbold(N, '8','verdana', px, py - passo - dy, darkcolor);
		N = N + scale;
		if(N < 10){
			dy  = 0;
		}else{
			dy = 5;
		}
		passo = passo + dist;			
	}
}

function numberScaleNegative2(px, py, width, scale, dist, color){	
	var N = -scale;
	var passo = 0;
	var dx = 0;
	
	for (var i = 0; i <= width; i++){		
		textbold(N, '8','verdana', px - passo - dx, py, darkcolor);
		N = N - scale;
		if(N < 10){
			dx  = 0;
		}else{
			dx = 5;
		}
		passo = passo + dist;			
	}
}

function numberScaleNegative2Y(px, py, width, scale, dist, color){	
	var N = -scale;
	var passo = 0;
	var dy = 0;
	var dx;
	
	for (var i = 0; i <= width; i++){		
		textbold(N, '8','verdana', px +  dx, py + passo - dy, darkcolor);
		N = N - scale;
		if(N > -10){
			dx  = 0;
		}else{
			dx = -5;
		}
		passo = passo + dist;			
	}
}



// *****************************************************************************************************************


//VETOR1 (INVERTE O SENTIDO PARA TAMANHOS NEGATIVOS)
function vector1(px, py, width, rotation, stroke, colorstroke){
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
	ctx.translate(px,py);
	ctx.rotate(ang*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-px,-py);
	//Linha
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.moveTo(px, py);
	ctx.lineTo(px + modulo-2, py);
	ctx.lineWidth = stroke;
	ctx.strokeStyle= colorstroke;
	ctx.stroke();
	//Seta	
	ctx.beginPath();		
	ctx.moveTo(px + modulo, py);
	ctx.lineTo(px + modulo - setaw, py - setah/2);
	ctx.lineTo(px + modulo - setaw, py + setah/2);
	ctx.fillStyle= colorstroke;
	ctx.closePath();
	ctx.fill();	    
	ctx.restore();	
}

//VETOR PADRÃO (NÃO ACEITA TAMANHOS NEGATIVOS)
function vector2(px, py, module, rotation, stroke, colorstroke){
	var mult;
	var width = Math.abs(module);	
	if(width < 10){
		mult = width/10;
	}else{
		mult = 1;
	}	
	var setaw = 10*mult;
	var setah = 10*mult;
	ctx.save();
	ctx.translate(px,py);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-px,-py);
	//Linha
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.moveTo(px, py);
	ctx.lineTo(px + width-2, py);
	ctx.lineWidth = e;
	ctx.strokeStyle= colorstroke;
	ctx.stroke();
	//Seta	
	ctx.beginPath();		
	ctx.moveTo(px + width, py);
	ctx.lineTo(px + width - setaw, py - setah/2);
	ctx.lineTo(px + width - setaw, py + setah/2);
	ctx.fillStyle= colorstroke;
	ctx.closePath();
	ctx.fill();	    
	ctx.restore();	
}


//RETICULADO
function grid(px,py,N1,N2,stroke,colorstroke){
	var passo = 20;
	var largura = passo*(N1);
	var altura = passo*(N2);
	var passograde = 0;
	var i;
	// Desenhando retas verticais
	for(i = 1;i <= N1 + 1;i++){
		ctx.beginPath()
		ctx.moveTo(px + passograde, py);
		ctx.lineTo(px + passograde,py - altura);
		ctx.lineWidth = stroke;
		ctx.strokeStyle = colorstroke;
		ctx.stroke();
		passograde = passograde + passo
	}
	// Desenhando retas horizontais
	passograde = 0	
	for(i = 1;i <= N2 + 1;i++){
		ctx.beginPath()
		ctx.moveTo(px, py - passograde);
		ctx.lineTo(px + largura,py - passograde);
		ctx.lineWidth = stroke;
		ctx.strokeStyle = colorstroke;
		ctx.stroke();
		passograde = passograde + passo
	}
	passograde = 0
}

//SISTEMA DE COORDENADAS
function coordinateSistem(px, py, Lx, Ly, alpha, q1, q2, q3, q4){
	var coreixos = 'rgba(44, 62, 80,' + alpha + ')';
	
	if(q1 == true){
		grid(px, py, Lx/40, Ly/40, 1,'rgba(100,100,100,' + alpha/2 + ')');
	}
	if(q2 == true){
		grid(px, py + Ly/2, Lx/40,Ly/40, 1,'rgba(100,100,100,' + alpha/2 + ')');
	}
	if(q3 == true){
		grid(px - Lx/2, py, Lx/40, Ly/40, 1,'rgba(100,100,100,' + alpha/2 + ')');
	}
	if(q4 == true){
		grid(px - Lx/2, py + Ly/2, Lx/40, Ly/40, 1,'rgba(100,100,100,' + alpha/2 + ')');
	}
	axisAngle(px, py, Lx, 0, 1.5, coreixos);
	axisAngle(px, py, Ly, -90, 1.5, coreixos);
}

function coordinateSistemCinetic(x0, y0, px, py, alpha){
	var coreixos = 'rgba(44, 62, 80,' + alpha + ')';
	var Lx = canvas.width;
	var Ly = canvas.height;	
	axisAngle(Lx/2, y0, Lx - 20, 0, 1.5, coreixos);
	axisAngle(x0, Ly/2, Ly - 20, -90, 1.5, coreixos);
	line(x0 + px,y0, x0 + px, y0 + py, 0.5, whitecolor);
	line(x0,y0 + py, x0 + px, y0 + py, 0.5, whitecolor);	
	circle(x0 + px, y0, 2, 1, darkcolor, darkcolor); //PARTÍCULA
	circle(x0, y0 + py, 2, 1, darkcolor, darkcolor); //PARTÍCULA
}

//ESCALA SIMPLES
function scaleSimple(px,py,widht, stroke, colorstroke,rotation){
	ctx.save();
	ctx.translate(px,py);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-px,-py);
	//
	ctx.beginPath();
	ctx.moveTo(px,py);
	ctx.lineTo(px + widht,py);
	ctx.moveTo(px,py + 7);
	ctx.lineTo(px,py - 7);
	ctx.moveTo(px + widht,py + 7);
	ctx.lineTo(px + widht,py - 7);
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	//
	ctx.restore();
}

function graduatedScale(px, py, w, d, h, rotation, stroke, colorstroke){
	var N = w/d;
	ctx.save();
	ctx.translate(px,py);
	ctx.rotate(rotation*Math.PI/180); //Entre com o valor em graus
	ctx.translate(-px,-py);
	for(var i = 0; i <= N; i++){
		lineAngle(px, py, h, -90, 1.5, colorstroke);
		px = px + d;
	}
	ctx.restore();
}			



// TEXTO TEXTO TEXTO TEXTO----------------------------------------------------------

//ESCREVER TEXTO COM NEGRITO 
function textbold(texto, tamanho, fonte, px, py, color){
	ctx.font = 'bold ' + tamanho + 'pt ' +  fonte;
	ctx.fillStyle = color;
	ctx.fillText(texto, px, py);
}


//ESCREVER LETRA COM SÍMBOLO DE VETOR
function namevector(name,px,py,colortext){
	var h = 16
	var b = 3
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.moveTo(px-1, py-h);
	ctx.lineTo(px+12, py-h);
	ctx.lineTo(px+8, py-h-b);
	ctx.moveTo(px+12, py-h);
	ctx.lineTo(px+8, py-h+b);
	ctx.lineWidth = 1.5;
	ctx.strokeStyle = colortext;
	ctx.stroke();
	//
	ctx.font = 'bold 10pt Verdana';
	ctx.fillStyle = colortext;
	ctx.fillText(name, px, py);
}





// LABORATÓRIO LABORATÓRIO LABORATÓRIO LABORATÓRIO----------------------------------------------------------

//SUPERFÍCIE
function surface(px, py, widht, rotation, color){
	var N = widht/10;
	var i;
	var passo = 5;
	ctx.save();
	ctx.translate(px,py);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-px,-py);
	//
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.moveTo(px,py);
	ctx.lineTo(px + widht,py);
	//
	for(i=1;i<=N;i++){
		ctx.moveTo(px + passo,py);
		ctx.lineTo(px + passo-5,py+5);
		passo = passo + 10;
	}
	//
	ctx.lineWidth = 1;
	ctx.strokeStyle = color;
	ctx.stroke();
	//	
	ctx.restore()
}	


//SETA ROTACIONÁVEL
function arrow(px,py,b,colofill,rotation){
	ctx.save();
	ctx.translate(px,py);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus
	ctx.translate(-px,-py);
	//
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.moveTo(px,py);
	ctx.lineTo(px-b/2,py+b);
	ctx.lineTo(px+b/2,py+b);
	ctx.closePath();
	ctx.fillStyle= colofill;
	ctx.fill();		
	//
	ctx.restore();
}

//RÉGUA 15 CM
function ruler(xr,yr, rotation){
	var L = 630;
	var h = 60;
	var px = xr - L/2;
	var py = yr - h/2;
	var passo = 0;
	var corP = '#d1d8e0';
	var corB = '#4b6584';
	var corcentro = 'rgba(149, 175, 192,0.2)';
	var valor = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
	var valorx = [0,40,80,120,160,200,240,280,320,360,395,435,475,515,555,595];
	ctx.save();
	ctx.translate(xr,yr);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus			
	ctx.translate(-xr,-yr);
	//			
	rectangle(px,py,L,h,1,corP, corB);
	circle(xr,yr,20,1,corcentro,corcentro);
	//rectangle(xr,yr + 35,L - 2,h - 35,1,'rgba(223, 249, 251,0.2)', 'rgba(0,0,0,0)');
	//
	for(var i=0;i <= 75;i++){
		line(px + 15 + passo,py,px + 15 + passo,py + 10,1.2,'#576574');				
		passo = passo + 8;				
	}
	passo = 0;
	for(var i=0;i <= 15;i++){
		line(px + 15 + passo,py,px + 15 + passo,py + 15,1.8,'#576574');
		textbold(valor[i],8,'verdana',px + 11 + valorx[i],py + 30,'#2c3e50');
		passo = passo + 40;				
	}
	ctx.restore();	
	//circle(xr,yr,3,1,'black','black');	
}

//RÉGUA GRADUADA 1 CM = 10 MM
function ruler2(xr,yr, rotation){
	var L = 590;
	var h = 60;
	var px = xr - L/2;
	var py = yr - h/2;
	var passo = 0;
	var corP = '#d1d8e0';
	var corB = '#4b6584';
	var corcentro = 'rgba(149, 175, 192,0.2)';
	var valor = [0,1,2,3,4,5,6,7];
	var valorx = [0,80,160,240,320,400,480,560];
	ctx.save();
	ctx.translate(xr,yr);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus			
	ctx.translate(-xr,-yr);
	//			
	rectangle(px,py,L,h,1,corP, corB);
	circle(xr,yr,20,1,corcentro,corcentro);
	//rectangle(xr,yr + 35,L - 2,h - 35,1,'rgba(223, 249, 251,0.2)', 'rgba(0,0,0,0)');
	//
	for(var i=0;i <= 70;i++){
		line(px + 15 + passo,py,px + 15 + passo,py + 10,1.2,'#576574');				
		passo = passo + 8;				
	}
	passo = 0;
	for(var i=0;i <= 14;i++){
		line(px + 15 + passo,py,px + 15 + passo,py + 15,1.8,'#576574');
		textbold(valor[i],8,'verdana',px + 11 + valorx[i],py + 30,'#2c3e50');
		passo = passo + 40;				
	}
	ctx.restore();	
	//circle(xr,yr,3,1,'black','black');	
}

//CARRINHO BÁSICO VISTA LATERAL
function carFromSide(px, py, colofill, colorstroke, scale){
	ctx.save();
	ctx.translate(px,py);
	ctx.scale(scale,scale);
	ctx.translate(-px,-py);
	//	
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.rect(px, py - 25,40,20);
	ctx.lineWidth = 1.5;
	ctx.fillStyle = colofill;
	ctx.fill();
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	//
	ctx.beginPath();
	ctx.arc(px + 8, py-5, 5, 0, 2*Math.PI, false);
	ctx.lineWidth = 1.5;
	ctx.fillStyle = colofill;
	ctx.fill();
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	//
	ctx.beginPath();
	ctx.arc(px + 30, py -5, 5, 0, 2*Math.PI, false);
	ctx.lineWidth = 1.5;
	ctx.fillStyle = colofill;
	ctx.fill();
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	//
	ctx.restore();
}

//CARRINHO BÁSICO VISTA LATERAL (PARÂMETRO DE ALTURA DO CARRINHO)


//CARRINHO VISTA SUPERIOR
function carFromAbove(px, py, rotation, colorfill, colorstroke, scale){
	ctx.save();
	ctx.translate(px,py);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus
	ctx.scale(scale,scale);
	ctx.translate(-px,-py);
	//
	var pontosx = [px - 20, px + 10, px + 20];
	var pontosy = [py - 10, py, py + 10];
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.moveTo(pontosx[0], pontosy[0]);
	ctx.lineTo(pontosx[0], pontosy[2]);
	ctx.lineTo(pontosx[1], pontosy[2]);
	ctx.lineTo(pontosx[2], pontosy[1]);
	ctx.lineTo(pontosx[1], pontosy[0]);
	ctx.closePath();			
	ctx.fillStyle = colorfill;
	ctx.fill();
	ctx.lineWidth = 2;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();			
	//	
	line(px - 20, py + 13, px - 10, py + 13, 2.5, colorstroke);
	line(px, py + 13, px + 10, py + 13, 2.5, colorstroke);
	line(px - 20, py - 13, px - 10, py - 13, 2.5, colorstroke);
	line(px, py - 13, px + 10, py - 13, 2.5, colorstroke);
	//
	ctx.restore();		
}


//----------------------
//TERMÔMETRO ("h" é altura do termômetro e "temp" é o valor da temperatura)
function thermometer(px,py,h,temp){
	//
	if(temp > h){
		temp = h - 10
	}			
	//
	ctx.beginPath();
	ctx.arc(px, py, 10, -60*Math.PI/180, -120*Math.PI/180, false);
	ctx.moveTo(px - 5, py - 8);
	ctx.lineTo(px - 5, py - h);
	
	ctx.moveTo(px - 6, py - h);
	ctx.lineTo(px + 6, py - h);
	
	ctx.moveTo(px - 5, py - h);
	ctx.lineTo(px + 5, py - h);
	ctx.lineTo(px + 5, py - 8);
	ctx.lineWidth = 2.5;
	ctx.fillStyle = 'white';
	ctx.fill();	
	ctx.strokeStyle = darkcolor;
	ctx.stroke();			
	//
	ctx.beginPath();
	ctx.arc(px, py, 6, Math.PI, -Math.PI, false);			
	ctx.fillStyle = '#e74c3c';
	ctx.fill();			
	//			
	rectangle(px - 2,py - 5, 4, -temp, 0,'#c0392b',nocolor);
}

//BICO DE BUNSEN (ALTURA DA HASTE, ALTURA DA CHAMA, LIGADO/DESLIGADO
function bicoBunsen(px, py, h, hf, condition){
	var pxf = px + 24;
	var pyf = py - 25 - h;
	var colorfill = '#bdc3c7';
	var colorstroke = '#192a56';	
	var pontosx = [0, 25, 35, 60];
	var pontosy = [0, 10, 15];
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.moveTo(px + pontosx[0], py - pontosy[0]);
	ctx.lineTo(px + pontosx[3], py - pontosy[0]);
	ctx.lineTo(px + pontosx[3], py - pontosy[1]);
	ctx.lineTo(px + pontosx[2], py - pontosy[2]);
	ctx.lineTo(px + pontosx[1], py - pontosy[2]);
	ctx.lineTo(px + pontosx[0], py - pontosy[1]);
	ctx.closePath();
	ctx.fillStyle = colorfill;
	ctx.fill();	
	ctx.lineWidth = 1.5;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
	//			
	rectangle(px + pontosx[1], py - h - pontosy[2], 10, h, 1.5,colorfill, colorstroke);
	rectangle(px + pontosx[1] - 2, py - h - pontosy[2] - 7, 14, 7, 1.5, colorfill, colorstroke);
	if(condition == true){
		triangle(pxf, pyf, pxf + 13,pyf,  pxf + 6.5, pyf - hf, 1.5, redcolor, redcolor);
		triangle(pxf + 3, pyf, pxf + 10,pyf,  pxf + 6.5, pyf - 0.4*hf, 1.5, '#fbc531', '#fbc531');
	}		
}

//BECKER
function becker(px, py, w, h1, h2, colorfill){
	var R = 5;
	var dh = 8;
	ctx.beginPath();
	ctx.arc(px + R, py - R, R, Math.PI/2, Math.PI, false);
	ctx.moveTo(px, py - R);
	ctx.lineTo(px, py - h2);
	ctx.lineTo(px + w + R + dh, py - h2);		
	ctx.lineTo(px + w + R + dh, py - R);
	ctx.arc(px + w + dh, py - R, R, 0, Math.PI/2, false);
	ctx.lineTo(px + R, py);
	ctx.lineWidth = 0;
	ctx.strokeStyle = nocolor;
	ctx.stroke();
	ctx.fillStyle = colorfill;
	ctx.fill();				
	//
	arcCircle2(px + R, py - R, R, 90, 180, 2.5, darkcolor);
	line(px, py - R, px, py - h1, 2.5, darkcolor);
	line(px, py - h1, px - dh, py - h1 - dh, 2.5, darkcolor);
	line(px - dh, py - h1 - dh, px + w + dh + R + 1, py - h1 - dh, 1.5, darkcolor);
	line(px + w + dh + R, py - h1 - dh, px + w + dh + R, py - R, 2.5, darkcolor);
	arcCircle2(px + w + dh, py - R, R, 0, 90, 2.5, darkcolor);
	line(px + w + dh, py, px + R, py, 2.5, darkcolor);
}


function basicDoll(x0,y0,mult,cor1){
	var dx = mult*10;
	var dy = mult*35;			
	//
	x1 = x0 + dx;
	y1 = y0;			
	x2 = x1;
	y2 = y1 - dy;			
	x3 = x2 + dx/2;
	y3 = y2;			
	x4 = x3;
	y4 = y1;			
	x5 = x4 + dx;
	y5 = y1;			
	x6 = x5;
	y6 = y1 - 2*dy;			
	x7 = x6 + dx/2.5;				//Espaçamento do braço direito
	y7 = y6;			
	x8 = x7;
	y8 = y7 + dy;			
	x9 = x8 + dx/1.5;				//largura do braço direito
	y9 = y8;			
	x10 = x9;
	y10 = y9 - 1.2*dy;			
	x11 = x1 - 2*dx;				//Extremidade esquerda
	y11 = y10;			
	x12 = x11;
	y12 = y11 + 1.2*dy;			
	x13 = x12 + dx/1.5;
	y13 = y12;			
	x14 = x13;
	y14 = y13 - dy;			
	x15 = x0;
	y15 = y14;			
	x16 = x0;
	y16 = y0;			
	//
	ctx.beginPath();
	ctx.moveTo(x0, y0);
	ctx.lineTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.lineTo(x3, y3);
	ctx.lineTo(x4, y4);
	ctx.lineTo(x5, y5);
	ctx.lineTo(x6, y6);
	ctx.lineTo(x7, y7);
	ctx.lineTo(x8, y8);
	ctx.lineTo(x9, y9);
	ctx.lineTo(x10, y10);
	ctx.lineTo(x11, y11);
	ctx.lineTo(x12, y12);
	ctx.lineTo(x13, y13);
	ctx.lineTo(x14, y14);
	ctx.lineTo(x15, y15);
	ctx.lineTo(x16, y16);
	ctx.rect(x0 + dx/2, y0 - 2.8*dy, mult*15, mult*15);
	ctx.fillStyle = cor1;
	ctx.fill();
	ctx.lineWidth = 1*mult;
	ctx.strokeStyle = cor1;
	ctx.stroke();
}	


//BONECO PALITO ARTICULADO
function boneco2(px,py,angA1,angB1,angA2,angB2,mult){
	var linha = 3*mult;
	var cor = 'blue';
	var p = 35*mult;
	var t = 30*mult;
	var plinha = 5*mult;
	var b = 20*mult;
	var ab = 15*mult;
	var angA1;
	var angA2;
	var angB1;
	var angB2;
	var xb1 = px + b*Math.cos(angA1*Math.PI/180);
	var yb1 = py - t + b*Math.sin(angA1*Math.PI/180); 
	var xb2 = px + b*Math.cos(angA2*Math.PI/180);
	var yb2 = py - t + b*Math.sin(angA2*Math.PI/180); 
	//
	function retaboneco(x0,y0,tamanho,rotacao){
		ctx.save();
		ctx.translate(x0,y0);
		ctx.rotate(rotacao*Math.PI/180); // Entre com o valor em graus
		ctx.translate(-x0,-y0);
		//
		ctx.beginPath();
		ctx.moveTo(x0, y0);
		ctx.lineTo(x0 + tamanho, y0);
		ctx.lineWidth = linha;
		ctx.strokeStyle = cor;
		ctx.stroke();
		//
		ctx.restore();
	}	
	//Corpo
	retaboneco(px,py,p,70) 				// Perna direita
	retaboneco(px,py,p,110) 			// Perna esquerda
	retaboneco(px,py,t,-90) 			// Torax	
	retaboneco(px,py-t,plinha,-90) 		// Pescoço	
	retaboneco(px,py-t,b,angA1)			// Braço direito
	retaboneco(px,py-t,b,angA2)			// Braço esquerdo	
	retaboneco(xb1,yb1,ab,angB1)		// Antebraço direito
	retaboneco(xb2,yb2,ab,angB2)		// Antebraço esquerdo
	// Cabeça
	ctx.save();
	ctx.translate(px,py);
	ctx.scale(0.7,1)
	ctx.translate(-px,-py);
	ctx.beginPath();			
	ctx.arc(px, py-t-plinha-4*mult, 7*mult, 0, 2*Math.PI, false);
	ctx.fillStyle = cor;
	ctx.fill();
	ctx.restore()	
}



// BOTÕES  E DERIVADOS -------------------------------------------------------------------

//MARCADOR EM "V"
function right(px,py, stroke, colorstroke){
	ctx.beginPath();
	ctx.moveTo(px, py);
	ctx.setLineDash([1,0]);
	ctx.lineTo(px + 5, py + 10);
	ctx.quadraticCurveTo(px + 10, py, px + 15, py - 5);
	//ctx.lineTo(px + 15, py - 5);
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorstroke;
	ctx.stroke();
}

//BOTÃO COM MARCADOR DE ATIVAÇÃO RETANGULAR
function buttonType1(px, py, width, height, radius, texto, dx, dy, colorfill, colorshadow, colorright, action){
	var pontox = [px, px + radius, px + width - radius, px + width];
	var pontoy = [py, py - radius, py - height + radius, py - height];
	var pontoxs = [px + 2, px + 2 + radius, px + 2 + width - radius, px + 2 + width];
	var pontoys = [py + 2, py + 2 - radius, py + 2 - height + radius, py + 2 - height];
	//
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.moveTo(pontoxs[0], pontoys[1]);
	ctx.lineTo(pontoxs[0], pontoys[2]);			
	ctx.quadraticCurveTo(pontoxs[0], pontoys[3], pontoxs[1], pontoys[3]);			
	ctx.lineTo(pontoxs[2], pontoys[3]);			
	ctx.quadraticCurveTo(pontoxs[3], pontoys[3], pontoxs[3], pontoys[2]);
	ctx.lineTo(pontoxs[3], pontoys[1]);			
	ctx.quadraticCurveTo(pontoxs[3], pontoys[0], pontoxs[2], pontoys[0]);			
	ctx.lineTo(pontoxs[1], pontoys[0]);			
	ctx.quadraticCurveTo(pontoxs[0], pontoys[0], pontoxs[0], pontoys[1]);
	//
	ctx.lineWidth = 2;
	ctx.strokeStyle = colorshadow;	
	ctx.fillStyle = colorshadow;
	ctx.fill();				
	ctx.stroke();
	//
	//
	ctx.beginPath();
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
	//
	ctx.lineWidth = 1;
	ctx.strokeStyle = colorfill;	
	ctx.fillStyle = colorfill;
	ctx.fill();				
	ctx.stroke();
	//
	textbold(texto,10,'verdana',px + dx,py - dy,'#f5f6fa');
	//
	if(action == true){		
		right(px + width - 20,py - height/2 - 5, 3, colorright);
	}
}

//BOTÃO SEM MARCADOR
function buttonType2(px, py, width, height, radius, texto, dx, dy, colorfill, colorshadow){
	var pontox = [px, px + radius, px + width - radius, px + width];
	var pontoy = [py, py - radius, py - height + radius, py - height];
	var pontoxs = [px + 2, px + 2 + radius, px + 2 + width - radius, px + 2 + width];
	var pontoys = [py + 2, py + 2 - radius, py + 2 - height + radius, py + 2 - height];
	//
	ctx.beginPath();
	ctx.setLineDash([1,0]);
	ctx.moveTo(pontoxs[0], pontoys[1]);
	ctx.lineTo(pontoxs[0], pontoys[2]);			
	ctx.quadraticCurveTo(pontoxs[0], pontoys[3], pontoxs[1], pontoys[3]);			
	ctx.lineTo(pontoxs[2], pontoys[3]);			
	ctx.quadraticCurveTo(pontoxs[3], pontoys[3], pontoxs[3], pontoys[2]);
	ctx.lineTo(pontoxs[3], pontoys[1]);			
	ctx.quadraticCurveTo(pontoxs[3], pontoys[0], pontoxs[2], pontoys[0]);			
	ctx.lineTo(pontoxs[1], pontoys[0]);			
	ctx.quadraticCurveTo(pontoxs[0], pontoys[0], pontoxs[0], pontoys[1]);
	//
	ctx.lineWidth = 2;
	ctx.strokeStyle = colorshadow;	
	ctx.fillStyle = colorshadow;
	ctx.fill();				
	ctx.stroke();
	//
	//
	ctx.beginPath();
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
	//
	ctx.lineWidth = 1;
	ctx.strokeStyle = colorfill;	
	ctx.fillStyle = colorfill;
	ctx.fill();				
	ctx.stroke();
	//
	textbold(texto,10,'verdana',px + dx,py - dy,'#f5f6fa');	
}


//MOLDURA RETANGULAR
function molding (px, py, L, H, stroke, colorstroke, colorfill){	
	rectangle(px, py, L, H, 0, colorfill, nocolor);
	line(px, py, px, py + H, stroke, colorstroke);			
	line(px, py, px + L, py, stroke, stroke);		
}






/* DIVERSOS  DIVERSOS DIVERSOS DIVERSOS------------------------------------------------------------------------------ */
function referential(px, py, colorstroke){
	lineAngle(px - 20, py, 40, 0, 1.5, colorstroke);
	lineAngle(px, py + 20, 40, 90, 1.5, colorstroke);	
}


function littlecar(px, py){
	var corrodas = 'rgba(0, 151, 230,1.0)';
	var corcarro = 'rgba(0, 168, 255,1.0)';		
	var corborda = 'rgba(25, 42, 86,1.0)';
	var height = 40;
	var lenght = 60;
	rectangle(px, py, 60, height, 2, corcarro, corborda);				
	circle(px + 12, py + 40, 8, 2, corrodas, corborda);
	circle(px + 47, py + 40, 8, 2, corrodas, corborda);
}

function littlecar2(px, py){	
	var corrodas = 'rgba(127, 140, 141,1.0)';
	var corcarro = 'rgba(149, 165, 166,1.0)';		
	var corborda = 'rgba(52, 73, 94,1.0)';
	var height = 40;
	var lenght = 60;
	rectangle(px, py, 60, height, 2, corcarro, corborda);		
	circle(px + 12, py + 40, 8, 2, corrodas, corborda);
	circle(px + 47, py + 40, 8, 2, corrodas, corborda);
}

function person(px, py, rotation, scale, colorfill){	
	ctx.save();
	ctx.translate(px,py);
	ctx.rotate(-rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-px*scale,-py*scale);
	ctx.scale(scale,scale);
	//
	rectangle(px, py - 20, 5, 20, 1, colorfill, colorfill);
	rectangle(px + 7, py - 20, 5, 20, 1, colorfill, colorfill);
	rectangle(px, py - 22 - 20, 12, 20, 1, colorfill, colorfill);
	rectangle(px - 7, py - 22 - 20, 5, 20, 1, colorfill, colorfill);
	rectangle(px + 14, py - 22 - 20, 5, 20, 1, colorfill, colorfill);
	circle(px + 6, py - 29 - 20, 5, 0, colorfill, colorfill);
	//
	ctx.restore();
}	

function personLateral(px, py, rotation, scale, colorfill){	
	ctx.save();
	ctx.translate(px,py);
	ctx.rotate(-rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-px*scale,-py*scale);
	ctx.scale(scale,scale);
	//
	rectangle(px, py - 20, 5, 20, 1, colorfill, colorfill);		
	rectangle(px, py - 42, 6, 20, 1, colorfill, colorfill);
	rectangle(px + 3, py - 5, 5, 5, 1, colorfill, colorfill);
	rectangleRotation(px, py - 38, 4, 18, -30, 1, colorfill, colorfill);		
	circle(px + 3, py - 29 - 20, 5, 0, colorfill, colorfill);
	//
	ctx.restore();
}


//LINHA PONTILHADA
function linhapontilhada(x0,y0,comprimento,cor,rotacao){
	var passo = 5;
	ctx.save();
	ctx.translate(x0,y0);
	ctx.rotate(rotacao*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-x0,-y0);
	//
	ctx.beginPath();
	for (i = 0; i <= comprimento; i++){
		ctx.moveTo(x0 + 10*i, y0)
		ctx.lineTo (x0 + 10*i + passo, y0)
	}
	ctx.lineWidth = 2;
	ctx.strokeStyle = cor;
	ctx.stroke();
	//
	ctx.restore();
}

//LINHA PONTILHADA
function dashedline(x0,y0,width, stroke, colorStroke, rotation){
	var width; colorStroke; rotation;
	var passo = 5;
	var L = Math.abs(width)/10 - 1;
	
	ctx.save();
	ctx.translate(x0,y0);
	ctx.rotate(rotation*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-x0,-y0);
	//
	ctx.beginPath();
	for (i = 0; i <= L; i++){
		ctx.moveTo(x0 + 10*i, y0)
		ctx.lineTo (x0 + 10*i + passo, y0)
	}
	ctx.lineWidth = stroke;
	ctx.strokeStyle = colorStroke;
	ctx.stroke();
	//
	ctx.restore();
}

//TRANSFERIDOR
function transferidor(x0,y0,raio){
	var x0; y0; raio;
	var ang1 = 0
	var ang2 = 2*Math.PI;
	var d = 8;
	var rotacao = 0;
	var corlinha = '#576574';
	var corCirculo = 'rgba(100,100,100,0.07)';
	
	ctx.beginPath();
	ctx.moveTo(x0,y0);
	ctx.arc(x0, y0, raio, ang1, ang2, true);
	ctx.closePath();
	ctx.fillStyle= corCirculo;
	ctx.fill();
	ctx.lineWidth = 1.2;
	ctx.strokeStyle = corlinha;
	ctx.stroke();
	//
	for(var i = 1;i < 40; i++){
		ctx.save();
		ctx.translate(x0,y0);
		ctx.rotate(rotacao*Math.PI/180); // Entre com o valor em graus
		ctx.translate(-x0,-y0);
		//
		ctx.beginPath();
		ctx.moveTo(x0 + raio,y0);
		ctx.lineTo(x0 + raio - d, y0);
		ctx.lineWidth = 1;
		ctx.strokeStyle = corlinha;
		ctx.stroke();
		//
		ctx.restore();
		rotacao = rotacao - 10;
	}	
	
}

//TRANSFERIDOR 02
function transferidor2(x0,y0,raio){
	var x0; y0; raio;
	var ang1 = 0
	var ang2 = 2*Math.PI;
	var d = 5;
	var rotacao = 0;
	var corlinha = '#576574';
	var corCirculo = 'rgba(100,100,100,0.07)';
	
	ctx.beginPath();
	ctx.moveTo(x0,y0);
	ctx.arc(x0, y0, raio, ang1, ang2, true);
	ctx.closePath();
	ctx.fillStyle= corCirculo;
	ctx.fill();
	ctx.lineWidth = 1.5;
	ctx.strokeStyle = corlinha;
	ctx.stroke();
	//
	for(var i = 1;i < 40; i++){
		ctx.save();
		ctx.translate(x0,y0);
		ctx.rotate(rotacao*Math.PI/180); // Entre com o valor em graus
		ctx.translate(-x0,-y0);
		//
		ctx.beginPath();
		ctx.moveTo(x0 + raio,y0);
		ctx.lineTo(x0 + raio - d, y0);
		ctx.lineWidth = 1.5;
		ctx.strokeStyle = corlinha;
		ctx.stroke();
		//
		ctx.restore();
		rotacao = rotacao - 10;
	}	
	
}

//TRANSFERIDOR 90 GRAUS
function transferidor90(x0,y0,raio){
	var x0; y0; raio;
	var ang1 = 0
	var ang2 = -Math.PI/2;
	var d = 5;
	var rotacao = 0;
	var corlinha = '#576574';
	var corCirculo = 'rgba(100,100,100,0.07)';
	
	ctx.beginPath();
	ctx.moveTo(x0,y0);
	ctx.arc(x0, y0, raio, ang1, ang2, true);
	ctx.closePath();
	ctx.fillStyle= corCirculo;
	ctx.fill();
	ctx.lineWidth = 1.5;
	ctx.strokeStyle = corlinha;
	ctx.stroke();
	//
	for(var i = 1;i < 10; i++){
		ctx.save();
		ctx.translate(x0,y0);
		ctx.rotate(rotacao*Math.PI/180); // Entre com o valor em graus
		ctx.translate(-x0,-y0);
		//
		ctx.beginPath();
		ctx.moveTo(x0 + raio,y0);
		ctx.lineTo(x0 + raio - d, y0);
		ctx.lineWidth = 1.5;
		ctx.strokeStyle = corlinha;
		ctx.stroke();
		//
		ctx.restore();
		rotacao = rotacao - 10;
	}	
	
}

//LINHA PONTILHADA
function cutline(x0,y0,comprimento,rotacao, espessura, cor){
	var passo = 5;
	ctx.save();
	ctx.translate(x0,y0);
	ctx.rotate(rotacao*Math.PI/180); // Entre com o valor em graus		
	ctx.translate(-x0,-y0);
	//
	ctx.beginPath();
	for (i = 0; i<=comprimento / 10; i++){
		ctx.moveTo(x0 + 10*i, y0);
		ctx.lineTo (x0+10*i+passo, y0);
	}
	ctx.lineWidth = espessura;
	ctx.strokeStyle = cor;
	ctx.stroke();
	ctx.closePath();
	//
	ctx.restore();
}




/*
ctx.lineCap = "round";
ctx.lineJoin = "round";
*/


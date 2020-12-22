// Funções q fazem funcionar mas q geraldo n precisa mudar ent n precisa ver
class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}
}
function dx(a, b) { return Math.abs(a.x-b.x); }
function dy(a, b) { return Math.abs(a.y-b.y); }
function sq(a) {return a*a; }
function dist(a, b) { return sq(dx(a, b)) + sq(dy(a, b)); }
function realdist(a, b) { return Math.hypot(dx(a, b), dy(a, b));}

class Line {
	constructor(p1, p2) {
		this.p1 = p1;
		this.p2 = p2;
	}
	lenght() { return realdist(this.p1, this.p2); }
	dx() { return dx(this.p1, this.p2); }
	dy() { return dx(this.p1, this.p2); }
	ref_ang() { return 90-180*Math.asin(this.dx() / this.lenght())/Math.PI; }
}

class Ray {
	constructor(p1, ang, size) {
		this.p1 = p1;
		this.ang = ang;
		this.size = size;
	}
}

function find(y) {
	var l = mirror.c.x-mirror.rad; r = mirror.c.x; ans = -1;
	while(l <= r) {
		let m = (l+r) >> 1;
		let pt = new Point(m, y); d = dist(pt, mirror.c);
		if(d < sq(mirror.rad)) r = m-1;
		else l = m+1, ans = m;
	}
	return ans;
}

function upd() {
	for(var i = 0; i < n; i++) {
		target[i].x = find(target[i].y);
		ctr[i].p2 = target[i];
		source[i].p2 = target[i];
		reflected[i].p1 = target[i];
		reflected[i].ang = (center.y<=target[i].y?-1:1)*2*ctr[i].ref_ang() + (obj.y>=target[i].y?-1:1)*source[i].ref_ang();
	}
}

function angLinha(i) { return 180+(center.y<=target[i].y?-1:1)*ctr[i].ref_ang(); }

var now = 0;

function targetUP() {
	if(target[now].y <= mirror.c.y - mirror.width) return;
	target[now].y -= 5;
	desenhar();
}
function targetDOWN() {
	if(target[now].y >= mirror.c.y + mirror.width) return;
	target[now].y += 5;
	desenhar();
}

function down() { now += n - 1; now %= n; document.getElementById("qtd").innerHTML = now+1; }

function up() { ++now; now %= n; document.getElementById("qtd").innerHTML = now+1;}
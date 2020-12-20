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
	target.x = find(target.y);
	ctr.p2 = target;
	source.p2 = target;
	reflected.p1 = target;
	reflected.ang = (center.y<=target.y?-1:1)*2*ctr.ref_ang() + (obj.y>=target.y?-1:1)*source.ref_ang();
}

function angLinha() { return 180+(center.y<=target.y?-1:1)*ctr.ref_ang(); }

function targetUP() {
	if(target.y <= mirror.c.y - 120) return;
	target.y -= 5;
	desenhar();
}
function targetDOWN() {
	if(target.y >= mirror.c.y + 120) return;
	target.y += 5;
	desenhar();
}
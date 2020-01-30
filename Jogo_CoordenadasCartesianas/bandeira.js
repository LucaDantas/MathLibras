function flag(x, y, colorstem, colorflag, size){
    line(x, y, x, y - size, 1, colorstem);
    triangle(x, y - size + size/10, x, y - size + size/10 + size/3, x + size/2.5, y - size + size/10 + size/6, 0, colorflag, nocolor);
    circle(x, y - size, size/40, 0, colorstem, nocolor);
}
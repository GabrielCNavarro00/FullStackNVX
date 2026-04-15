let retangulo_1 = {
    h: 50,
    w: 50,
    x: 100,
    y: 40,
    color: "red" 
};

let retangulo_2 = {
    x: 100,
    y: 100,
    w: 50,
    h: 50,
    color: "blue"
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function desenhaRetangulo(ret){
    ctx.beginPath();
    ctx.lineWidt = 5;
    ctx.fillStyle = ret.color;
    ctx.fillRect(ret.x, ret.y, ret.w, ret.h);
    ctx.closePath()
}

desenhaRetangulo(retangulo_1)
desenhaRetangulo(retangulo_2)

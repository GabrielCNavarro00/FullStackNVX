
let retangulo_1 = {
    h: 50,
    w: 50,
    x: 100,
    y: 40,
    cor: "red" 
};

let retangulo_2 = {
    x: 100,
    y: 100,
    w: 50,
    h: 50,
    cor: "blue"
};

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

function desenhaRetangulo(ret){
    ctx.fillStyle = ret.cor;
    ctx.fillRect(ret.x, ret.y, ret.w, ret.h);
}

let mov = 2;

function desenhar(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (retangulo_1.x >= canvas.width - retangulo_1.w) {
        mov = -mov;
    }

    if (retangulo_1.x <= 0) {
        mov = -mov;
    }

    retangulo_1.x += mov;

    desenhaRetangulo(retangulo_1);
    desenhaRetangulo(retangulo_2);

    requestAnimationFrame(desenhar);
}

document.addEventListener("keydown", function(evento){
    var tecla = evento.key;
    var vel = 5;

    if (tecla == "ArrowUp")    retangulo_2.y -= vel;
    if (tecla == "ArrowDown")  retangulo_2.y += vel;
    if (tecla == "ArrowLeft")  retangulo_2.x -= vel;
    if (tecla == "ArrowRight") retangulo_2.x += vel;
});

desenhar();


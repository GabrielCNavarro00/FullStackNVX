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


let retangulo_3 = {
    x:200,
    y:200,
    w:50,
    h:50,
    cor: "green"
}
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
    desenhaRetangulo(retangulo_3);

    requestAnimationFrame(desenhar);
}

document.addEventListener("keydown", function(evento){
    var tecla = evento.key;
    var vel = 5;

    if (tecla == "ArrowUp" || tecla == "w")    {retangulo_2.y -= vel;}
    if (tecla == "ArrowDown" || tecla == "s")  {retangulo_2.y += vel;}
    if (tecla == "ArrowLeft" || tecla == "a")  {retangulo_2.x -= vel;}
    if (tecla == "ArrowRight" || tecla == "d") {retangulo_2.x += vel;}
});

desenhar();


document.addEventListener("mousemove", function(evento){
    var rect = canvas.getBoundingClientRect();
    var x_mouse  = evento.clientX - rect.left;
    var y_mouse = evento.clientY -rect.top;
    console.log(x_mouse, y_mouse)
});

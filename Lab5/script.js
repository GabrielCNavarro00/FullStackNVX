function retangulo(ctx, x, y, w, h, cor) {
  ctx.fillStyle = cor;
  ctx.fillRect(x, y, w, h);
}

function circulo(ctx, x, y, r, cor) {
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.fillStyle = cor;
  ctx.fill();
}

function linha(ctx, x1, y1, x2, y2, cor, largura = 2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = cor;
  ctx.lineWidth = largura;
  ctx.stroke();
}

function triangulo(ctx, x1, y1, x2, y2, x3, y3, cor) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  ctx.fillStyle = cor;
  ctx.fill();
}
//quadra
var quadra = document.getElementById("quadra")
const ctx = quadra.getContext("2d");

retangulo(ctx, 0, 0, 40, 40, "blue")
retangulo(ctx, 260, 0 , 40, 40, "red")
retangulo(ctx, 270, 240, 30, 30, "black" )
retangulo(ctx, 270, 270, 30, 30, "black" )
retangulo(ctx, 240, 270, 30, 30, "black" )
retangulo(ctx, 0, 240, 30, 30, "yellow" )
retangulo(ctx, 30, 270, 30, 30, "yellow" )
retangulo(ctx, 0, 270, 30, 30, "yellow" )
retangulo(ctx, 0, 120, 30, 30, "aquamarine")
retangulo(ctx, 0, 150, 30, 30, "aquamarine")
retangulo(ctx, 270, 130, 30, 30, "aquamarine")

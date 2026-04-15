
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


function desenharQuadra() {
  const canvas = document.getElementById("quadra");
  const ctx = canvas.getContext("2d");

  retangulo(ctx, 0, 0, 400, 400, "#ddd");

  ctx.strokeRect(20, 20, 360, 360);

  retangulo(ctx, 20, 20, 40, 40, "blue");
  retangulo(ctx, 340, 20, 40, 40, "red");
  retangulo(ctx, 20, 340, 40, 40, "yellow");
  retangulo(ctx, 340, 340, 40, 40, "black");

  retangulo(ctx, 180, 180, 40, 40, "red");

  linha(ctx, 200, 200, 60, 60, "blue");
  linha(ctx, 200, 200, 340, 60, "red");

  linha(ctx, 20, 200, 380, 200, "green");

  circulo(ctx, 200, 200, 15, "cyan");
}


function arvore(ctx, x, y) {
  retangulo(ctx, x - 10, y, 20, 50, "#7b4b1f");
  circulo(ctx, x, y, 30, "green");
}

function casa(ctx, x, y) {
  retangulo(ctx, x, y, 100, 100, "#8b4a1f");
  triangulo(ctx, x, y, x + 50, y - 50, x + 100, y, "#e76f51");
  retangulo(ctx, x + 40, y + 50, 20, 50, "#5a2d0c");
  retangulo(ctx, x + 10, y + 20, 25, 25, "#5dade2");
  retangulo(ctx, x + 65, y + 20, 25, 25, "#5dade2");
}

function desenharCasa() {
  const canvas = document.getElementById("casa");
  const ctx = canvas.getContext("2d");

  retangulo(ctx, 0, 0, 500, 400, "#8fd3b6");

  circulo(ctx, 400, 80, 50, "yellow");

  retangulo(ctx, 0, 300, 500, 100, "gray");

  casa(ctx, 200, 200);

  arvore(ctx, 100, 250);
  arvore(ctx, 400, 250);
}
desenharQuadra();
desenharCasa();
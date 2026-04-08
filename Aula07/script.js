let r1 = {
    x:10,
    y:10,
    w:50,
    h:50,
    color:'red'
};


let r2 = {
    x:100,
    y:100,
    l:50,
    h:50,
    cor:'blue'
};



let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.lineWidth = 3;
ctx.fillStyle = 'grey';
ctx.strokeStyle = 'white';
ctx.fillRect(10,10,50,50);
ctx.strokeRect(10,10,50,50);
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'grey';
ctx.strokeStyle = 'white';
ctx.moveTo(200,150);
ctx.lineTo(60,10);
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'grey';
ctx.strokeStyle = 'white';
ctx.arc(200,200,50,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'grey';
ctx.strokeStyle = 'white';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.fillText("Olá",200,350);
ctx.strokeText("Olá",200,350)
ctx.closePath();

let ex1 = document.getElementById('ex1');
let cc = ex1.getContext('2d')

cc.beginPath();
cc.lineWidth = 3;
cc.fillStyle = 'red';
cc.fillRect(0,0,50,50);
cc.closePath();

cc.beginPath();
cc.lineWidth = 3;
cc.fillStyle = 'blue';
cc.fillRect(350,0,50,50);
cc.closePath();

cc.beginPath();
cc.lineWidth = 3;
cc.fillStyle = 'yellow';
cc.fillRect(0,350,50,50);
cc.closePath();

cc.beginPath();
cc.lineWidth = 3;
cc.fillStyle = 'green';
cc.fillRect(350,350,50,50);
cc.closePath();


cc.beginPath();
cc.lineWidth = 2;
cc.fillStyle = 'white';
cc.strokeStyle = 'green';
cc.arc(200,210,50,0*Math.PI,1*Math.PI);
cc.fill();
cc.stroke();
cc.closePath();

cc.beginPath();
cc.lineWidth = 3;
cc.fillStyle = 'green';
cc.fillRect(0,210,600,2);
cc.closePath();

cc.beginPath();
cc.strokeStyle = "blue";
cc.lineWidth = 2
cc.moveTo(400, 0);    
cc.lineTo(0, 400);    
cc.stroke();

cc.beginPath();
cc.strokeStyle = "red";
cc.lineWidth = 2
cc.moveTo(0, 0);    
cc.lineTo(400, 400);    
cc.stroke();

cc.beginPath();
cc.fillStyle = "yellow";
cc.strokeStyle = "green";
cc.lineWidth = 2;

cc.arc(70, 150, 20, 0, Math.PI * 2);
cc.fill();
cc.stroke();

cc.beginPath();
cc.fillStyle = "yellow";
cc.strokeStyle = "green";
cc.lineWidth = 2;

cc.arc(330, 150, 20, 0, Math.PI * 2);
cc.fill();
cc.stroke();


cc.font = "24px Arial";
cc.fillStyle = "black";
cc.textAlign = "center";      
cc.textBaseline = "middle";   

cc.fillText("Desenvolvimento Web", 200, 50); 


let ex2 = document.getElementById('ex2');
let c = ex2.getContext('2d');

c.beginPath();
c.fillStyle = "yellow";
c.strokeStyle = "yellow";
c.lineWidth = 2;

c.arc(300, 120, 50, 0, Math.PI * 2);
c.fill();
c.stroke();
c.closePath()

c.beginPath();
c.lineWidth = 3;
c.fillStyle = 'grey';
c.fillRect(0,300,600,190);
c.closePath();

c.beginPath();
c.lineWidth = 3;
c.fillStyle = '#8b4513ff';
c.fillRect(160,200,100,100);
c.closePath();


c.beginPath();
c.moveTo(160, 200);   
c.lineTo(260, 200);   
c.lineTo(210, 150);
c.closePath();
c.fillStyle = 'brown';
c.fill();
c.strokeStyle = 'brown';
c.stroke();












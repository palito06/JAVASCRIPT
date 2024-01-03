
const canvas = document.querySelector("canvas");

const c = canvas.getContext("2d");

canvas.width = 1024
canvas.height = 576 ; 

c.fillStyle = "rgb(0,146,62";
c.fillRect(0,0 , canvas.width , canvas.height);

//amarelo
c.fillStyle = "rgb(248,193,0)"; // cor
//------( x , y );
c.beginPath(); // inicio de um pincel.
c.moveTo(226,288);
c.lineTo(512,115.2); // cima
c.lineTo(798,288);
c.lineTo(512,460.8); // baixo
c.fill();

//azul
c.fillStyle = "rgb(40,22,111)";
c.beginPath();
c.arc(512,288, 100 , 0 , 2 * 3.14); // comando para circulo.
c.fill();

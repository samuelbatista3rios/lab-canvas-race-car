window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
 
;
};

const ctx = canvas.getContext("2d");

//cor da estrada
ctx.fillStyle = "gray";
// Retângulo sólido
//           x    y  width height
ctx.fillRect(20, 10, 350, 610);

ctx.strokeStyle = "gray";

//risco verde esquerda

ctx.beginPath();

ctx.lineWidth = 20;
ctx.strokeStyle = "green";

ctx.moveTo(10, 10);

ctx.lineTo(10, 620);

ctx.stroke();

ctx.closePath();

//risco verde direita

ctx.beginPath();

ctx.lineWidth = 20;
ctx.strokeStyle = "green";

ctx.moveTo(380, 10);
ctx.lineTo(380, 620);
ctx.stroke();
ctx.closePath();

//risco branco esquerda
ctx.beginPath();

ctx.lineWidth = 10;
ctx.strokeStyle = "white";

ctx.moveTo(30, 10);
ctx.lineTo(30, 620);
ctx.stroke();
ctx.closePath();

//risco branco direita
ctx.beginPath();

ctx.lineWidth = 10;
ctx.strokeStyle = "white";

ctx.moveTo(360,10);
ctx.lineTo(360,620);
ctx.stroke();
ctx.closePath();

//listras do meio

ctx.lineWidth = 10;

ctx.strokeRect(200, 30, 1, 50);

ctx.lineWidth = 10;

ctx.strokeRect(200, 140, 1, 50);

ctx.lineWidth = 10;

ctx.strokeRect(200, 250, 1, 50);

ctx.lineWidth = 10;

ctx.strokeRect(200, 360, 1, 50);

ctx.lineWidth = 10;

ctx.strokeRect(200, 460, 1, 50);
ctx.lineWidth = 10;

ctx.strokeRect(200, 570, 1, 50);
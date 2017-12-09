

document.addEventListener('mousedown', dibujarMouse);
var cuadrito = document.getElementById('areaDeDibujo');
var papel = cuadrito.getContext('2d');

dibujarLinea('blue', 149, 149, 151, 151, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujarMouse() {
    console.log(dibujarMouse);
}
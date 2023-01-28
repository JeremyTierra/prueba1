const botonParar = document.querySelector('.botonParar');
const botonIniciar = document.querySelector('.botonIniciar');
const botonContinuar = document.querySelector('.botonContinuar');
const botonReversa = document.querySelector('.botonReversa');
const botonEnvioAceleracion = document.querySelector('.botonEnvioAceleracion');
const cambiarSegundos = document.querySelector('.cambiarSegundos');
const objeto = document.querySelector('.objeto');
const pista1 = document.querySelector('.pista1');
const pista2 = document.querySelector('.pista2');
const pista3 = document.querySelector('.pista3');
const divDibujar = document.querySelector('.divDibujo');
const divDatos = document.querySelector('.divDatos');
var canvas = document.querySelector(".canvas");
var ctx = canvas.getContext("2d");
var ctx2 = canvas.getContext("2d");
var ctx3 = canvas.getContext("2d");
var entradaAceleracion = "(.48,.22,.14,.68)";
var entradaTiempo = 3000;

ctx.beginPath();
ctx.moveTo(0, 225);
ctx.bezierCurveTo(312.5, -100, 937.5, 400, 1250, 175);


ctx.strokeStyle = "rgb(71, 71, 71)";

ctx.lineWidth = 80;
ctx.stroke();
ctx.lineWidth = 3000;
ctx.strokeStyle = "white";

let alturaDivDibujar = parseInt(window.getComputedStyle(divDibujar).getPropertyValue("height"));
let anchoDivDibujar = parseInt(window.getComputedStyle(divDibujar).getPropertyValue("width"));

let pistanum = 1;


elementStyle = window.getComputedStyle(objeto);




let altura = parseInt(elementStyle.getPropertyValue('top')) + 50;
objeto.style.top = `${altura}px`;


movimientoObjeto = new KeyframeEffect(
    objeto,
    [
        {
            top: `${altura}px`,
            left: "0px"
        },

        {
            top: `${(alturaDivDibujar / 4) + 50}px`
        },
        {
            top: `${(alturaDivDibujar / 2) + 50}px`,
            left: "50%"
        },
        {
            top: `${((alturaDivDibujar / 4) * 3) + 50}px`
        },

        {
            top: `${(alturaDivDibujar / 2) + 50}px`,
            left: `${1200}px`,
        }
    ],
    { duration: entradaTiempo, iterations: '100000000000', easing: `cubic-bezier${entradaAceleracion}` } // keyframe options
);

animacionmovimiento = new Animation(movimientoObjeto);

movimientoObjeto2 = new KeyframeEffect(
    objeto,
    [
        {
            top: `100px`,
            left: "0px"
        },

        {

        },
        {

        },
        {
            top: `365px`
        },

        {
            top: `${225}px`,
            left: `${1200}px`,
        }
    ],
    { duration: entradaTiempo, iterations: '100000000000', easing: `cubic-bezier${entradaAceleracion}` } // keyframe options
);
animacionmovimiento2 = new Animation(movimientoObjeto2);


movimientoObjeto3 = new KeyframeEffect(
    objeto,
    [
        {
            top: `200px`,
            left: "0px"
        },

        {
            top: `200px`,
            left: "1200px"
        }
    ],
    { duration: entradaTiempo, iterations: '100000000000', easing: `cubic-bezier${entradaAceleracion}` } // keyframe options
);
animacionmovimiento3 = new Animation(movimientoObjeto3);
vectores();


function vectores() {
    //ly
    ctx3.beginPath();
    ctx3.moveTo(0, 25);
    ctx3.lineTo(10, 25);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(0, 50);
    ctx3.lineTo(10, 50);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(0, 75);
    ctx3.lineTo(10, 75);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(0, 100);
    ctx3.lineTo(10, 100);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(0, 125);
    ctx3.lineTo(10, 125);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(0, 150);
    ctx3.lineTo(10, 150);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(0, 175);
    ctx3.lineTo(10, 175);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(0, 200);
    ctx3.lineTo(10, 200);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(0, 225);
    ctx3.lineTo(10, 225);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(0, 250);
    ctx3.lineTo(10, 250);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(0, 275);
    ctx3.lineTo(10, 275);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(0, 300);
    ctx3.lineTo(10, 300);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(0, 325);
    ctx3.lineTo(10, 325);
    ctx3.stroke();

    //lx
    ctx3.beginPath();
    ctx3.moveTo(25, 350);
    ctx3.lineTo(25, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(50, 350);
    ctx3.lineTo(50, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(75, 350);
    ctx3.lineTo(75, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(100, 350);
    ctx3.lineTo(100, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(125, 350);
    ctx3.lineTo(125, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(150, 350);
    ctx3.lineTo(150, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(175, 350);
    ctx3.lineTo(175, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(200, 350);
    ctx3.lineTo(200, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(225, 350);
    ctx3.lineTo(225, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(250, 350);
    ctx3.lineTo(250, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(275, 350);
    ctx3.lineTo(275, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(300, 350);
    ctx3.lineTo(300, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(325, 350);
    ctx3.lineTo(325, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(350, 350);
    ctx3.lineTo(350, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(375, 350);
    ctx3.lineTo(375, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(400, 350);
    ctx3.lineTo(400, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(425, 350);
    ctx3.lineTo(425, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(450, 350);
    ctx3.lineTo(450, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(475, 350);
    ctx3.lineTo(475, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(500, 350);
    ctx3.lineTo(500, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(525, 350);
    ctx3.lineTo(525, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(550, 350);
    ctx3.lineTo(550, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(575, 350);
    ctx3.lineTo(575, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(600, 350);
    ctx3.lineTo(600, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(625, 350);
    ctx3.lineTo(625, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(650, 350);
    ctx3.lineTo(650, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(675, 350);
    ctx3.lineTo(675, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(700, 350);
    ctx3.lineTo(700, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(725, 350);
    ctx3.lineTo(725, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(750, 350);
    ctx3.lineTo(750, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(775, 350);
    ctx3.lineTo(775, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(800, 350);
    ctx3.lineTo(800, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(825, 350);
    ctx3.lineTo(825, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(850, 350);
    ctx3.lineTo(850, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(875, 350);
    ctx3.lineTo(875, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(900, 350);
    ctx3.lineTo(900, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(925, 350);
    ctx3.lineTo(925, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(950, 350);
    ctx3.lineTo(950, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(975, 350);
    ctx3.lineTo(975, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(1000, 350);
    ctx3.lineTo(1000, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(1025, 350);
    ctx3.lineTo(1025, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(1050, 350);
    ctx3.lineTo(1050, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(1075, 350);
    ctx3.lineTo(1075, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(1100, 350);
    ctx3.lineTo(1100, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(1125, 350);
    ctx3.lineTo(1125, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(1150, 350);
    ctx3.lineTo(1150, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(1175, 350);
    ctx3.lineTo(1175, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(1200, 350);
    ctx3.lineTo(1200, 340);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.moveTo(1225, 350);
    ctx3.lineTo(1225, 340);
    ctx3.stroke();

    //
    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("1", 19, 330);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("2", 15, 305);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("3", 15, 280);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("4", 15, 255);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("5", 15, 230);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("6", 15, 205);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("7", 15, 180);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("8", 15, 155);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("9", 15, 130);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("10", 15, 105);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("11", 15, 80);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("11", 15, 55);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("12", 15, 30);
    ctx3.stroke();
    //
    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("2", 44, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("3", 69, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("4", 94, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("5", 119, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("6", 144, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("7", 169, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("8", 194, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("9", 219, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("10", 244, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("11", 269, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("12", 294, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("13", 319, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("14", 344, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("15", 369, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("16", 394, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("17", 419, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("18", 444, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("19", 469, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("20", 494, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("21", 519, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("22", 544, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("23", 569, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("24", 594, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("25", 619, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("26", 644, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("27", 669, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("28", 694, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("29", 719, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("30", 744, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("31", 769, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("32", 794, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("33", 819, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("34", 844, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("35", 869, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("36", 894, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("37", 919, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("38", 944, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("39", 969, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("40", 994, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("41", 1019, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("42", 1044, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("43", 1069, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("44", 1094, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("45", 1119, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("46", 1144, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("47", 1169, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("48", 1194, 335);
    ctx3.stroke();

    ctx3.beginPath();
    ctx3.fillStyle = "white";
    ctx3.font = "10px Arial";
    ctx3.fillText("49", 1219, 335);
    ctx3.stroke();

}


let i = 0;

let recta = 0;
botonParar.addEventListener('click', () => {

    let movimineto = 0;
    let altura1 = parseInt(elementStyle.getPropertyValue('top'));
    let izquierda1 = parseInt(elementStyle.getPropertyValue('left'));

    setTimeout(() => {
        let numero = elementStyle.getPropertyValue('top');
        objeto.style.setProperty("top", numero)
        objeto.style.left = elementStyle.getPropertyValue('left');
        let altura2 = parseInt(elementStyle.getPropertyValue('top'));
        let izquierda2 = parseInt(elementStyle.getPropertyValue('left'));
        let h;
        let x;

        if (i == 0) {

            ctx.beginPath();
            ctx.strokeStyle = "white";
            ctx.lineWidth = 3;
            if (pistanum == 1) {
                ctx.moveTo(0, 225);

                ctx.bezierCurveTo(312.5, -100, 937.5, 400, 1250, 175);

            } else if (pistanum == 2) {
                ctx.moveTo(0, 50);
                ctx.bezierCurveTo(312.5, 100, 937.5, 500, 1250, 175);

            } else if (pistanum == 3) {
                ctx.moveTo(0, 175);
                ctx.lineTo(canvas.width, 175);

            }
            ctx.stroke();
            i = 3;
        }




        if (recta != 1) {

            if (altura1 > altura2) {

                ctx.beginPath();
                ctx.stroke();
                ctx2.beginPath();
                ctx2.lineWidth = 3;

                ctx2.moveTo(izquierda1 - 50 + 25, (altura1 - 25) + 50);
                ctx2.lineTo(izquierda2 + 50 + 25, (altura2 - 25) - 50);
                ctx2.stroke();
                h = altura1 - altura2;
            }
            else if (altura1 < altura2) {

                ctx.moveTo(izquierda1 - 50 + 25, (altura1 - 25) - 50);
                ctx.lineTo(izquierda2 + 50 + 25, (altura2 - 25) + 50);
                ctx.stroke();
                h = altura2 - altura1;
            }


            if (izquierda1 > izquierda2) {

                x = altura1 - altura2;
            } else {
                x = altura2 - altura1;

            }
            movimiento = Math.sqrt((x * x) + (h * h)); /*hipotenusa*/

        }


        else {

            if (izquierda1 < izquierda2) {
                movimiento = izquierda2 - izquierda1;

            } else {
                movimiento = izquierda1 - izquierda2;
            }


        }


        divDatos.innerHTML = `Velocidad instantanea = ${movimiento / 100} px/ 0.1 sec`;

        if (pistanum == 1) {
            animacionmovimiento.pause();
        } else if (pistanum == 2) {
            animacionmovimiento2.pause();
        } else if (pistanum == 3) {
            animacionmovimiento3.pause();
        }

    }, 100);


})
botonIniciar.addEventListener('click', () => {

    if (pistanum == 1) {
        animacionmovimiento.cancel();
        objeto.style.top = `${altura}px`;
    } else if (pistanum == 2) {

        animacionmovimiento2.cancel();
        objeto.style.top = `${100}px`;
    }
    else if (pistanum == 3) {

        animacionmovimiento3.cancel();
        objeto.style.top = `${200}px`;
    }
    objeto.style.left = "0px";
})
botonReversa.addEventListener("click", () => {

    if (pistanum == 1) {
        animacionmovimiento.reverse();
    } else if (pistanum == 2) {

        animacionmovimiento2.reverse();
    }
    else if (pistanum == 3) {

        animacionmovimiento3.reverse();
    }
})
botonContinuar.addEventListener("click", () => {

    if (pistanum == 1) {
        animacionmovimiento.play();
    } else if (pistanum == 2) {

        animacionmovimiento2.play();
    }
    else if (pistanum == 3) {

        animacionmovimiento3.play();
    }




})

pista1.addEventListener('click', () => {
    animacionmovimiento3.cancel();
    animacionmovimiento2.cancel();
    pistanum = 1;
    objeto.style.top = `${altura}px`;
    objeto.style.left = "0px";


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, 225);
    ctx.bezierCurveTo(312.5, -100, 937.5, 400, 1250, 175);

    ctx.strokeStyle = "rgb(71, 71, 71)";

    ctx.lineWidth = 80;
    ctx.stroke();

    ctx.lineWidth = 80;
    ctx.stroke();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "white";

    vectores() //llamo la función vectores 


    i = 0;
    recta = 0;
})
pista2.addEventListener('click', () => {
    animacionmovimiento3.cancel();
    animacionmovimiento.cancel();
    pistanum = 2;
    objeto.style.top = "100px";
    objeto.style.left = "0px";


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, 50);
    ctx.bezierCurveTo(312.5, 100, 937.5, 500, 1250, 175);

    ctx.strokeStyle = "rgb(71, 71, 71)";

    ctx.lineWidth = 80;
    ctx.stroke();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "white";

    vectores() //llamo la función vectores 

    i = 0;
    recta = 0;
})
pista3.addEventListener('click', () => {
    animacionmovimiento.cancel();
    animacionmovimiento2.cancel();
    pistanum = 3;
    objeto.style.top = "200px";
    objeto.style.left = "0px";


    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(0, canvas.height / 2);
    ctx.lineTo(canvas.width, canvas.height / 2);


    ctx.strokeStyle = "rgb(71, 71, 71)";

    ctx.lineWidth = 80;
    ctx.stroke();
    ctx.lineWidth = 3;
    ctx.strokeStyle = "white";

    vectores() //llamo la función vectores 

    i = 0;
    recta = 1;

})




botonEnvioAceleracion.addEventListener('click', () => {
    event.preventDefault();
    entradaAceleracion = document.querySelector('.entradaAceleracion').value;
    crearAnimacion();


})
cambiarSegundos.addEventListener('click', () => {
    event.preventDefault();
    entradaTiempo = parseInt(document.querySelector('.entradaTiempo').value) * 1000;

    console.log(movimientoObjeto)


    crearAnimacion();



});

function crearAnimacion() {


    movimientoObjeto = new KeyframeEffect(
        objeto,
        [
            {
                top: `${altura}px`,
                left: "0px"
            },

            {
                top: `${(alturaDivDibujar / 4) + 50}px`
            },
            {
                top: `${(alturaDivDibujar / 2) + 50}px`,
                left: "50%"
            },
            {
                top: `${((alturaDivDibujar / 4) * 3) + 50}px`
            },

            {
                top: `${(alturaDivDibujar / 2) + 50}px`,
                left: `${1200}px`,
            }
        ],
        { duration: entradaTiempo, iterations: '100000000000', easing: `cubic-bezier${entradaAceleracion}` } // keyframe options
    );

    animacionmovimiento = new Animation(movimientoObjeto);

    movimientoObjeto2 = new KeyframeEffect(
        objeto,
        [
            {
                top: `100px`,
                left: "0px"
            },

            {

            },
            {

            },
            {
                top: `365px`
            },

            {
                top: `${225}px`,
                left: `${1200}px`,
            }
        ],
        { duration: entradaTiempo, iterations: '100000000000', easing: `cubic-bezier${entradaAceleracion}` } // keyframe options
    );
    animacionmovimiento2 = new Animation(movimientoObjeto2);


    movimientoObjeto3 = new KeyframeEffect(
        objeto,
        [
            {
                top: `200px`,
                left: "0px"
            },

            {
                top: `200px`,
                left: "1200px"
            }
        ],
        { duration: entradaTiempo, iterations: '100000000000', easing: `cubic-bezier${entradaAceleracion}` } // keyframe options
    );
    animacionmovimiento3 = new Animation(movimientoObjeto3);


}
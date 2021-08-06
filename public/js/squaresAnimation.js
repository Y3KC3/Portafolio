"use strict";

const typed = new Typed('.typed', {
    strings: [
        '<i class="animationText">Crea Tu Tienda Virtual</i>',
        '<i class="animationText">Agrega Tus Propias Animaciones</i>',
        '<i class="animationText">¿Quieres Una Aplicacion Web?</i>',
        '<i class="animationText">Todo Es Posible</i>'
    ],
    typeSpeed: 40, // Velocidad en mlisegundos para poner una letra,
    startDelay: 300, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
    backSpeed: 20, // Velocidad en milisegundos para borrrar una letra,
    shuffle: false, // Alterar el orden en el que escribe las palabras.
    backDelay: 2000, // Tiempo de espera despues de que termina de escribir una palabra.
    loop: true, // Repetir el array de strings
    loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
    showCursor: true, // Mostrar cursor palpitanto
    cursorChar: '|', // Caracter para el cursor
    contentType: 'html', // 'html' o 'null' para texto sin formato
});

const typedAnimation = document.querySelector('.animationTitle');
const square1 = document.querySelector('.square1');
const square2 = document.querySelector('.square2');
const square3 = document.querySelector('.square3');
const square4 = document.querySelector('.square4');
const square5 = document.querySelector('.square5');
const square6 = document.querySelector('.square6');
const square7 = document.querySelector('.square7');
const square8 = document.querySelector('.square8');
const square9 = document.querySelector('.square9');
const square10 = document.querySelector('.square10');
const square11 = document.querySelector('.square11');
const square12 = document.querySelector('.square12');
const square13 = document.querySelector('.square13');
const square14 = document.querySelector('.square14');
const square15 = document.querySelector('.square15');
const square16 = document.querySelector('.square16');

const startingAnimation = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (920 < scrollTop) {
        square1.style.animation = 'square1Animation 6s forwards';
        square2.style.animation = 'square2Animation 1.5s forwards';
        square3.style.animation = 'square3Animation 1.2s forwards';
        square4.style.animation = 'square4Animation 2s forwards';
        square5.style.animation = 'square5Animation 3s forwards';
        square6.style.animation = 'square6Animation 1.8s forwards';
        square7.style.animation = 'square7Animation 6s forwards';
        square8.style.animation = 'square8Animation 3.4s forwards';
        square9.style.animation = 'square9Animation 5.3s forwards';
        square10.style.animation = 'square10Animation 2s forwards';
        square11.style.animation = 'square11Animation 4.5s forwards';
        square12.style.animation = 'square12Animation 2.2s forwards';
        square13.style.animation = 'square13Animation 5s forwards';
        square14.style.animation = 'square14Animation 1s forwards';
        square15.style.animation = 'square15Animation 7.3s forwards';
        square16.style.animation = 'square16Animation 2.5s forwards';
        setTimeout(() => {
            typedAnimation.style.animation = 'opacity 1s forwards';
        }, 3000);
    };
    if (scrollTop > 930 && scrollTop < 1030) {
        square1.style.background = 'rgb(13, 156, 0)';
        square2.style.background = 'rgb(0, 110, 161)';
        square3.style.background = 'rgb(138, 73, 0)';
        square4.style.background = 'rgb(13, 156, 0)';
        square5.style.background = 'rgb(85, 0, 196)';
        square6.style.background = 'rgb(219, 0, 135)';
        square7.style.background = 'rgb(61, 0, 141)';
        square8.style.background = 'rgb(251, 255, 0)';
        square9.style.background = 'rgb(9, 112, 0)';
        square10.style.background = 'rgb(0, 174, 255)';
        square11.style.background = 'rgb(248, 132, 0)';
        square12.style.background = 'rgb(219, 0, 135)';
        square13.style.background = 'rgb(251, 255, 0)';
        square14.style.background = 'rgb(0, 110, 161)';
        square15.style.background = 'rgb(0, 174, 255)';
        square16.style.background = 'rgb(85, 0, 196)';
    } else {
        square1.style.background = 'rgb(8, 50, 112)';
        square2.style.background = 'rgb(0, 29, 73)';
        square3.style.background = 'rgb(45, 42, 216)';
        square4.style.background = 'rgb(22, 4, 177)';
        square5.style.background = 'rgb(0, 10, 29)';
        square6.style.background = 'rgb(48, 89, 151)';
        square7.style.background = 'rgb(41, 81, 167)';
        square8.style.background = 'rgb(0, 47, 85)';
        square9.style.background = 'rgb(35, 100, 197)';
        square10.style.background = 'rgb(15, 61, 131)';
        square11.style.background = 'rgb(75, 146, 253)';
        square12.style.background = 'rgb(21, 104, 228)';
        square13.style.background = 'rgb(0, 60, 151)';
        square14.style.background = 'rgb(2, 25, 59)';
        square15.style.background = 'rgb(96, 160, 255)';
        square16.style.background = 'rgb(0, 84, 105)';
    };
};

addEventListener('scroll', startingAnimation);
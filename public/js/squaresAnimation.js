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

const startingAnimation = () => {
    const scrollTop = document.documentElement.scrollTop;
    if (920 < scrollTop) {
        document.querySelector('.square1').style.animation = 'square1Animation 6s forwards';
        document.querySelector('.square2').style.animation = 'square2Animation 1.5s forwards';
        document.querySelector('.square3').style.animation = 'square3Animation 1.2s forwards';
        document.querySelector('.square4').style.animation = 'square4Animation 2s forwards';
        document.querySelector('.square5').style.animation = 'square5Animation 3s forwards';
        document.querySelector('.square6').style.animation = 'square6Animation 1.8s forwards';
        document.querySelector('.square7').style.animation = 'square7Animation 6s forwards';
        document.querySelector('.square8').style.animation = 'square8Animation 3.4s forwards';
        document.querySelector('.square9').style.animation = 'square9Animation 5.3s forwards';
        document.querySelector('.square10').style.animation = 'square10Animation 2s forwards';
        document.querySelector('.square11').style.animation = 'square11Animation 4.5s forwards';
        document.querySelector('.square12').style.animation = 'square12Animation 2.2s forwards';
        document.querySelector('.square13').style.animation = 'square13Animation 5s forwards';
        document.querySelector('.square14').style.animation = 'square14Animation 1s forwards';
        document.querySelector('.square15').style.animation = 'square15Animation 7.3s forwards';
        document.querySelector('.square16').style.animation = 'square16Animation 2.5s forwards';
        setTimeout(() => {
            document.querySelector('.animationTitle').style.animation = 'opacity 1s forwards';
        }, 3000);
    };
    if (scrollTop > 930 && scrollTop < 1030) {
        document.querySelector('.square1').style.background = 'rgb(13, 156, 0)';
        document.querySelector('.square2').style.background = 'rgb(0, 110, 161)';
        document.querySelector('.square3').style.background = 'rgb(138, 73, 0)';
        document.querySelector('.square4').style.background = 'rgb(13, 156, 0)';
        document.querySelector('.square5').style.background = 'rgb(85, 0, 196)';
        document.querySelector('.square6').style.background = 'rgb(219, 0, 135)';
        document.querySelector('.square7').style.background = 'rgb(61, 0, 141)';
        document.querySelector('.square8').style.background = 'rgb(251, 255, 0)';
        document.querySelector('.square9').style.background = 'rgb(9, 112, 0)';
        document.querySelector('.square10').style.background = 'rgb(0, 174, 255)';
        document.querySelector('.square11').style.background = 'rgb(248, 132, 0)';
        document.querySelector('.square12').style.background = 'rgb(219, 0, 135)';
        document.querySelector('.square13').style.background = 'rgb(251, 255, 0)';
        document.querySelector('.square14').style.background = 'rgb(0, 110, 161)';
        document.querySelector('.square15').style.background = 'rgb(0, 174, 255)';
        document.querySelector('.square16').style.background = 'rgb(85, 0, 196)';
    } else {
        document.querySelector('.square1').style.background = 'rgb(8, 50, 112)';
        document.querySelector('.square2').style.background = 'rgb(0, 29, 73)';
        document.querySelector('.square3').style.background = 'rgb(45, 42, 216)';
        document.querySelector('.square4').style.background = 'rgb(22, 4, 177)';
        document.querySelector('.square5').style.background = 'rgb(0, 10, 29)';
        document.querySelector('.square6').style.background = 'rgb(48, 89, 151)';
        document.querySelector('.square7').style.background = 'rgb(41, 81, 167)';
        document.querySelector('.square8').style.background = 'rgb(0, 47, 85)';
        document.querySelector('.square9').style.background = 'rgb(35, 100, 197)';
        document.querySelector('.square10').style.background = 'rgb(15, 61, 131)';
        document.querySelector('.square11').style.background = 'rgb(75, 146, 253)';
        document.querySelector('.square12').style.background = 'rgb(21, 104, 228)';
        document.querySelector('.square13').style.background = 'rgb(0, 60, 151)';
        document.querySelector('.square14').style.background = 'rgb(2, 25, 59)';
        document.querySelector('.square15').style.background = 'rgb(96, 160, 255)';
        document.querySelector('.square16').style.background = 'rgb(0, 84, 105)';
    };
};

addEventListener('scroll', startingAnimation);
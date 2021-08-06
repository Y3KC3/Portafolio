"use strict";

const userName = document.getElementById('userName');
const password = document.getElementById('password');
const eye = document.getElementById('eye');
const submitData = document.getElementById('submitData');
const fa_lock = document.querySelector('.fa-lock');
const selector = document.querySelector('.selector');
const userNameInput = 'unaPrueba';
const passwordInput = '123456';

password.addEventListener('keyup', e => {
    if (password.value.length > 0) {
        eye.style.display = 'block';
        fa_lock.style.margin = '0';
        password.style.margin = '0';
        selector.classList.add('containerPassword');
    } else {
        eye.style.display = 'none'
        fa_lock.style.margin = '0 5px';
        password.style.margin = '0 8.5px';
        selector.classList.remove('containerPassword');
    };
});

eye.addEventListener('click', () => {
    if (eye.classList.contains('fa-eye-slash')) {
        eye.classList.replace('fa-eye-slash', 'fa-eye');
        password.type = 'text';
    }
    else {
        eye.classList.replace('fa-eye', 'fa-eye-slash');
        password.type = 'password';
    };
});

submitData.addEventListener('click', () => {
    if (userName.value === userNameInput && password.value === passwordInput && !document.querySelector('#inputConfirmation p')) {
        showData(`El Login Funciona Correctamente <i class="far fa-check-square"></i>`, 'inputConfirmationSuccessful', 'inputConfirmationError');
    } else {
        if (!document.querySelector('#inputConfirmation p')) {
            showData(`No Coinciden Los Datos <i class="fas fa-exclamation-circle"></i>`, 'inputConfirmationError', 'inputConfirmationSuccessful');
        };
    };
});

const showData = (message, addClass, removeClass) => {
    const inputConfirmation = document.getElementById('inputConfirmation');
    inputConfirmation.classList.add(addClass);
    inputConfirmation.classList.remove(removeClass);
    inputConfirmation.style.animation = 'inputConfirmAmation 1s forwards';
    document.createDocumentFragment(inputConfirmation);
    const word = document.createElement('P');
    word.style.opacity = '0';

    setTimeout(() => {
        word.innerHTML = message;
        word.style.animation = 'opacity 1s forwards';
    }, 800);

    inputConfirmation.appendChild(word);

    setTimeout(() => {
        word.style.display = 'none';
        inputConfirmation.style.animation = 'removeInputConfirmAmation 1s forwards';
        setTimeout(() => {
            word.remove();
        }, 1200);
    }, 3000);
};
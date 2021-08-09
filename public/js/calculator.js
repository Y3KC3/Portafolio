"use strict";

const buttonsC = document.querySelectorAll('.buttonC');
var calculatorResults = document.getElementById('calculatorResults');

const showInTheCalculator = ref => {
    var value = ref.target.value;
    calculatorResults.textContent += value;
};

const resetCalculator = () => {
    calculatorResults.textContent = '';
};

const showResult = () => {
    try {
        calculatorResults.textContent = eval(calculatorResults.textContent);
    } catch (error) {
        calculatorResults.textContent = 'ERROR!';
        setTimeout(()=>{ resetCalculator() },500);
    };
};

buttonsC.forEach(button => button.addEventListener('click', showInTheCalculator));
const showResultbutton = document.getElementById('=').addEventListener('click', showResult);
const CE = document.getElementById('CE').addEventListener('click', resetCalculator);
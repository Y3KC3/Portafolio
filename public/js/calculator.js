"use strict";

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
        setTimeout(()=>{
            resetCalculator();
        },500);
    };
};

const number0 = document.getElementById('number0').addEventListener('click', showInTheCalculator);
const number1 = document.getElementById('number1').addEventListener('click', showInTheCalculator);
const number2 = document.getElementById('number2').addEventListener('click', showInTheCalculator);
const number3 = document.getElementById('number3').addEventListener('click', showInTheCalculator);
const number4 = document.getElementById('number4').addEventListener('click', showInTheCalculator);
const number5 = document.getElementById('number5').addEventListener('click', showInTheCalculator);
const number6 = document.getElementById('number6').addEventListener('click', showInTheCalculator);
const number7 = document.getElementById('number7').addEventListener('click', showInTheCalculator);
const number8 = document.getElementById('number8').addEventListener('click', showInTheCalculator);
const number9 = document.getElementById('number9').addEventListener('click', showInTheCalculator);
const signs1 = document.getElementById('(').addEventListener('click', showInTheCalculator);
const signs2 = document.getElementById(')').addEventListener('click', showInTheCalculator);
const signs3 = document.getElementById('%').addEventListener('click', showInTheCalculator);
const signs4 = document.getElementById('/').addEventListener('click', showInTheCalculator);
const signs5 = document.getElementById('*').addEventListener('click', showInTheCalculator);
const signs6 = document.getElementById('-').addEventListener('click', showInTheCalculator);
const signs7 = document.getElementById('.').addEventListener('click', showInTheCalculator);
const signs8 = document.getElementById('+').addEventListener('click', showInTheCalculator);
const showResultbutton = document.getElementById('=').addEventListener('click', showResult);
const CE = document.getElementById('CE').addEventListener('click', resetCalculator);
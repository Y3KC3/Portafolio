const shoesStore = document.querySelector('.shoesStore');
const shirtsStore = document.querySelector('.shirtsStore');
const makeupStore = document.querySelector('.makeupStore');

const sizes = document.querySelectorAll('.size');
const colors = document.querySelectorAll('.color');
const shoes = document.querySelectorAll('.shoes');
const gradients = document.querySelectorAll('.backgroundShoesGradient');
const articles = document.querySelectorAll('.article');
const shirtsColors = document.querySelectorAll('.colorShirt'); 
const shirtsSizes = document.querySelectorAll('.sizeShirt');
const gradientsShirts = document.querySelectorAll('.backgroundShirtGradient');
const shirts = document.querySelectorAll('.shirt');
const makeupColors = document.querySelectorAll('.colorMakeup');

const buttonShirt = document.getElementById('shirtButton');
const buttonShoe = document.getElementById('shoeButton');
const buttonMakeup = document.getElementById('makeupButton');

let preventColor = 'blue';
let shirtPreventColor = 'white';
let animationEnd = true;

let shoeSaveColor = '#2175f5';
let shirtSaveColor = '#888';
let makeupSaveColor = '#777';

let preventStore = shoesStore;
let animationResult = true;

const startStoreAnimation = objective => {
    preventStore.style.animation = '1.5s out ease';
    setTimeout(() => {
        preventStore.style.display = 'none';
        preventStore.style.animation = 'none';
    },500);
    setTimeout(() => {
        objective.style.display = 'flex';
        objective.style.animation = '1.5s entry ease';
        return true;
    },500);
};

buttonShirt.addEventListener('click', () => {
    if (preventStore == shirtsStore || !animationResult == true) return;
    document.documentElement.style.setProperty('--primary', shirtSaveColor);
    animationResult = false;
    startStoreAnimation(shirtsStore);
    setTimeout(()=>{ animationResult = true },1000);
    setTimeout(()=>{ preventStore = shirtsStore; },1000);
});

buttonShoe.addEventListener('click', () => {
    if (preventStore == shoesStore || !animationResult == true) return;
    document.documentElement.style.setProperty('--primary', shoeSaveColor);
    animationResult = false;
    startStoreAnimation(shoesStore);
    setTimeout(()=>{ animationResult = true },1000);
    setTimeout(()=>{ preventStore = shoesStore; },1000);
});

buttonMakeup.addEventListener('click', () => {
    if (preventStore == makeupStore || !animationResult == true) return;
    document.documentElement.style.setProperty('--primary', makeupSaveColor);
    animationResult = false;
    startStoreAnimation(makeupStore);
    setTimeout(()=>{ animationResult = true },1000);
    setTimeout(()=>{ preventStore = makeupStore;},1000);
});

function changeArticle (){
    articles.forEach(article => article.classList.remove('articleActive'));
    this.classList.add('articleActive');
};

function changeSize (){
    sizes.forEach(size => size.classList.remove('activeSize'));
    this.classList.add('activeSize');
};

function changeColor (){
    if (!animationEnd) return;
    let primary = this.getAttribute('primary');
    let color = this.getAttribute('color');
    let shoe = document.querySelector(`.shoes[color="${color}"]`);
    let gradient = document.querySelector(`.backgroundShoesGradient[color="${color}"]`);
    let preventGradient = document.querySelector(`.backgroundShoesGradient[color="${preventColor}"]`);

    if (!gradient.classList.contains('firstGradient')) animationEnd = false;

    colors.forEach(color => color.classList.remove('activeColor'));
    this.classList.add('activeColor');

    document.documentElement.style.setProperty('--primary', primary);

    shoes.forEach(shoe => shoe.classList.remove('showShoes'));
    shoe.classList.add('showShoes');

    gradients.forEach(gradient => gradient.classList.remove('firstGradient', 'secondGradient'));
    gradient.classList.add('firstGradient');
    preventGradient.classList.add('secondGradient');

    preventColor = color;
    shoeSaveColor = primary;

    gradient.addEventListener('animationend', () => { animationEnd = true });
};

function shirtChangeColor (){
    if (!animationEnd) return;
    let primaryShirt = this.getAttribute('primary');
    let shirtColor = this.getAttribute('color');
    let shirt = document.querySelector(`.shirt[color="${shirtColor}"]`);
    let shirtGradient = document.querySelector(`.backgroundShirtGradient[color="${shirtColor}"]`);
    let shirtPreventGradient = document.querySelector(`.backgroundShirtGradient[color="${shirtPreventColor}"]`);

    if (!shirtGradient.classList.contains('firstGradient')) animationEnd = false;

    shirtsColors.forEach(shirtColor => shirtColor.classList.remove('activeColor'));
    this.classList.add('activeColor');

    document.documentElement.style.setProperty('--primary', primaryShirt);

    shirts.forEach(shirt => shirt.classList.remove('showShirt'));
    shirt.classList.add('showShirt');

    gradientsShirts.forEach(gradientShirt => gradientShirt.classList.remove('firstGradient', 'secondGradient'));
    shirtGradient.classList.add('firstGradient');
    shirtPreventGradient.classList.add('secondGradient');

    shirtPreventColor = shirtColor;
    shirtSaveColor = primaryShirt;

    shirtGradient.addEventListener('animationend', () => { animationEnd = true });
};

function shirtChangeSize (){
    shirtsSizes.forEach(shirtSize => shirtSize.classList.remove('activeSize'));
    this.classList.add('activeSize');
};

function makeupChangeColor (){
    let primaryMakeup = this.getAttribute('primary');
    
    makeupColors.forEach(makeupColor => makeupColor.classList.remove('activeColor'));
    this.classList.add('activeColor');

    document.documentElement.style.setProperty('--primary', primaryMakeup);
    makeupSaveColor = primaryMakeup;
};

sizes.forEach(size => size.addEventListener('click', changeSize));
colors.forEach(color => color.addEventListener('click', changeColor));
articles.forEach(article => article.addEventListener('click', changeArticle));
shirtsColors.forEach(shirtColor => shirtColor.addEventListener('click', shirtChangeColor));
shirtsSizes.forEach(shirtSize => shirtSize.addEventListener('click', shirtChangeSize));
makeupColors.forEach(makeupcolor => makeupcolor.addEventListener('click', makeupChangeColor));
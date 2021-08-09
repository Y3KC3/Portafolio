"use strict";

arrowRight.addEventListener('click', () => {
    const addTitle = document.querySelector('.title');
    const addDecription = document.querySelector('.description');
    const addContainerBotton1 = document.querySelector('.containerButtons');
    const addContainerBotton2 = document.querySelector('.containerButtons2');
    const addImage = document.querySelector('.mainImage');
    const intermediate = document.querySelector('.intermediate');
    intermediate.style.transform = 'translate(-3000px, -1500px)';
    document.querySelector('body').style.overflow = 'hidden';
    setTimeout(() => { document.querySelector('.backgroundRight').classList.replace('backgroundRight', 'background') },1800);
    setTimeout(() => { scroll(0, 0) },1700);
    setTimeout(() => { arrowRight.style.transform = 'translateX(2000px)' },650);
    setTimeout(() => { document.querySelector('.containerPresentationRight').style.transform = 'translateX(2000px)' },450);
    setTimeout(() => { document.querySelector('.containerPresentationRight2').style.transform = 'translateX(2000px)' },350);
    setTimeout(() => { document.querySelector('.secondPart').style.transform = 'translateX(2000px)'},250);
    setTimeout(() => { addTitle.style.animation = 'eliminateTheFirstTransition 1.5s forwards' },2000);
    setTimeout(() => { addDecription.style.animation = 'eliminateTheFirstTransition 1.5s forwards' },1800);
    setTimeout(() => { addContainerBotton1.style.animation = 'eliminateTheFirstTransition 1.5s forwards' },1500);
    setTimeout(() => { addContainerBotton2.style.animation = 'eliminateTheFirstTransition 1.5s forwards' },1500);
    setTimeout(() => { addImage.style.animation = 'eliminateTheFirstTransition 1.5s forwards' },1300);
    setTimeout(() => { arrowLeft.style.animation = 'eliminateTheFirstTransition 1.5s forwards' }, 1000);
    setTimeout(() => { addImage.style.animation = '' },3000);
});

arrowUp.addEventListener('click', ()=>{
    scroll(0,0);
    descriptionVisibilityValidation = true;
    document.querySelector('.secondPart').style.display = 'none';
    document.querySelector('.nightMode').style.display = 'none';
    document.querySelector('.unifying').style.display = 'none';
    document.querySelector('.storePosition').style.display = 'none';
    intermediate.style.display = 'flex';
    intermediate.style.transform = 'translateY(2000px)';
    arrowUp.style.transform = 'translateY(-2000px)';
    setTimeout(()=>{ document.querySelector('.containerPresentationRight').style.transform = 'translateY(-2000px)' },300);
    setTimeout(()=>{ document.querySelector('.containerPresentationRight2').style.transform = 'translateY(-2000px)' },700);
    setTimeout(()=>{ intermediate.style.transform = 'translateY(-3700px)' },1000);
    setTimeout(() => { document.querySelector('.backgroundRight').classList.replace('backgroundRight', 'background') },2500);
    setTimeout(() => {
        document.querySelector('.partLeft').style.backgroundImage = '';
        document.querySelector('.partLeft').style.padding = '';
    },2200);
    setTimeout(() => { removeTitle.style.display = 'block'; removeTitle.style.animation = 'firstTransitionForMobiles 3s reverse' },500);
    setTimeout(() => { removeDecription.style.display = 'block'; removeDecription.style.animation = 'firstTransitionForMobiles 3s reverse' }, 1200);
    setTimeout(() => { removeContainerBotton1.style.display = 'flex'; removeContainerBotton1.style.animation = 'firstTransitionForMobiles 3s reverse' },1700);
    setTimeout(() => { removeImage.style.display = 'block'; removeImage.style.animation = 'firstTransitionForMobiles 3s reverse' },2200);
    setTimeout(() => { removeContainerBotton2.style.display = 'flex'; removeContainerBotton2.style.animation = 'firstTransitionForMobiles 3s reverse' },2800);
    setTimeout(() => { arrowDown.style.display = 'block'; arrowDown.style.animation = 'firstTransitionForMobiles 3s reverse' },3400);
    setTimeout(() => { intermediate.style.display = 'none' },4000);
    setTimeout(()=>{
        arrowDown.style.animation = '';
        removeContainerBotton2.style.animation = '';
        removeImage.style.animation = '';
        removeContainerBotton1.style.animation = '';
        removeDecription.style.animation = '';
        removeTitle.style.animation = '';
        arrowUp.style.display = 'none';
        document.querySelector('.containerPresentationRight').style.display = 'none';
        document.querySelector('.containerPresentationRight2').style.display = 'none';
        descriptionVisibilityValidation = false;    
    },6400);
});
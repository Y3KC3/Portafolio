"use strict";

const removeTitle = document.querySelector('.title');
const removeDecription = document.querySelector('.description');
const removeContainerBotton1 = document.querySelector('.containerButtons');
const removeContainerBotton2 = document.querySelector('.containerButtons2');
const removeImage = document.querySelector('.mainImage');
const intermediate = document.querySelector('.intermediate');

let screenW = screen.width;
let descriptionVisibilityValidation = false;

setInterval(()=>{
    screenW = screen.width;
    if (screenW > 1024) {
        if (document.querySelector('body').classList.contains('background')){
            document.querySelector('*').style.overflow = 'hidden';
            arrowDown.style.display = 'none';
            arrowLeft.style.display = 'block';
            scroll(0,0);
        } else {
            if (document.querySelector('body').classList.contains('backgroundRight')){
                arrowUp.style.display = 'none';
                arrowRight.style.display = 'block';
            };
            document.querySelector('*').style.overflowY = 'auto';
        };
    } else {
        if (document.querySelector('body').classList.contains('background')){
            arrowDown.style.display = 'block';
            arrowLeft.style.display = 'none';
        } else {
            arrowUp.style.display = 'block';
            arrowRight.style.display = 'none';
        };
        if (descriptionVisibilityValidation) {
            scroll(0,0);
            document.querySelector('*').style.overflow = 'hidden';
        } else if (screenW < 1024 && !descriptionVisibilityValidation) {
            document.querySelector('*').style.overflowY = 'auto';
        };
    };

    for (let i = 0; i < exitBackgroundLeft.length; i++) {
        if (screenW > 1024) {
            const disappear = 'disappear 0.6s forwards';
            const disappear2 = 'disappear2 0.6s forwards';
            const disappear3 = 'disappear3 0.6s forwards';
            const disappear4 = 'disappear4 0.6s forwards';
            const disappear5 = 'disappear5 0.6s forwards';
            exitBackgroundLeft[i].addEventListener('click', e => {
                if (i === 0) removeVisible(e, disappear);
                if (i === 1) removeVisible(e, disappear2);
                if (i === 2) removeVisible(e, disappear3);
                if (i === 3) removeVisible(e, disappear4);
                if (i === 4) removeVisible(e, disappear5);
            });
        } else {
            const disappearInMobiles = 'disappearInMobiles 0.6s forwards';
            exitBackgroundLeft.forEach(button => button.addEventListener('click', e => { 
                removeVisible(e,disappearInMobiles);
                body.style.overflow = 'auto';
            }));
        };
    };
    
    if (screenW > 1024) {
        skills.addEventListener('click', () => {
            makeVisible('.opt', 'appear 0.6s forwards');
        });
        
        projects.addEventListener('click', () => {
            makeVisible('.opt2', 'appear2 0.6s forwards');
        });
        
        contact.addEventListener('click', () => {
            makeVisible('.opt3', 'appear3 0.6s forwards');
        });
        
        favoriteTechnologies.addEventListener('click', () => {
            makeVisible('.opt4', 'appear4 0.6s forwards');
        });
        
        moreAboutMe.addEventListener('click', () => {
            makeVisible('.opt5', 'appear5 0.6s forwards');
        });
    } else {
        skills.addEventListener('click', () => {
            makeVisible('.opt', 'appearInMobiles .6s forwards');
            body.style.overflow = 'hidden';
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        projects.addEventListener('click', () => {
            makeVisible('.opt2', 'appearInMobiles .6s forwards');
            body.style.overflow = 'hidden';
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        contact.addEventListener('click', () => {
            makeVisible('.opt3', 'appearInMobiles .6s forwards');
            body.style.overflow = 'hidden';
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        favoriteTechnologies.addEventListener('click', () => {
            makeVisible('.opt4', 'appearInMobiles .6s forwards');
            body.style.overflow = 'hidden';
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        moreAboutMe.addEventListener('click', () => {
            makeVisible('.opt5', 'appearInMobiles .6s forwards');
            body.style.overflow = 'hidden';
            window.scroll({
                top: 0,
                behavior: 'smooth'
            });
        });
    };
},100);

addEventListener('scroll', () => {
    if (screenW > 1024) {
        if (document.querySelector('body').classList.contains('background')) {
            if (window.scrollY >= 0 || window.scrollX >= 0) {
                scroll(0, 0);
            };
        } else {
            if (window.scrollX >= 0) {
                scroll({left: 0});
            };
        };
    };
});

arrowLeft.addEventListener('click', () => {
    for (let i = 0; i <= 5; i++) {
        setTimeout(() => {
            if (i == 0) removeTitle.style.animation = 'firstTransition 1.5s forwards';
        }, 200);
        setTimeout(() => {
            if (i == 1) removeDecription.style.animation = 'firstTransition 1.5s forwards';
        }, 800);
        setTimeout(() => {
            if (i == 2) removeContainerBotton1.style.animation = 'firstTransition 1.5s forwards';
        }, 1000);
        setTimeout(() => {
            if (i == 3) removeContainerBotton2.style.animation = 'firstTransition 1.5s forwards';
        }, 1000);
        setTimeout(() => {
            if (i == 4) removeImage.style.animation = 'firstTransition 1.5s forwards';
        }, 1200);
        setTimeout(() => {
            if (i == 5) arrowLeft.style.animation = 'firstTransition 1.5s forwards';
        }, 1400);
    };
    setTimeout(() => {
        intermediate.style.transform = 'translate(3000px, -1500px)';
    }, 1600);
    setTimeout(() => {
        document.querySelector('.background').classList.replace('background', 'backgroundRight');
    }, 2500);
    setTimeout(() => {
        arrowRight.style.transform = 'translateX(0)';
    }, 2000);
    setTimeout(() => {
        document.querySelector('.containerPresentationRight').style.transform = 'translateX(0)';
    }, 2250);
    setTimeout(() => {
        document.querySelector('.containerPresentationRight2').style.transform = 'translateX(0)';
    }, 2350);
    setTimeout(() => {
        document.querySelector('.secondPart').style.transform = 'translateX(0)';
    }, 2400);
    setTimeout(() => {
        body.style.overflowY = 'auto';
    }, 4600);
});

arrowDown.addEventListener('click', ()=>{
    window.scroll({
        top: 0,
        behavior: 'smooth'
    });
    descriptionVisibilityValidation = true;
    arrowUp.style.display = 'block';
    document.querySelector('.containerPresentationRight').style.display = 'flex';
    document.querySelector('.containerPresentationRight2').style.display = 'flex';
    document.querySelector('.secondPart').style.display = 'block';
    document.querySelector('.nightMode').style.display = 'block';
    intermediate.style.display = 'flex';
    intermediate.style.transform = 'translateY(-3000px)';
    document.querySelector('.unifying').style.display = 'block';
    document.querySelector('.storePosition').style.display = 'block';
    for (let i = 0; i <= 5; i++) {
        setTimeout(() => {
            if (i == 0) removeTitle.style.animation = 'firstTransitionForMobiles 1.5s forwards';
        }, 700);
        setTimeout(() => {
            if (i == 1) removeDecription.style.animation = 'firstTransitionForMobiles 1.5s forwards';
        }, 800);
        setTimeout(() => {
            if (i == 2) removeContainerBotton1.style.animation = 'firstTransitionForMobiles 1.5s forwards';
        }, 1200);
        setTimeout(() => {
            if (i == 3) removeContainerBotton2.style.animation = 'firstTransitionForMobiles 1.5s forwards';
        }, 1400);
        setTimeout(() => {
            if (i == 4) removeImage.style.animation = 'firstTransitionForMobiles 1.5s forwards';
        }, 1300);
        setTimeout(() => {
            if (i == 5) arrowDown.style.animation = 'firstTransitionForMobiles 1.5s forwards';
        }, 1700);
    };
    setTimeout(() => {
        intermediate.style.transform = 'translateY(2000px)';
    }, 1500);
    setTimeout(() => {
        document.querySelector('.background').classList.replace('background', 'backgroundRight');
    }, 2500);

    setTimeout(() => {
        document.querySelector('.partLeft').style.backgroundImage = 'none';
        document.querySelector('.partLeft').style.padding = '0';
    }, 2250);
    setTimeout(() => {
        document.querySelector('.secondPart').style.transform = 'translateX(0)';
    }, 2400);
    setTimeout(()=>{
        removeTitle.style.display = 'none';
        removeDecription.style.display = 'none';
        removeContainerBotton1.style.display = 'none';
        removeContainerBotton2.style.display = 'none';
        arrowDown.style.display = 'none';
        removeImage.style.display = 'none';
        intermediate.style.display = 'none';
    },4000);
    setTimeout(()=>{
        arrowUp.style.transform = 'translateX(0)';
    },4000);
    setTimeout(()=>{
        document.querySelector('.containerPresentationRight').style.transform = 'translateX(0)';
    },4200);
    setTimeout(() => {
        document.querySelector('.containerPresentationRight2').style.transform = 'translateX(0)';
    }, 4600);
    setTimeout(()=>{
        descriptionVisibilityValidation = false;
    },6000);
});

const makeVisible = (opt, ani) => {
    const box = document.querySelector(opt);
    visibleContent.classList.replace('invisibleContent', 'visibleContent');
    visibleContent.style.animation = 'opacityVisibleContent 1s forwards';
    box.classList.replace('invisible', 'visible');
    box.style.animation = ani;
    arrowLeft.style.animation = 'removeOpacity .3s forwards';
    descriptionVisibilityValidation = true;
    for (let i = 0; i < invisibleContent.length; i++) {
        setTimeout(() => {
            invisibleContent[i].classList.replace('display-none', 'display-block');
        }, 500);
    };
};

const removeVisible = (e, ani) => {
    const visible = e.path[3];
    visible.style.animation = ani;
    visibleContent.style.animation = 'removeOpacityVisibleContent 1s forwards';
    arrowLeft.style.animation = 'opacity .4s forwards';
    descriptionVisibilityValidation = false;
    setTimeout(() => {
        visibleContent.classList.replace('visibleContent', 'invisibleContent');
        visible.classList.replace('visible', 'invisible');
        visible.style.animation = '';
    }, 600);
    for (let i = 0; i < invisibleContent.length; i++) {
        setTimeout(() => {
            invisibleContent[i].classList.replace('display-block', 'display-none');
        }, 50);
    };
};
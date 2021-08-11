"use strict";

const shareButtons = document.querySelectorAll('.active-share');
const shareLink = document.querySelector('.shareLink');
const shareExit = document.querySelector('.shareExit');

var animationInProgress = false;

const showShare = () => {
    if (!animationInProgress) {
        scrollYHidden = true;
        invisibleContent2.classList.remove('d-none');
        invisibleContent2.style.animation = 'opacityVisibleContent 1s forwards';
        shareLink.style.transform = 'translateY(0)';
        animationInProgress = true;
    };
};

shareButtons.forEach(shareButton => shareButton.addEventListener('click',showShare));

shareExit.addEventListener('click', () => {
    scrollYHidden = false;
    document.querySelector('*').style.overflowY = 'auto';
    shareLink.style.transform = 'translateY(-100px)';
    invisibleContent2.style.animation = 'removeOpacityVisibleContent 1s forwards';
    setTimeout(()=>{ invisibleContent2.classList.add('d-none'); animationInProgress = false },1500)
});

setInterval(()=>{
    if (screen.width < 650) { 
        invisibleContent2.addEventListener('click', () => { 
            if (animationInProgress){
                shareLink.style.transform = 'translateY(1000px)';
                invisibleContent2.style.animation = 'removeOpacityVisibleContent 1s forwards';
                setTimeout(()=>{ invisibleContent2.classList.add('d-none') },1000);
                setTimeout(()=>{ animationInProgress = false },1500);
            };
        });
    };
},10);
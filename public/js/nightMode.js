const nightModeBackground = document.getElementById('nightModeBackground');
const nightModeCircle = document.getElementById('nightModeCircle');
const sun = document.getElementById('sun');
const moon = document.getElementById('moon');
const unifying = document.getElementById('unifying');
const presentationRightButtons = document.querySelectorAll('.reactions div button');
const h1OfThePresentatioRight = document.querySelectorAll('.results div h1');
const inputs = document.querySelectorAll('.inputGroup');
const inputIcons = document.querySelectorAll('.inputGroup i');
const timerDivider = document.querySelectorAll('.timeCycleIcons');
const dateP = document.querySelectorAll('.date p');
const clockP = document.querySelectorAll('.clock p');
const secondsBoxP = document.querySelectorAll('.secondsBox p');
const stopwatchIconButton = document.querySelectorAll('.stopwatchButtonContainer button i');
const buttonOfTimer = document.querySelectorAll('.timerButtonContainer button');
const timerOptionsWords = document.querySelectorAll('.optionsUnion div h3'); 
const timerButtonsOptions = document.querySelectorAll('.buttonsOptions button');

let nightModeValidation = false;

nightModeBackground.addEventListener('click', () => {
    if (!nightModeValidation) {
        arrowUp.style.display = 'none';
        arrowRight.style.display = 'none';
        nightModeCircle.style.transform = 'translateX(40px)';
        document.querySelector('body').classList.replace('backgroundRight','backgroundNightMode');
        document.getElementById('containerPresentationRight').style.background = 'linear-gradient(127deg, rgba(40,75,101,1) 7%, rgba(46,86,117,1) 33%)'
        document.querySelector('.reactions h2').style.color = "#fff";
        presentationRightButtons.forEach(button => button.style.background = 'rgb(0, 69, 109)');
        h1OfThePresentatioRight.forEach(h1 => h1.style.color = '#fff');
        document.getElementById('containerPresentationRight2').style.background = 'linear-gradient(127deg, rgba(40,75,101,1) 7%, rgba(46,86,117,1) 33%)';
        document.querySelector('.introduction2 h2').style.color = '#fff';
        document.querySelector('.introduction2 p').style.color = '#fff';
        document.getElementById('secondPart').style.background = 'linear-gradient(127deg, rgba(40,75,101,1) 7%, rgba(46,86,117,1) 33%)';
        document.querySelector('.loginFormTitle').style.color = '#fff';
        inputs.forEach(input => input.style.background = 'rgb(37, 68, 92)')
        inputIcons.forEach(icon => icon.style.color = '#fff');
        document.getElementById('userName').style.color = '#fff';
        document.getElementById('password').style.color = '#fff';
        document.getElementById('submitData').style.background = 'rgb(0,69,109)';
        document.querySelector('.loginDescription h1').style.color = '#fff';
        document.querySelector('.loginDescription p').style.color = '#fff';
        document.querySelector('.timeCycle').style.background = 'linear-gradient(127deg, rgba(40,75,101,1) 7%, rgba(46,86,117,1) 33%)';
        document.querySelector('.TimeCycledescriptionContainer h1').style.color ='#fff';
        document.querySelector('.TimeCycledescriptionContainer p').style.color ='#fff';
        timerDivider.forEach(timerIcon => {
            timerIcon.style.color = '#fff';
            timerIcon.style.border = '1px solid #fff';
        });
        dateP.forEach(p => p.style.color = '#fff');
        clockP.forEach(p => p.style.color = '#fff');
        secondsBoxP.forEach(p => p.style.color = '#fff');
        document.getElementById('time').style.color = '#fff';
        stopwatchIconButton.forEach(icon => icon.style.color = '#fff');
        document.getElementById('timer').style.color = '#fff';
        buttonOfTimer.forEach(button => {
            button.style.background = 'rgb(0, 69, 109)';
            button.style.color = '#fff';
        });
        document.querySelector('.timerOptions').style.background = 'linear-gradient(127deg, rgba(40,75,101,1) 7%, rgba(46,86,117,1) 33%)';
        timerOptionsWords.forEach(word => word.style.color = '#fff');
        document.querySelector('.song h4').style.color = '#fff';
        document.getElementById('checkbox').style.boder = '1px solid #fff';
        timerButtonsOptions.forEach(button => {
            button.style.background = 'rgb(0, 69, 109)';
            button.style.color = '#fff';
        });
        document.querySelector('.theTimerFinished').style.background = 'linear-gradient(127deg, rgba(40,75,101,1) 7%, rgba(46,86,117,1) 33%)';
        document.querySelector('.theTimerFinished i').style.color = '#fff';
        document.querySelector('.theTimerFinished h4').style.color = '#fff';
        document.getElementById('accept').style.background = 'rgb(0, 69, 109)';
        document.getElementById('accept').style.color = '#fff';
        document.querySelector('.collaborationDescription').style.background = 'linear-gradient(127deg, rgba(40,75,101,1) 7%, rgba(46,86,117,1) 33%)';
        document.querySelector('.teamTitle').style.color = '#fff';
        document.querySelector('.wordsUnion p').style.color = '#fff';
        document.querySelector('.calculatorController').style.background = 'linear-gradient(127deg, rgba(40,75,101,1) 7%, rgba(46,86,117,1) 33%)';
        document.querySelector('.calculatorContent h2').style.color = '#fff';
        document.querySelector('.calculatorContent p').style.color = '#fff';
        document.querySelector('.backgroundColorWhite').style.background = 'linear-gradient(127deg, rgba(40,75,101,1) 7%, rgba(46,86,117,1) 33%)';
        document.querySelector('.nightModeDescriptionContainer h2').style.color = '#fff';
        document.querySelector('.nightModeDescriptionContainer p').style.color = '#fff';
        document.querySelector('.nightModeBackground').style.background = 'rgb(0, 69, 109)';
        document.querySelector('.nightModeCircle').style.background = 'rgb(29, 52, 70)';
        document.getElementById('moon').style.color = 'rgb(0,255,255)';
        document.querySelector('.containerOfTheStore').style.background = 'linear-gradient(127deg, rgba(40,75,101,1) 7%, rgba(46,86,117,1) 33%)';
        unifying.classList.replace('unifying','nightModeUnifying');
        sun.style.display = 'none';
        moon.style.display = 'block';
        nightModeValidation = true;
    } else {
        arrowUp.style.display = 'block';
        arrowRight.style.display = 'block';
        nightModeCircle.style.transform = 'translateX(0)';
        document.querySelector('body').classList.replace('backgroundNightMode','backgroundRight');
        document.getElementById('containerPresentationRight').style.background = ''
        document.querySelector('.reactions h2').style.color = "";
        presentationRightButtons.forEach(button => button.style.background = '');
        h1OfThePresentatioRight.forEach(h1 => h1.style.color = '');
        document.getElementById('containerPresentationRight2').style.background = '';
        document.querySelector('.introduction2 h2').style.color = '';
        document.querySelector('.introduction2 p').style.color = '';
        document.getElementById('secondPart').style.background = '';
        document.querySelector('.loginFormTitle').style.color = '';
        inputs.forEach(input => input.style.background = '')
        inputIcons.forEach(icon => icon.style.color = '');
        document.getElementById('userName').style.color = '';
        document.getElementById('password').style.color = '';
        document.getElementById('submitData').style.background = '';
        document.querySelector('.loginDescription h1').style.color = '';
        document.querySelector('.loginDescription p').style.color = '';
        document.querySelector('.timeCycle').style.background = '';
        document.querySelector('.TimeCycledescriptionContainer h1').style.color ='';
        document.querySelector('.TimeCycledescriptionContainer p').style.color ='';
        timerDivider.forEach(timerIcon => {
            timerIcon.style.color = '';
            timerIcon.style.border = '';
        });
        dateP.forEach(p => p.style.color = '');
        clockP.forEach(p => p.style.color = '');
        secondsBoxP.forEach(p => p.style.color = '');
        document.getElementById('time').style.color = '';
        stopwatchIconButton.forEach(icon => icon.style.color = '');
        document.getElementById('timer').style.color = '';
        buttonOfTimer.forEach(button => {
            button.style.background = '';
            button.style.color = '';
        });
        document.querySelector('.timerOptions').style.background = '';
        timerOptionsWords.forEach(word => word.style.color = '');
        document.querySelector('.song h4').style.color = '';
        document.getElementById('checkbox').style.boder = '';
        timerButtonsOptions.forEach(button => {
            button.style.background = '';
            button.style.color = '';
        });
        document.querySelector('.theTimerFinished').style.background = '';
        document.querySelector('.theTimerFinished i').style.color = '';
        document.querySelector('.theTimerFinished h4').style.color = '';
        document.getElementById('accept').style.background = '';
        document.getElementById('accept').style.color = '';
        document.querySelector('.collaborationDescription').style.background = '';
        document.querySelector('.teamTitle').style.color = '';
        document.querySelector('.wordsUnion p').style.color = '';
        document.querySelector('.calculatorController').style.background = '';
        document.querySelector('.calculatorContent h2').style.color = '';
        document.querySelector('.calculatorContent p').style.color = '';
        document.querySelector('.backgroundColorWhite').style.background = '';
        document.querySelector('.nightModeDescriptionContainer h2').style.color = '';
        document.querySelector('.nightModeDescriptionContainer p').style.color = '';
        document.querySelector('.nightModeBackground').style.background = '';
        document.querySelector('.nightModeCircle').style.background = '';
        document.getElementById('moon').style.color = '';
        document.querySelector('.containerOfTheStore').style.background = '';
        unifying.classList.replace('nightModeUnifying','unifying');
        moon.style.display = 'none';
        sun.style.display = 'block';
        nightModeValidation = false;
    };
});
"use strict";

const timeButtons = document.querySelectorAll('.timeCycleIcons');

function activeTime(){
    timeButtons.forEach(timeButton => timeButton.classList.remove('timeActive'));
    this.classList.add('timeActive');
}

timeButtons.forEach(timeButton => timeButton.addEventListener('click', activeTime));

const selectClock = document.getElementById('selectClock');
const selectStopwatch = document.getElementById('selectStopwatch');
const selectTimer = document.getElementById('selectTimer');

selectClock.addEventListener('click', () => {
    document.querySelector('.showTime').classList.remove('d-none');
    document.querySelector('.stopwatchContainer').classList.add('d-none');
    document.querySelector('.timerMain').classList.add('d-none');
});

selectStopwatch.addEventListener('click', () => {
    document.querySelector('.showTime').classList.add('d-none');
    document.querySelector('.stopwatchContainer').classList.remove('d-none');
    document.querySelector('.timerMain').classList.add('d-none');
});

selectTimer.addEventListener('click', () => {
    document.querySelector('.showTime').classList.add('d-none');
    document.querySelector('.stopwatchContainer').classList.add('d-none');
    document.querySelector('.timerMain').classList.remove('d-none');
});

const updateHours = () => {
    var date = new Date(),
        hours = date.getHours(),
        ampm,
        minutes = date.getMinutes(),
        seconds = date.getSeconds(),
        dayWeek = date.getDay(),
        day = date.getDate(),
        month = date.getMonth(),
        year = date.getFullYear();

    const pHours = document.getElementById('hours');
    const pAmpm = document.getElementById('ampm');
    const pMinutes = document.getElementById('minutes');
    const pSeconds = document.getElementById('seconds');
    const pWeekDay = document.getElementById('dayWeek');
    const pDay = document.getElementById('day');
    const pMonth = document.getElementById('month');
    const pYear = document.getElementById('year');

    let week = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
    pWeekDay.textContent = week[dayWeek];
    pDay.textContent = day;

    let monthArray = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    pMonth.textContent = monthArray[month];
    pYear.textContent = year;

    if (hours >= 12) { hours = hours - 12; ampm = 'PM' }
    else { ampm = 'AM' };

    if (hours == 0) hours = 12;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    pHours.textContent = hours;
    pAmpm.textContent = ampm;
    pMinutes.textContent = minutes;
    pSeconds.textContent = seconds;
};
updateHours();
setInterval(updateHours, 1000);

const stopwatchTime = document.getElementById('time');
const buttonStart = document.getElementById('btn-start');
const buttonPause = document.getElementById('btn-pause');
const buttonReset = document.getElementById('btn-reset');

buttonStart.addEventListener('click', startToWrite);
buttonPause.addEventListener('click', pauseStopwatch);
buttonReset.addEventListener('click', resetStopwatch);

var ht = 0, mt = 0, st = 0, mlst = 0, mls = 0, s = 0, m = 0, h = 0;

function writeTime() {
    mls++;
    if (mls > 99) s++; mls = 0;
    if (s > 59) m++; s = 0;
    if (m > 59) h++; m = 0;
    if (h > 99) h = 0;

    mlst = ("0" + mls).slice(-2);
    st = ("0" + s).slice(-2);
    mt = ("0" + m).slice(-2);
    ht = ("0" + h).slice(-2);
    stopwatchTime.innerHTML = `${ht}:${mt}:${st}.${mlst}`;
};

var stopTime;

function startToWrite() {
    writeTime();
    stopTime = setInterval(writeTime, 10);
    buttonStart.removeEventListener('click', startToWrite);
    buttonStart.classList.add('d-none');
    buttonPause.classList.remove('d-none');
};

function pauseStopwatch() {
    clearInterval(stopTime);
    buttonStart.addEventListener('click', startToWrite);
    buttonPause.classList.add('d-none');
    buttonStart.classList.remove('d-none');
};

function resetStopwatch() {
    clearInterval(stopTime);
    stopwatchTime.innerHTML = '00:00:00.00';
    h = 0, m = 0, s = 0, mls = 0;
    buttonStart.addEventListener('click', startToWrite);
    buttonPause.classList.add('d-none');
    buttonStart.classList.remove('d-none');
};

const timer = document.getElementById('timer');
const timerOptions = document.getElementById('timerOptions');
const theTimerFinished = document.querySelector('.theTimerFinished');
const finishedTimerIcon = document.querySelector('.theTimerFinished i');
const finishedTimerText = document.querySelector('.theTimerFinished h4');
const finishedTimerButton = document.getElementById('accept');
const invisibleContent2 = document.querySelector('.invisibleContent2');
const options = document.querySelector('.options');
const song = document.querySelector('.song');
const buttonsOptions = document.querySelector('.buttonsOptions');
const exit = document.getElementById('exit');
const saveTimer = document.getElementById('saveTimer');
const hoursOptions = document.getElementById('containerOptionsHours');
const minutesOptions = document.getElementById('containerOptionsMinutes');
const secondsOptions = document.getElementById('containerOptionsSeconds');

///////// change

const buttonDecrementHours = document.getElementById('timerHourDecrement');
const buttonIncrementHours = document.getElementById('timerHourIncrement');

const buttonDecrementMinutes = document.getElementById('timerMinuteDecrement');
const buttonIncrementMinutes = document.getElementById('timerMinuteIncrement');

const buttonDecrementSeconds = document.getElementById('timerSecondDecrement');
const buttonIncrementSeconds = document.getElementById('timerSecondIncrement');

//////////

const checkbox = document.getElementById('checkbox');
const alarm = document.getElementById('alarm');

var checkboxValidation = false;

const buttonStartTimer = document.getElementById('btn-start-timer');
const buttonPauseTimer = document.getElementById('btn-stop-timer');
const buttonResetTimer = document.getElementById('btn-reset-timer');
const btnConfiguration = document.getElementById('btn-configuration');

buttonStartTimer.classList.add('startTimerRejected');
buttonStartTimer.style.cursor = 'auto';

var hoursValue = 0, minutesValue = 0, secondsValue = 0;

hoursOptions.addEventListener('change', () => { hoursValue = parseInt(hoursOptions.value) });
minutesOptions.addEventListener('change', () => { minutesValue = parseInt(minutesOptions.value) });
secondsOptions.addEventListener('change', () => { secondsValue = parseInt(secondsOptions.value) });

btnConfiguration.addEventListener('click', () => {
    invisibleContent2.classList.remove('d-none');
    invisibleContent2.style.animation = 'opacityVisibleContent 1s forwards';
    timerOptions.style.transform = 'translateX(0)';
    if (screen.width > 1024) { timerOptions.style.animation = 'opacity 1s forwards' } 
    else timerOptions.style.animation = 'opacity 1s forwards';
    document.querySelector('body').style.overflow = 'hidden';
    setTimeout(() => { options.style.animation = 'opacity .6s forwards' },1100);
    setTimeout(() => { song.style.animation = 'opacity .6s forwards' },1200);
    setTimeout(() => { buttonsOptions.style.animation = 'opacity .6s forwards' },1300);
});

const exitTimerOptions = () => {
    invisibleContent2.style.animation = 'removeOpacityVisibleContent 1s forwards';
    setTimeout(() => { options.style.animation = 'removeOpacity .3s forwards' },100);
    setTimeout(() => { song.style.animation = 'removeOpacity .3s forwards' },200);
    setTimeout(() => { buttonsOptions.style.animation = 'removeOpacity .3s forwards' },300);
    setTimeout(() => { timerOptions.style.animation = 'removeOpacity 1s forwards' },500);
    setTimeout(() => { timerOptions.style.transform = 'translateX(-3000px)' },1600);
    setTimeout(() => { invisibleContent2.classList.add('d-none'); document.querySelector('body').style.overflowY = 'auto' },2000);
};

exit.addEventListener('click', exitTimerOptions);

////////////////////change

buttonDecrementHours.addEventListener('click', () => {
    if (!hoursValue == 0) {
        hoursValue--;
        if (hoursValue < 10) { hoursOptions.value = ("0" + hoursValue).slice(-2) } 
        else hoursOptions.value = hoursValue;
    };
});

buttonIncrementHours.addEventListener('click', () => {
    if (hoursValue < 59) {
        hoursValue++;
        if (hoursValue < 10) { hoursOptions.value = ("0" + hoursValue).slice(-2) } 
        else hoursOptions.value = hoursValue;
    };
});

buttonDecrementMinutes.addEventListener('click', () => {
    if (!minutesValue == 0) {
        minutesValue--;
        if (minutesValue < 10) { minutesOptions.value = ("0" + minutesValue).slice(-2) } 
        else minutesOptions.value = minutesValue;
    };
});

buttonIncrementMinutes.addEventListener('click', () => {
    if (minutesValue < 59) {
        minutesValue++;
        if (minutesValue < 10) { minutesOptions.value = ("0" + minutesValue).slice(-2) } 
        else minutesOptions.value = minutesValue;
    };
});

buttonDecrementSeconds.addEventListener('click', () => {
    if (!secondsValue == 0) {
        secondsValue--;
        if (secondsValue < 10) { secondsOptions.value = ("0" + secondsValue).slice(-2) } 
        else secondsOptions.value = secondsValue;
    };
});

buttonIncrementSeconds.addEventListener('click', () => {
    if (secondsValue < 59) {
        secondsValue++;
        if (secondsValue < 10) { secondsOptions.value = ("0" + secondsValue).slice(-2) } 
        else secondsOptions.value = secondsValue;
    };
});

/////////////////////////////////

checkbox.addEventListener('click', () => {
    checkbox.classList.toggle('checkboxTrue');
    if (checkbox.classList.contains('checkboxTrue')) checkboxValidation = true;
    else checkboxValidation = false;
});

var htimer, mtimer, stimer;

saveTimer.addEventListener('click', () => {
    if (hoursValue == 0 && minutesValue == 0 && secondsValue == 0) {
        buttonResetTimer.classList.add('d-none');
        buttonStartTimer.classList.add('startTimerRejected');
        buttonStartTimer.style.cursor = 'auto';
        timer.innerHTML = '00:00:00';
    } else {
        buttonStartTimer.classList.remove('startTimerRejected');
        buttonResetTimer.classList.remove('d-none');
        buttonStartTimer.style.cursor = 'pointer';
        if (hoursValue < 10) hoursValue = ("0" + hoursValue).slice(-2);
        if (minutesValue < 10) minutesValue = ("0" + minutesValue).slice(-2);
        if (secondsValue < 10) secondsValue = ("0" + secondsValue).slice(-2);
        htimer = hoursValue;
        mtimer = minutesValue;
        stimer = secondsValue;
        timer.innerHTML = `${htimer}:${mtimer}:${stimer}`;
    };
    exitTimerOptions();
});

var timerCycle, startAlarm;

const startTimer = () => {
    stimer--;
    if (stimer < 0) stimer = 59;
    
    if (stimer < 10) stimer = "0" + stimer;
    else stimer = stimer;
   
    if (mtimer > 0 && stimer == 59) {
        mtimer--;
        if (mtimer < 10) mtimer = "0" + mtimer;
        else mtimer = mtimer;
    };

    if (htimer > 0 && mtimer == 0 && stimer == 0) {
        setTimeout(() => {
            mtimer = 60;
            htimer--;
            if (htimer < 10) htimer = "0" + htimer;
            else htimer = htimer;
        }, 500);
    };

    if (htimer == 0 && mtimer == 0 && stimer == 0) {
        if (checkboxValidation) {
            const activeAlarm = () => alarm.play();
            startAlarm = setInterval(activeAlarm);
        };
        buttonStartTimer.classList.remove('d-none');
        buttonPauseTimer.classList.add('d-none');
        invisibleContent2.classList.remove('d-none');
        invisibleContent2.style.animation = 'opacityVisibleContent 1s forwards';
        theTimerFinished.style.transform = 'translateX(0)';
        theTimerFinished.style.animation = 'opacity 1s forwards';
        document.querySelector('body').style.overflow = 'hidden';
        setTimeout(() => { finishedTimerIcon.style.animation = 'opacity .5s forwards' },1200);
        setTimeout(() => { finishedTimerText.style.animation = 'opacity .5s forwards' },1300);
        setTimeout(() => { finishedTimerButton.style.animation = 'opacity .5s forwards' },1400);
        clearInterval(timerCycle);
    };

    timer.innerHTML = `${htimer}:${mtimer}:${stimer}`;
};

buttonStartTimer.addEventListener('click', () => {
    if (!buttonStartTimer.classList.contains('startTimerRejected')) {
        buttonStartTimer.classList.add('d-none');
        buttonPauseTimer.classList.remove('d-none');
        timerCycle = setInterval(startTimer, 1000);
    };
});

buttonPauseTimer.addEventListener('click', () => {
    buttonStartTimer.classList.remove('d-none');
    buttonPauseTimer.classList.add('d-none');
    clearInterval(timerCycle);
});

buttonResetTimer.addEventListener('click', () => {
    if (hoursValue < 10) hoursValue = ("0" + hoursValue).slice(-2);
    if (minutesValue < 10) minutesValue = ("0" + minutesValue).slice(-2);
    if (secondsValue < 10) secondsValue = ("0" + secondsValue).slice(-2);
    htimer = hoursValue;
    mtimer = minutesValue;
    stimer = secondsValue;

    timer.innerHTML = `${htimer}:${mtimer}:${stimer}`;
});

finishedTimerButton.addEventListener('click', () => {
    clearInterval(startAlarm);
    alarm.pause();
    finishedTimerButton.style.animation = 'removeOpacity .4s forwards';
    setTimeout(() => { finishedTimerText.style.animation = 'removeOpacity .4s forwards' },100);
    setTimeout(() => { finishedTimerIcon.style.animation = 'removeOpacity .4s forwards' },200);
    setTimeout(() => {
        theTimerFinished.style.animation = 'removeOpacity .5s forwards';
        invisibleContent2.style.animation = 'removeOpacityVisibleContent 1s forwards';
    }, 800);
    setTimeout(() => {
        theTimerFinished.style.transform = 'translateX(-2000px)';
        invisibleContent2.classList.add('d-none');
        document.querySelector('body').style.overflowY = 'auto';
    }, 1500);
    if (hoursValue < 10) hoursValue = ("0" + hoursValue).slice(-2);
    if (minutesValue < 10) minutesValue = ("0" + minutesValue).slice(-2);
    if (secondsValue < 10) secondsValue = ("0" + secondsValue).slice(-2);
    htimer = hoursValue;
    mtimer = minutesValue;
    stimer = secondsValue;

    timer.innerHTML = `${htimer}:${mtimer}:${stimer}`;
});
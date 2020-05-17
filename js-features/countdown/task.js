'use strict'

function countdown() {
    const timer = document.getElementById('timer');
    let timerValue = timer.textContent;
        return function () {
        if (timerValue == 0) {
            alert('Вы победили в конкурсе!');
            clearInterval(intervalId);
            const link = document.getElementById('link');
            link.href = 'https://www.mozilla.org/ru/firefox/download/thanks/';
            link.click(); 
        } else {
            timerValue--;
        }
        timer.textContent = timerValue;    
    }
}

const intervalId = setInterval(countdown(), 1000);

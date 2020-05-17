'use strict'
const cookieImage = document.getElementById('cookie');

function clicker() {
    const counterObj = document.getElementById('clicker__counter');
    let counter = counterObj.textContent;
    
    return function() {
        counter++;
        counterObj.textContent = counter;
        if (counter % 2 !== 0) {
            cookieImage.width = 250;
        } else {
            cookieImage.width = 200; 
        }
    }    
}

cookieImage.onclick = clicker();
'use strict'

function game() {

    function getHole(index) {
        return document.getElementById(`hole${index}`);
    }

    const winCountObj = document.getElementById('dead');
    let winCountValue = winCountObj.textContent;
    const loseCountObj = document.getElementById('lost');
    let loseCountValue = loseCountObj.textContent;
    
    function clearScores() {
        winCountValue = 0;
        winCountObj.textContent = 0;
        loseCountValue = 0;
        loseCountObj.textContent = 0;
    }

    for (let i=1; i < 10; i++) {
        const hole = getHole(i);

        hole.onclick = function() {
            if (hole.className.includes('hole_has-mole')) {
                winCountValue++;
                winCountObj.textContent = winCountValue;
            } else {
                loseCountValue++;
                loseCountObj.textContent = loseCountValue;
            }

            if (winCountValue == 10) {
                alert('Вы победили! ٩(◕‿◕｡)۶');
                clearScores();
            } else if (loseCountValue == 5) {
                alert('Вы проиграли (｡╯︵╰｡)');
                clearScores();
            }
        }
    }
}

window.onload = game;
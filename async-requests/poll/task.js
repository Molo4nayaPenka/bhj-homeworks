'use strict'

const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.addEventListener('readystatechange', () => {
    
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText)['data'];
        const title = document.getElementById('poll__title');
        title.innerText = response.title;
        const answersPoll = document.getElementById('poll__answers');

        response.answers.forEach(answer => {
            const answerMarkup = `<button class="poll__answer">${answer}</button>`;
            answersPoll.insertAdjacentHTML('afterbegin', answerMarkup);
        });

        const answers = answersPoll.querySelectorAll('.poll__answer');
        answers.forEach(answer => {
            answer.addEventListener('click', (event) => {
                event.preventDefault();
                alert('Спасибо, ваш голос засчитан!');
            })
        })
    }
});
xhr.send();
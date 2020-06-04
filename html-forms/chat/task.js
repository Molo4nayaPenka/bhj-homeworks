'use strict'
// скажите, пожалуйста, какой способ задания обработчика более ресурсоёмкий: onclick или addEventListener?

const chat = document.querySelector('.chat-widget');
chat.addEventListener('click', () => chat.classList.add('chat-widget_active'));

const messages = chat.querySelector('.chat-widget__messages');
const input = document.querySelector('.chat-widget__input');
const now = `${new Date().getHours()}:${new Date().getMinutes()}`;

function giveRandomAnswer() {
    const answers = [
        'Добрый день, мы ещё не проснулись. Позвоните через 10 лет',
        'К сожалению, все операторы сейчас заняты. Не пишите нам больше',
        'Кто тут?',
        'Где ваша совесть?',
        'Вам не стыдно? Сами свои проблемы решайте',
        'Добрый день! До свидания!',
        'Вы не купили ни одного товара, чтобы с нами так разговаривать!'
    ],
    index = Math.floor(Math.random() * answers.length);

    return answers[index];
}

input.addEventListener('keydown', function (event) {
    if (event.keyCode == 13 && input.value !== '') {
        messages.innerHTML += `
        <div class="message message_client">
          <div class="message__time">${now}</div>
          <div class="message__text">
            ${input.value}
          </div>
        </div>
        `;

        input.value = '';

        messages.innerHTML += `
        <div class="message">
          <div class="message__time">${now}</div>
          <div class="message__text">
            ${giveRandomAnswer()}
          </div>
        </div>
        `;  
    }
});
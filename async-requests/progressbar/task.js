'use strict'

const progress = document.getElementById('progress');
const form = document.getElementById('form');

form.addEventListener('submit', event => {

    event.preventDefault();
    const data = new FormData(form);
    const request = new XMLHttpRequest();
    request.open('POST', 'https://netology-slow-rest.herokuapp.com/upload.php');

    request.upload.addEventListener('progress', (e) => {
        progress.value = e.loaded / e.total * 100;
    });
    request.upload.addEventListener('loadend', () => {
        progress.value = 1;
    });
    request.send(data);
})



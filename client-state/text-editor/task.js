'use strict'

const textarea = document.getElementById('editor');
textarea.addEventListener('input', event => {
    localStorage.setItem('text', textarea.value);
})

textarea.value = localStorage.getItem('text');
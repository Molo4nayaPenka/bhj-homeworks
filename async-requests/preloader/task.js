'use strict'

const loadingAnimation = document.getElementById('loader');
const xhr = new XMLHttpRequest();
const items = document.getElementById('items');

xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/');
xhr.addEventListener('readystatechange', () => {
    if (xhr.readyState === 4 && xhr.status === 200) {
        loadingAnimation.classList.remove('loader_active');
        const data = JSON.parse(xhr.responseText).response.Valute;
        console.log(data);
        
        for(let valute in data) {
            let output = document.createElement('div');
            output.classList.add('item');
            output.innerHTML+= `
            <div class="item__code">${data[valute].CharCode}</div>
            <div class="item__value">${data[valute].Value}</div>
            <div class="item__currency">руб.</div>`
            
            items.insertAdjacentElement('afterbegin', output);
        }
    }
});
xhr.send();
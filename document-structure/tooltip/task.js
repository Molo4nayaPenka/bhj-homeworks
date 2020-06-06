'use strict'

const links = Array.from(document.querySelectorAll('.has-tooltip'));
links.forEach(link => { 

    link.addEventListener('click', event => {
        event.preventDefault();
        link.insertAdjacentHTML('afterend', `<div class="tooltip">${link.getAttribute('title')}</div>`);
        document.querySelector('.tooltip').classList.toggle('tooltip_active');
    });
});

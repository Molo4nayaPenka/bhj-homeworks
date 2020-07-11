'use strict'

const interests = document.querySelectorAll('.interest__check');
let parentElem;
let childElem;

interests.forEach(interest => {
    interest.addEventListener('change', e => {
        parentElem = e.target.closest('.interest'); // li class='interest'        
        childElem = parentElem.querySelectorAll('.interest__check'); // input. Если главный interest - все чекбоксы с классом interest__check
        childElem.forEach(elem => elem.checked = e.target.checked);
    })
})
'use strict'

const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');

dropdownValue.onclick = () => {
    if (dropdownList.classList.contains('dropdown__list_active')) {
        dropdownList.classList.remove('dropdown__list_active');
    } else {
        dropdownList.classList.add('dropdown__list_active');
    }
}

const dropdownItems = Array.from(dropdownList.querySelectorAll('.dropdown__item'));

function changeDropdownValue(event) {
    event.preventDefault();
    dropdownValue.textContent = this.textContent;
    dropdownList.classList.remove('dropdown__list_active');
}

dropdownItems.forEach((elem) => elem.addEventListener('click', changeDropdownValue));

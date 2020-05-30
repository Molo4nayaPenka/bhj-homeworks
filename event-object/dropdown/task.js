'use strict'

// собираем все выпадающие списки в массив
const dropdowns = Array.from(document.querySelectorAll('.dropdown'));

// для каждого списка пишем обработчик 
dropdowns.forEach(dropdown => {

    const dropdownValue = dropdown.querySelector('.dropdown__value');
    const dropdownList = dropdown.querySelector('.dropdown__list');
    
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
});

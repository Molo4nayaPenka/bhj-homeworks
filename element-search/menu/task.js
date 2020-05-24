'use strict'

const menuLinks = Array.from(document.querySelectorAll('.menu__link'));

function addClassActive(item) {
    return item.classList.add('menu_active');
}

function removeClassActive(item) {
    return item.classList.remove('menu_active');
}

menuLinks.forEach(function (link) {
    link.onclick = function () {
        // ищем меню рядом с ссылкой
        const menuSub = link.nextElementSibling;

        if (menuSub.classList.contains('menu_active')) {
            removeClassActive(menuSub);
            return false;
        } else if (menuSub) {
            addClassActive(menuSub);
            return false;
        }
    }
});
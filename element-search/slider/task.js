'use strict'

const slides = Array.from(document.querySelectorAll('.slider__item'));
const amount = slides.length;
let index = 0;
const prevSlideBtn = document.querySelector('.slider__arrow_prev');
const nextSlideBtn = document.querySelector('.slider__arrow_next');

const addClassActive = (elem) => elem.classList.add('slider__item_active');
const removeclassActive = (elem) => elem.classList.remove('slider__item_active');

nextSlideBtn.onclick = function () {

    if (index < amount - 1) {
        removeclassActive(slides[index]);
        addClassActive(slides[index + 1]);
    } else {
        removeclassActive(slides[index]);
        addClassActive(slides[0]);
        index = -1;
    }

    index++;
}

prevSlideBtn.onclick = function () {

    if (index > 0) {
        removeclassActive(slides[index]);
        addClassActive(slides[index - 1]);
    } else {
        removeclassActive(slides[0]);
        addClassActive(slides[amount - 1]);
        index = amount;
    }

    index--;
}

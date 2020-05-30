'use strict'

const book = document.getElementById('book');
const fontSizes = Array.from(book.querySelectorAll('.font-size'));

fontSizes.forEach((elem, index, arr) => {

    elem.addEventListener('click', event => {

        event.preventDefault();
        let currentFont = book.querySelector('.font-size_active');

        if (elem !== currentFont) {
            currentFont.classList.remove('font-size_active');
            elem.classList.add('font-size_active');
        }
        changeFont();

        function changeFont() {

            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');

            if (elem.classList.contains('font-size_small')) {
                book.classList.add('book_fs-small');
            } else if (elem.classList.contains('font-size_big')) {
                book.classList.add('book_fs-big');
            }
        }       
    });
});
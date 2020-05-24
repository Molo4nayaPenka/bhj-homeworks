'use strict'

function modals() {

    const modalMain = document.getElementById('modal_main');
    const modalSuccess = document.getElementById('modal_success');
    const closeBtns = Array.from(document.getElementsByClassName('modal__close'));

    function addClassActive(elem) {
        elem.classList.add('modal_active');
    }
    
    function removeClassActive(elem) {
        elem.classList.remove('modal_active');
    }
    
    addClassActive(modalMain);

    for (let i=0; i < closeBtns.length; i++) {
        const closeBtn = closeBtns[i];
        
        closeBtn.onclick = function () {
            const currentModal = closeBtn.closest('.modal_active');
            removeClassActive(currentModal);

            if (closeBtn.classList.contains('show-success')) {
                addClassActive(modalSuccess);
            }
        }
    }
}

window.onload = modals;

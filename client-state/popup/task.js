'use strict'

function showModals() {
    const modals = Array.from(document.getElementsByClassName('modal'));
    const closeBtns = Array.from(document.getElementsByClassName('modal__close'));

    modals.forEach(modal => {
        modal.classList.add('modal_active');

        if (document.cookie.includes('isModalClosed=true')) {   
            modal.classList.remove('modal_active');
        }
    })
    
    closeBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', function (event) {
            const currentModal = event.target.closest('.modal_active');
            currentModal.classList.remove('modal_active');
            document.cookie = 'isModalClosed=true';
        })
    })
}

window.onload = showModals;

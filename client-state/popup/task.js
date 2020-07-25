'use strict'

function showModals() {
    const modals = Array.from(document.getElementsByClassName('modal'));
    const closeBtns = Array.from(document.getElementsByClassName('modal__close'));

    modals.forEach(modal => {
        modal.classList.add('modal_active');
    })
    
    closeBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', function (event) {
            const currentModal = event.target.closest('.modal_active');
            currentModal.classList.remove('modal_active');
            // вообще не понимаю, что нужно писать в куки. что такое "информация о закрытии окна"?
            document.cookie = 'key=' + encodeURIComponent(`${currentModal.classList}`);
            console.log(document.cookie)
        })

    })
}

window.onload = showModals;

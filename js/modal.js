const modalButtons = document.querySelectorAll('[data-modal-button]');
const modalClosebuttons = document.querySelectorAll('[data-modal-close]');
const allModals = document.querySelectorAll('[data-modal]');

// Кнопки - Открыть Модалку
modalButtons.forEach(function(item){
    item.addEventListener('click',function(){
        const modalId = this.dataset.modalButton
        console.log(modalId);
        const modal = document.querySelector('#'+ modalId)
        console.log(modal);
        modal.classList.remove('hidden')
    })
})

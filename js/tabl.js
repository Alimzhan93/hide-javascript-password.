// Нашли все заголовки табов по data атрибуту
const tablHeaders = document.querySelectorAll('[data-tab]');
// Нашли все контент боксы
const contentBoxes = document.querySelectorAll('[data-tab-content]');

tablHeaders.forEach(function(item){
    item.addEventListener('click', function () {
        // 1. Скрыть все content box
        contentBoxes.forEach(function (item) {
            item.classList.add('hidden')
        });

         // 2. Выбрать нужный content box и показать его

    const contentBox = document.querySelector('#' + this.dataset.tab)
   
    setTimeout(() => {
        contentBox.classList.remove('hidden')
    },1000)
    })
})


let tab = function() {
    let tabNav = document.querySelectorAll('.tabs-nav__item')
    let tabContent = document.querySelectorAll('.tab')
    let tabName;
    //console.log(tabNav);
    //console.log(tabContent);

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
        console.log(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
};

tab();

let popup = document.getElementById('modal');  /*popup block*/
let popupClose = document.getElementById('modal__close'); /*popup close btn*/
let popupOpen = document.getElementById('modal__open'); /*popup open button*/
let modalBg = document.getElementById('modal__bg');

console.log(modalBg);

popupOpen.addEventListener ('click', function() {
    popup.removeAttribute('class');
    popup.setAttribute('class', 'modal__block')
})

popupClose.addEventListener('click', function() {
    popup.removeAttribute('class');
    popup.setAttribute('class', 'modal__none')
})

modalBg.addEventListener('click', function() {
    popup.removeAttribute('class');
    popup.setAttribute('class', 'modal__none')
})

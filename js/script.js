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

const popup = document.getElementById('modal');  /*popup block*/
const popupClose = document.getElementById('modal__close'); /*popup close btn*/
const popupOpen = document.getElementById('modal__open'); /*popup open button*/

popupOpen.addEventListener ('click', function() {
    popup.removeAttribute('class');
    popup.setAttribute('class', 'modal__block')
})

popupClose.addEventListener('click', function() {
    popup.removeAttribute('class');
    popup.setAttribute('class', 'modal__none')
})

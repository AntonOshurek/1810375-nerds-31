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
        tabNav.forEach(item => {
            item.classList.remove('button__radio__active');
        });
        this.classList.add('button__radio__active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
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
const modalBg = document.getElementById('modal__bg');
const submitBtn = document.querySelector('.modal__btn__submit'); //submit modal form btn


const closeModal = () => {
    popup.classList.remove('modal__show');
};

const openModal = () => {
    popup.classList.add('modal__show');
    modalKeyOpt();
};

function modalKeyOpt () {
    window.onkeydown = ( event ) => {
        if ( event.keyCode == 27 ) {
            closeModal();
        } else if (event.keyCode == 13) {
            submitBtn.click();
        }
    };
};

popupOpen.addEventListener ('click', openModal);
popupClose.addEventListener('click', closeModal);
modalBg.addEventListener('click', closeModal);

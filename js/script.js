const tab = function() {
    const tabNav = document.querySelectorAll('.tabs-nav__item'),
    tabContent = document.querySelectorAll('.tab');
    let tabName;

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

//popup 

const popup = document.getElementById('popup');  /*popup block*/
const popupClose = document.getElementById('modal__close'); /*popup close btn*/
const popupOpen = document.getElementById('modal__open'); /*popup open button*/
const modalBg = document.querySelector('.popup__area');
const submitBtn = document.querySelector('.modal__btn__submit'); //submit modal form btn
const body = document.getElementById('body');
const popupContant = document.querySelector('.popup__content');
const modalFocusInput = document.getElementById('modal__text');

const closeModal = (e) => {
    e.preventDefault();
    popup.classList.remove('popup__target');
    body.classList.remove("overflow__body");
    popupContant.classList.remove('modal__error'); 
    popupContant.style.opacity = 1;
    popupContant.style.transform = ('perspective(600px) translate(0px, -100%) rotateX(45deg)');
};

const openModal = (e) => {
    e.preventDefault();
    popup.classList.add('popup__target');
    modalFocusInput.focus();
    popupContant.style.opacity = 1;
    popupContant.style.transform = ('perspective(600px) translate(0px, 0%) rotateX(0deg)');
    body.classList.add("overflow__body");
    
    modalKeyOpt();
};

function modalKeyOpt () {
    window.onkeydown = ( event ) => {
        if ( event.keyCode == 27 ) {
            closeModal(event);
        } else if (event.keyCode == 13) {
            submitBtn.click();
        }
    };
};

popupOpen.addEventListener ('click', (e) => openModal(e));
popupClose.addEventListener('click', (e) => closeModal(e));
modalBg.addEventListener('click', (e) => closeModal(e));

//valid popup form

const modalEmailInput = document.getElementById('modal__email');
const footerForm = document.getElementById('set__mail__form');
const modalText = document.getElementById('modal__text');

function checkEmail(email) {
    let reg = /^[a-z0-9_][a-z0-0\._-]*[a-z0-9_]*@([a-z0-9]+[a-z0-9_-]*[a-z0-9]+\.)+[a-z0-9]+$/i;
    return email.match(reg);
}

footerForm.addEventListener('submit', (e) => {
    if (!modalText.value || !modalEmailInput.value) {
        e.preventDefault();      
        popupContant.classList.add('modal__error');  
        popupContant.offsetWidth = popupContant.offsetWidth;
        popupContant.classList.remove('modal__error'); 
    } else if (!checkEmail(modalEmailInput.value)) {
        e.preventDefault();
        console.log('no');
    } else {
        console.log('done');
    }
})

//custom Range

const rangeToogleMin = document.querySelector('.toggle__min');
const rangeToogleMax = document.querySelector('.toggle__max');
const rangeBar = document.querySelector('.bar');
const rangeMinPrice = document.querySelector('.min-price');
const rangeMaxPrice = document.querySelector('.max-price');
const minValue = 0;
const maxValue = 20000;

let currentMinValue = 0;
let currentMaxValue = 20000;

const setMaxValue = (newValue) => {
    if (newValue <= 20000 && newValue >= 0) {
        currentMaxValue = newValue;
    }  else if (Math.sign(newValue) == -1 || Math.sign(newValue) == -0 ) {
        currentMaxValue = minValue;
    } else {
        currentMaxValue = maxValue;
    }
};

const getPositionMaxValue = () => (currentMaxValue / maxValue) * 100;
      
const changeSecondRangeBtn = (e) => {
    setMaxValue(e.target.value);
        rangeToogleMax.style.left = `${getPositionMaxValue()}%`;
        rangeBar.style.width = `${getPositionMaxValue() - getPositionMinValue()}%`;
};
      
rangeMaxPrice.addEventListener('keyup', (e) => changeSecondRangeBtn(e));
    
rangeMaxPrice.addEventListener('change', (e) => changeSecondRangeBtn(e));

const setMinValue = (newValue) => {
    if (newValue <= 20000 && newValue >= 0) {
        currentMinValue = newValue;
    }   else if (Math.sign(newValue) == -1 || Math.sign(newValue) == -0 ) {
        currentMinValue = minValue;
    } else {
        currentMinValue = maxValue;
    }
};
    
const getPositionMinValue = () => (currentMinValue / maxValue) * 100;
    
const changeFirstRangeBtn = (e) => {
    setMinValue(e.target.value)
        rangeToogleMin.style.left = `${getPositionMinValue()}%`;
        rangeBar.style.left = `${getPositionMinValue()}%`;
        rangeBar.style.width = `${getPositionMaxValue() - getPositionMinValue()}%`;
};
      
rangeMinPrice.addEventListener('keyup', (e) => changeFirstRangeBtn(e));
    
rangeMinPrice.addEventListener('change', (e) => changeFirstRangeBtn(e));
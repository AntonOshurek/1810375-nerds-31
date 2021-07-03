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

const popup = document.getElementById('modal'),  /*popup block*/
    popupClose = document.getElementById('modal__close'), /*popup close btn*/
    popupOpen = document.getElementById('modal__open'), /*popup open button*/
    modalBg = document.getElementById('modal__bg'),
    submitBtn = document.querySelector('.modal__btn__submit'), //submit modal form btn
    body = document.getElementById('body');

const closeModal = () => {
    popup.classList.remove('modal__show');
    body.classList.remove("overflow__body");
};

const openModal = () => {
    popup.classList.add('modal__show');
    body.classList.add("overflow__body");
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


//alert ('hello');

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

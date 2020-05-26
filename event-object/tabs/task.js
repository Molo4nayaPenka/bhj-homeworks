'use strict'

const tabs1 = document.getElementById('tabs1');
const tabs = Array.from(tabs1.querySelectorAll('.tab'));
const tabsContent = Array.from(tabs1.querySelectorAll('.tab__content'));


tabs.forEach((tab, index, arr) => tab.addEventListener('click', (event) => {
    let activeTab = tabs1.querySelector('.tab_active');
    
    if (tab !== activeTab) {
        const i = arr.indexOf(activeTab);
        tabs[i].classList.remove('tab_active');
        tabsContent[i].classList.remove('tab__content_active');
        tab.classList.add('tab_active');
        tabsContent[index].classList.add('tab__content_active');
    }   
}));
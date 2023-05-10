const tabsItem = document.querySelectorAll('.tabs__item');
const tabsContent = document.querySelectorAll('.tabs__content');

tabsItem.forEach(item => item.addEventListener('click', event => {
   const tabsItemTarget = event.target.getAttribute('data-tab');
   tabsItem.forEach(element => element.classList.remove('active-tab'));
   tabsContent.forEach(element => element.classList.add('hidden'));
   item.classList.add('active-tab');
   document.getElementById(tabsItemTarget).classList.remove('hidden');
}))

document.querySelector('[data-tab="tab-1"]').classList.add('active-tab');
document.querySelector('#tab-1').classList.remove('hidden');

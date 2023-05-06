const tubsItem = document.querySelectorAll('.tabs__item');
const tubsContent = document.querySelectorAll('.tabs__content');

for (let item of tubsItem) {

   item.addEventListener('click', function() {
      for (let element of tubsContent) {
         element.classList.add('hidden')
      }
      const content = document.querySelector('#' + item.dataset.tab);
      content.classList.remove('hidden').add('selected')
   }
   )
}
const spollersItem = document.querySelectorAll('.accordion .item');
const AccordionBtn = document.querySelectorAll('.accordion button')

for (let index = 0; index < AccordionBtn.length; index ++) {
   AccordionBtn[index].addEventListener('click', event => {
      for (let i = 0; i < spollersItem.length; i ++) {
         spollersItem[i].classList.remove('active');
      }
      spollersItem[index].classList.add('active');
   });
}

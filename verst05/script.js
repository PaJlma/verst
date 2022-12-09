const menu = document.querySelector('.menu');

document.addEventListener('click', event => {
   if(event.target.closest('.menu')) {
       menu.classList.toggle('enable');
   } else {
       menu.classList.remove('enable');
   }
});
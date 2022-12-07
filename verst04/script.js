const menu = document.querySelector('.user');

document.addEventListener('click', event => {
   if(event.target.closest('.user')) {
       menu.classList.toggle('enable');
   } else {
       menu.classList.remove('enable');
   }
});


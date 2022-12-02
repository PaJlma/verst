const burger = document.querySelector('.burger');

function onHamburgerClick(event) {
    if(event.target.closest('.burger')) {
        burger.classList.toggle('active');
    }

    else if(!event.target.closest('.burger__item')) {
        burger.classList.remove('active');
    }
}

burger.addEventListener('click', onHamburgerClick);
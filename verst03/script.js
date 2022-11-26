const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger__menu');
let ifActive = false;

function onBurgerClick() {
    if(ifActive === false) {
        burger.classList.add('active');
        ifActive = true;
    }
    else if(ifActive === true) {
        burger.classList.remove('active');
        ifActive = false;
    }
}

burger.addEventListener('click', onBurgerClick);
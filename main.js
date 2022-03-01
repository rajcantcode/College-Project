const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementsByClassName('menu');

function navToggle(){
    menuBtn.classList.toggle('open');
    menu[0].classList.toggle('open1');
}



menuBtn.addEventListener('click',navToggle);
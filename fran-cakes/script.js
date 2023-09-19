/*
var ul = document.querySelector('nav ul');
var menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
    }
}
*/

let txt = document.querySelector('.texto-pag1')
if (txt.clientWidth <= 220) {
    txt.innerHTML = '<p>Somos a confeitaria Fran Cakes, especialistas na confecção de bolos em Caxias.</p>'
}

function animacao() {
    var t = document.querySelector ('div.txt-produtos')
    if (onmouseenter == true) {
        t.style.textAlign = 'left'
    } else {
        t.style.textAlign = 'right'
    }
}
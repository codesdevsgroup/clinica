/* Evento de fixar elemento no top */
var offset = $('#menu').offset().top;
var $meuMenu = $('#menu'); // guardar o elemento na memoria para melhorar performance
$(document).on('scroll', function () {
    if (offset <= $(window).scrollTop()) {
        $meuMenu.addClass('fixed-top');
    } else {
        $meuMenu.removeClass('fixed-top');
    }
});

//Java script puro
/* window.addEventListener('scroll', onScroll)

onScroll()
function onScroll() {
    ativarFixed(home)
}

function ativarFixed(section) {
    const sectionheight = section.offsetHeight
    
    if (window.scrollY >= sectionheight) {
        document.querySelector("#menu").classList.add("fixed-top")
    } else {
        document.querySelector("#menu").classList.remove("fixed-top")
    }
} */



var offset = $('#menu').offset().top;
var $meuMenu = $('#menu'); // guardar o elemento na memoria para melhorar performance
$(document).on('scroll', function () {
    if (offset <= $(window).scrollTop()) {
        $meuMenu.addClass('fixed-top');
    } else {
        $meuMenu.removeClass('fixed-top');
    }
});
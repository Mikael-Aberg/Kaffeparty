$(function () {
    $('#submenu a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 120
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
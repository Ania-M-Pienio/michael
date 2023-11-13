
$('.navbar-toggle').each( function() {
    const $toggle = $(this);
    const $target = $(`${$toggle.data('target')}`);
    $toggle.on('click', function() {
        $target.toggleClass('active');
    });

});

$(document).on('click', '.navbar__link', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $(`${$(this).attr('href')}`).offset().top
    }, 500);
});

$(document).on('click', '.begin-button', function (event) {
    event.preventDefault();

    const $section = $('.main section:nth-child(2)');

    $('html, body').animate({
        scrollTop: $section.offset().top
    }, 500);
});


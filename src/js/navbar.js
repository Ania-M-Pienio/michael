
$('.navbar-toggle').each( function() {
    const $toggle = $(this);
    const $target = $(`${$toggle.data('target')}`);
    $toggle.on('click', function() {
        $target.toggleClass('active');
    });

});
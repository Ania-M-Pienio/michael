$('.ap-bars').each(function() {
    const $bars = $(this);
    $bars.find('.ap-bars__item').each(function() {
        const $barItem = $(this);
        const value = $barItem.data('value');
        const percent = $barItem.data('percent');
        if (value) {
            $barItem.find('.bar__value').text(value);
        } 
        if (percent) {
            $barItem.find('.bar').css('width', `${percent}%`);
        }
    });

});
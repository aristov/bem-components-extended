modules.require('jquery', function($) {

$('.cover').on('click', function() {
    $('.modal')
        .bem('modal')
        .setMod('visible', true);
});

});

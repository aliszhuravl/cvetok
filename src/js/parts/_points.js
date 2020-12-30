(function($) {

    $('#points').on('click', function () {
        $('body').addClass('stopped');
        $('.points_opener').addClass('points_opened');
    });

    $('#p_close').on('click', function () {
        $('body').removeClass('stopped');
        $('.points_opener').removeClass('points_opened');
    });

    $('#points_m').on('click', function () {
        $('body').addClass('stopped');
        $('.points_opener').addClass('points_opened');
    });

    $('#p_close').on('click', function () {
        $('body').removeClass('stopped');
        $('.points_opener').removeClass('points_opened');
    });

    $('#filters').on('click', function () {
        $('body').addClass('stopped');
        $('.filters_opener').addClass('filters_opened');
    });

    $('#f_close').on('click', function () {
        $('body').removeClass('stopped');
        $('.filters_opener').removeClass('filters_opened');
    });

})(jQuery);
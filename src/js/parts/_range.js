$(document).ready(function() {
    var sliderFilter = $('.range-slider_filter');
    var sliderMin = $('.range-slider__text_min');
    var sliderMax = $('.range-slider__text_max');

    $(sliderFilter).slider({
        range: true,
        min: 799,
        max: 3599,
        values: [799, 3599],
        slide: function (event, ui) {
            $(sliderMin).text(ui.values[0]);
            $(sliderMax).text(ui.values[1]);
        }
    });

    var sliderFilterf = $('.range-slider_filter_f');
    var sliderMinf = $('.range-slider__text_min_f');
    var sliderMaxf = $('.range-slider__text_max_f');

    $(sliderFilterf).slider({
        range: true,
        min: 1,
        max: 101,
        values: [1, 101],
        slide: function (event, ui) {
            $(sliderMinf).text(ui.values[0]);
            $(sliderMaxf).text(ui.values[1]);
        }
    });

});
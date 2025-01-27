(function($) {

    $(window).on('load resize', function () {

        /**
         *  set adaptive viewport on screens smaller then 640 and bigger than 1200
         *  set static viewport on screens between 641px and 1199
         */

        var mediaCheckMobile = window.matchMedia('(max-width: 640px)');
        var mediaCheckTablet = window.matchMedia('(min-width: 641px) and (max-width: 1199px)');
        var mediaCheckDesktop = window.matchMedia('(min-width: 1441px)');
        var mediaCheckMini = window.matchMedia('(min-width: 1440px)');
        var viewport = document.getElementById('viewport');

        if (mediaCheckMobile.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        } else if (mediaCheckTablet.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
        else if (mediaCheckDesktop.matches) {
            viewport.setAttribute('content', 'width=device-width, initial-scale=1.0');
        }
    });
})(jQuery);
window.onload = function() {

    function GetIEVersion() {
        var sAgent = window.navigator.userAgent;
        var Idx = sAgent.indexOf("MSIE");

        // If IE, return version number.
        if (Idx > 0)
            return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

        // If IE 11 then look for Updated user agent string.
        else if (!!navigator.userAgent.match(/Trident\/7\./))
            return 11;

        else
            return 0; //It is not IE
    }

    if (GetIEVersion() > 0) {
        $('body').addClass('internet-explorer');
    } else {
        return;
    }
};
(function($) {

    function smoothScroll(link) {

        $(link).click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top - 80
                    }, 600);
                    return false;
                }
            }
        });
    }

    smoothScroll( '.link-to-block' );

})(jQuery);
$(document).ready(function() {

    $('.slider_act').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        speed: 1500,
        dots: false,
        prevArrow: $('#btn_prev'),
        nextArrow: $('#btn_next'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slider_act')
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var indexSlide = nextSlide + 1;
            $('.b-slide-number').text(indexSlide);
        });

    $('.slider_pop').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: true,
        speed: 1500,
        dots: false,
        prevArrow: $('#btn_prev_p'),
        nextArrow: $('#btn_next_p'),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $('.slider_pop')
        .on('beforeChange', function(event, slick, currentSlide, nextSlide){
            var indexSlide = nextSlide + 1;
            $('.p-slide-number').text(indexSlide);
        });

    $('.dop_orders_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        speed: 1500,
        dots: false,
        prevArrow: $('#btn_prev'),
        nextArrow: $('#btn_next'),
        responsive: [
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });


});
(function($) {
    var hamburger = $('.hamburger');
    var body = $('body');

    function hamburgerOpen() {
        hamburger.addClass('hamburger_active');
        $('body').addClass('stopped');
        $('.menu_opener').addClass('menu-mobile_opened');
    }

    function hamburgerClose() {
        hamburger.removeClass('hamburger_active');
        $('body').removeClass('stopped');
        $('.menu_opener').removeClass('menu-mobile_opened');
    }

    hamburger.on('click', function () {
        if ( $(this).hasClass('hamburger_active') ) {
            hamburgerClose()
        } else {
            hamburgerOpen();
        }
    });
})(jQuery);
(function($) {
  var slinky = $('.js-menu').slinky({
    title: true
  });
})(jQuery);
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

    $('.open_search').on('click', function () {
        $('.panel_search').addClass('ps_opened');
    });

    $('.close_search').on('click', function () {
        $('.panel_search').removeClass('ps_opened');
    });
})(jQuery);
(function($) {

    $('.tabs').each( function() {

        $('.tabs__buttons').on('click', '.tabs__btn:not(.tabs__btn_active)', function () {
            $(this).addClass('tabs__btn_active').siblings().removeClass('tabs__btn_active');
            $(this).closest('.tabs').find('.tabs__item').removeClass('active').eq($(this).index()).addClass('active');
        });
    });

})(jQuery);

(function($) {
    $('#search').click( function() {
        $('.search_box').addClass('search_opened');
    });

    $('.close_search').click( function() {
        $('.search_box').removeClass('search_opened');
    });
})(jQuery);
$(document).ready(function() {
    $(".fancybox").fancybox();
});

// Fires whenever a player has finished loading
function onPlayerReady(event) {
    event.target.playVideo();
}

// Fires when the player's state changes.
function onPlayerStateChange(event) {
    // Go to the next video after the current one is finished playing
    if (event.data === 0) {
        $.fancybox.next();
    }
}


// The API will call this function when the page has finished downloading the JavaScript for the player API
function onYouTubePlayerAPIReady() {

    // Initialise the fancyBox after the DOM is loaded
    $(document).ready(function() {
        $(".fancybox-video")
            .attr('rel', 'gallery')
            .fancybox({
                openEffect  : 'none',
                closeEffect : 'none',
                nextEffect  : 'none',
                prevEffect  : 'none',
                padding     : 0,
                margin      : 50,
                beforeShow  : function() {
                    // Find the iframe ID
                    var id = $.fancybox.inner.find('iframe').attr('id');

                    // Create video player object and add event listeners
                    var player = new YT.Player(id, {
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });
                }
            });
    });

}
$('.dropdown').each(function () {

    // Cache the number of options
    var $dropdown = $(this),
        $dropdowns = $('.dropdown').not(this),
        $dropdownText = $dropdown.find('.dropdown__text'),
        $dropdownList = $dropdown.find('.dropdown__list'),
        $dropdownListItems = $dropdown.find('.dropdown__item');

    // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
    $dropdown.on('click', function(e) {
        e.stopPropagation();
        $dropdowns.removeClass('dropdown_opened');
        $dropdowns.find('.dropdown__list').slideUp(250);

        if ($dropdown.hasClass('dropdown_opened')) {
            $dropdown.removeClass('dropdown_opened');
            $dropdown.find('.dropdown__list').slideUp(250);
        } else {
            $dropdown.addClass('dropdown_opened');
            $dropdown.find('.dropdown__list').slideDown(250);
        }
    });

    // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
    // Updates the select element to have the value of the equivalent option
    $dropdownListItems.click(function(e) {
        e.stopPropagation();
        $dropdownText.text($(this).text());
        $dropdown.removeClass('dropdown_opened');
        $dropdownList.slideUp(150);
    });

    // Hides the unordered list when clicking outside of it
    $(document.body).click( function() {
        $dropdown.removeClass('dropdown_opened');
        $dropdownList.slideUp(150);
    });
});
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
$(document).ready(function() {
    var scrolled;
    window.onscroll = function () {
        scrolled = window.pageYOffset || document.documentElement.scrollTop;
        if (scrolled > 80) {
            $(".panel").addClass('panel_open')
        }
        if (120 > scrolled) {
            $(".panel").removeClass('panel_open')
        }
    }
});
(function($) {

    $('.sticky').hcSticky({
        top: 120,
        bottomEnd: 40,
        className: 'is-sticky',
        wrapperClassName: 'wrapper-sticky'
    });

})(jQuery);
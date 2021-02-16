(function ($) {
    'use strict';

    jQuery(window).load(function () {
        wgl_first_visit_init();
        wgl_toolbar_init();
    });

    function wgl_toolbar_init() {
        var wglScroll;
        var timer;

        jQuery('.wgl-toolbar__toggle-element').on('click tap', function () {
            wglScroll = jQuery(window).scrollTop();

            clearTimeout(timer);
            var s = jQuery(this).closest('.wgl-envato-toolbar');

            if (s.hasClass('opened')) {
                s.removeClass('opened');
            } else {
                s.addClass('opened');
                timer = setTimeout(function () {
                    jQuery('.wgl-envato-toolbar').removeClass('active');
                }, 450);

                jQuery(window).scroll(function () {
                    if (450 < Math.abs(jQuery(this).scrollTop() - wglScroll)) {
                        s.removeClass('opened');
                        clearTimeout(timer);
                    }
                });
            }
        });

        jQuery('.wgl-toolbar__overlay').on('click tap', function () {
            jQuery('.wgl-envato-toolbar').toggleClass('opened');

            clearTimeout(timer);
            timer = setTimeout(function () {
                jQuery('.wgl-envato-toolbar').removeClass('active');
            }, 450);
        });

        new PerfectScrollbar('#wgl-toolbar__container', {
            wheelSpeed: 6,
            suppressScrollX: true,
        });
    }

    function wgl_first_visit_init() {
        var wglScroll = jQuery(window).scrollTop();

        jQuery(window).scroll(function () {
            if (400 < Math.abs(jQuery(this).scrollTop() - wglScroll)) {
                if (!jQuery('.wgl-envato-toolbar').hasClass('opened')) {
                    jQuery('.wgl-envato-toolbar').addClass('active');
                }
            }
        });
    }
})(jQuery);

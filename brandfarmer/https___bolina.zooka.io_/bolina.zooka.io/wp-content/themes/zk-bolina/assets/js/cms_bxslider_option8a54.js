(function ($) {
    $(document).ready(function () {
        var random_start = (parseInt(cms_carousel_v3.random_start) == 1) ? true : false;
        var show_pager = (parseInt(cms_carousel_v3.show_pager) == 1) ? true : false;
        var show_controls = (parseInt(cms_carousel_v3.show_controls) == 1) ? true : false;
        var auto_transition = (parseInt(cms_carousel_v3.auto_transition) == 1) ? true : false;
        var auto_start = (parseInt(cms_carousel_v3.auto_start) == 1) ? true : false;

        $('.cms-carousel-v3').bxSlider({
            mode: cms_carousel_v3.style_mode,
            slideWidth: parseInt(cms_carousel_v3.slide_width),
            minSlides: parseInt(cms_carousel_v3.min_slides),
            maxSlides:  parseInt(cms_carousel_v3.max_slides),
            moveSlides: parseInt(cms_carousel_v3.move_slides),
            speed:  parseInt(cms_carousel_v3.speed_slides),
            slideMargin:  parseInt(cms_carousel_v3.slide_margin),
            startSlide:  parseInt(cms_carousel_v3.start_slide),
            randomStart: random_start,
            pager: show_pager,
            controls: show_controls,
            auto: auto_transition,
            autoStart: auto_start,
            nextText:'',
            prevText:''
        });

        $('.pager-vertical-left').parent().parent().find('.bx-has-pager').addClass('vertical-left');
        $('.pager-vertical-right').parent().parent().find('.bx-has-pager').addClass('vertical-right');
    });

})(jQuery)

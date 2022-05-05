(function ($) {
    "use strict";
    $(document).ready(function () {

        var gallery = (parseInt(cms_carousel.gallery_slide) == 1) ? true : false;
        var auto = (parseInt(cms_carousel.auto_loop) == 1) ? true : false;
        var loop = (parseInt(cms_carousel.loop_item) == 1) ? true : false;
        var enableDrag = (parseInt(cms_carousel.mouse_drag) == 1) ? true : false;
        var vertical = (parseInt(cms_carousel.vertical_slide) == 1) ? true : false;

        $(".lightSlider").lightSlider({
            item: parseInt(cms_carousel.number_item),
            slideMove: parseInt(cms_carousel.slide_move),
            thumbItem: parseInt(cms_carousel.thumb_item),
            slideMargin: parseInt(cms_carousel.slide_margin),
            galleryMargin: parseInt(cms_carousel.gallery_margin),
            thumbMargin: parseInt(cms_carousel.thumb_margin),
            speed: parseInt(cms_carousel.speed_slide),
            verticalHeight: parseInt(cms_carousel.vertical_height),
            vThumbWidth: parseInt(cms_carousel.vertical_thumb_width),
            gallery: gallery,
            auto: auto,
            loop: loop,
            enableDrag: enableDrag,
            vertical: vertical,
            onSliderLoad: function () {
                $('#lightSlider').removeClass('cS-hidden');
            }
        });
    });
})(jQuery)
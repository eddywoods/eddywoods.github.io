jQuery(document).ready(function ($) {
    "use strict";
    $.noConflict();
    /* window */
    var window_width, window_height, scroll_top;

    /* admin bar */
    var adminbar = $('#wpadminbar');
    var adminbar_height = 0;

    /* header menu */
    var header = $('#cshero-header .wrap-navigation'),
        header_height = 0;
    var header_top = 0;
    var sliderShowHeight = $('.slider-show').outerHeight();
    /* get top header menu */
    header_top = header.outerHeight() > 0 ? header.outerHeight() - adminbar_height + sliderShowHeight : 0;

    cms_same_height_potfolio();
    popup_position_potfolio();
    cms_sameheight('.same-height .wpb_column');

    /**
     * @since 2.0.0
    */
    var header_top_area = $('.header-top'),
        header_top_area_h = 0;

    /**
     * window load event.
     *
     * Bind an event handler to the "load" JavaScript event.
     * @author Fox
     */
    $(window).load(function () {

        /** current scroll */
        scroll_top = $(window).scrollTop();

        /** current window width */
        window_width = $(window).width();

        /** current window height */
        window_height = $(window).height();

        /* get admin bar height */
        adminbar_height = adminbar.length > 0 ? adminbar.outerHeight(true) : 0;

        header_top_area_h = header_top_area > 0 ? header_top_area.outerHeight() + 20 : 0;
        header_height = header.outerHeight() > 0 ? header.outerHeight() : 0;

        /* check sticky menu. */
        if (CMSOptions.menu_sticky == '1') {
            cms_stiky_menu(scroll_top);
        }

        /* check mobile menu */
        cms_mobile_menu();

        /* check back to top */
        if (CMSOptions.back_to_top == '1') {
            /* add html. */
            $('body').append('<div id="back_to_top" class="back_to_top"><span class="go_up"><i style="" class="fa fa-arrow-up"></i></span></div><!-- #back-to-top -->');
            cms_back_to_top();
        }

        /* Potfolio */
        cms_same_height_potfolio();
        popup_position_potfolio();

        /* Row same height */
        cms_sameheight('.same-height .wpb_column');

        /* @since 2.0.0  */
        cms_auto_video_width();
        cms_header_position();
        $('.main-canvas').css('top', adminbar_height);
    });

    /**
     * resize event.
     *
     * Bind an event handler to the "resize" JavaScript event, or trigger that event on an element.
     * @author Fox
     */
    $(window).resize(function (event, ui) {
        /* Potfolio */
        cms_same_height_potfolio();
        popup_position_potfolio();

        /* Row same height */
        cms_sameheight('.same-height .wpb_column');

        /** current window width */
        window_width = $(event.target).width();

        /** current window height */
        window_height = $(window).height();

        adminbar_height = adminbar.length > 0 ? adminbar.outerHeight(true) : 0;
        header_top_area_h = header_top_area > 0 ? header_top_area.outerHeight() + 20 : 0;
        header_height = header.outerHeight() > 0 ? header.outerHeight() : 0;

        /** current scroll */
        scroll_top = $(window).scrollTop();

        /* check sticky menu. */
        if (CMSOptions.menu_sticky == '1') {
            //cms_stiky_menu(scroll_top);
        }

        /* check mobile menu */
        cms_mobile_menu();

        /* @since 2.0.0 */
        cms_auto_video_width();
        cms_header_position();
        $('.main-canvas').css('top', adminbar_height);
    });

    /**
     * scroll event.
     *
     * Bind an event handler to the "scroll" JavaScript event, or trigger that event on an element.
     * @author Fox
     */
    var lastScrollTop = 0;
    $(window).scroll(function () {
        /** current scroll */
        scroll_top = $(window).scrollTop();

        /** check scroll up or down. */
        if (scroll_top < lastScrollTop) {
            /* scroll up. */
            //console.log('up');
        } else {
            /* scroll down. */
            //console.log('down');
        }

        lastScrollTop = scroll_top;

        /* check sticky menu. */
        if (CMSOptions.menu_sticky == '1') {
            cms_stiky_menu();
        }

        /* check back to top */
        cms_back_to_top();
        /* Header fixed adminbar */
    });
    
    /**
     * Stiky menu
     *
     * Show or hide sticky menu.
     * @author Fox
     * @since 1.0.0
     */
    function cms_stiky_menu() {
        if (header_top > 0 && header_top <= scroll_top) {
            switch (true) {
                case (window_width > 992):
                    header.addClass('header-fixed').css('top',adminbar_height);
                    break;
                case ((window_width <= 992 && window_width >= 768) && (CMSOptions.menu_sticky_tablets == '1')):
                    header.addClass('header-fixed');
                    break;
                case ((window_width <= 768) && (CMSOptions.menu_sticky_mobile == '1')):
                    header.addClass('header-fixed');
                    break;
            }
        } else {
            header.removeClass('header-fixed');
        }
    }
    /**
     * Header ontop / sticky position
     * fixed for has Header Top Area
     * Show or hide sticky menu.
     * @author Chinh Duong Manh
     * @since 2.0.0
     */
     function cms_header_position(){
        $('#cshero-header').css('top', header_top_area_h);
     }
    /**
     * Mobile menu
     *
     * Show or hide mobile menu.
     * @author Fox
     * @since 1.0.0
     */

    $('#cshero-menu-mobile').click(function () {
        var navigation = $(this).parents('#cshero-header').find('#cshero-header-navigation .main-navigation');
        $(this).parents('#cshero-header').find('#cshero-header-navigation').slideToggle('500');
        $(this).toggleClass('active');
        if (!navigation.hasClass('show-menu')) {
            navigation.addClass('show-menu');
        } else {
            navigation.removeClass('show-menu');
        }

    });
    
    /* check mobile screen. */
    function cms_mobile_menu() {
        var header = $('#cshero-header'),
            navigation = $('#cshero-header-navigation');
        /* active mobile menu. */
        switch (true) {
            case (window_width < 992 && window_width > 768):
                header.removeClass('phones-nav').addClass('tablets-nav');
                /* */
               // cms_mobile_menu_group();
                break;
            case (window_width <= 768):
                header.removeClass('tablets-nav').addClass('phones-nav');
                break;
            default:
                header.removeClass('mobile-nav tablets-nav show-menu');
                header.find('li').removeClass('mobile-group');
                navigation.css('display','');
                break;
        }
    }

    /**
     * Post Like.
     *
     * @author Fox
     * @since 1.0.0
     */

    var like_click = 0;

    $('body').on('click', '.cms-post-like', function () {
        "use strict";
        /* get post id. */
        var bt_like = $(this);

        var post_id = bt_like.attr('data-id');

        if (post_id != undefined && post_id != '' && like_click == 0) {
            /* add like. */
            $.post(ajaxurl, {
                'action': 'cms_post_like',
                'id': post_id
            }, function (response) {
                if (response != '') {
                    bt_like.find('i').attr('class', 'icon-heart')
                    bt_like.find('span').html(response);
                    like_click = 0;
                }
            });
        }

        /* limit click. */
        like_click++;

    });
    /**
     * Back To Top
     *
     * @author Fox
     * @since 1.0.0
     */
    $('body').on('click', '#back_to_top', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1500);
    });

    /* show or hide buttom  */
    function cms_back_to_top() {
        /* back to top */
        if (scroll_top < window_height) {
            $('#back_to_top').addClass('off').removeClass('on');
        } else {
            $('#back_to_top').removeClass('off').addClass('on');
        }
    }

    /* Start scroll effect */
    if ($(window).width()) {
        new WOW().init();
    }

    /* Image popups */
    $('.button-popup').magnificPopup({
        type: 'image',
        removalDelay: 500,
        callbacks: {
            beforeOpen: function () {
                this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        closeOnContentClick: true,
        midClick: true
    });

    /* Video popup */
    $('.video-popup').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                dailymotion: {
                    index: 'dailymotion.com',
                    id: function (url) {
                        var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
                        if (m !== null) {
                            if (m[4] !== undefined) {

                                return m[4];
                            }
                            return m[2];
                        }
                        return null;
                    },
                    src: 'http://www.dailymotion.com/embed/video/%id%'
                },
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: '//www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: '/',
                    src: '//player.vimeo.com/video/%id%?autoplay=1'
                },
                gmaps: {
                    index: '//maps.google.',
                    src: '%id%&output=embed'
                }
            }
        },
    });

    /* Row same height */

    function cms_sameheight(container) {

        if ($(window).width() >= 768) {
            var currentTallest = 0,
                currentRowStart = 0,
                rowDivs = new Array(),
                $el,
                topPosition = 0;
            $(container).each(function () {

                $el = $(this);
                $($el).height('auto')
                topPosition = $el.position().top;
                if (currentRowStart != topPosition) {
                    for (var currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                        rowDivs[currentDiv].height(currentTallest);
                    }
                    rowDivs.length = 0; // empty the array
                    currentRowStart = topPosition;
                    currentTallest = $el.height();
                    rowDivs.push($el);
                } else {
                    rowDivs.push($el);
                    currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
                }
                for (var currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
            });
        }
    }
    var inner_column_height = $('.same-height > .wrapper-content').parent().parent().height();
    $('.wrapper-content').css({height:inner_column_height+'px'})
    $('.same-height .wrapper-content').each(function () {
        var inner_column_height = $(this).parent().parent().height();
        $(this).css({
            height: inner_column_height+'px'
        })
    })


    /* Add placeholder */
    $(".comment-form-comment textarea").attr("placeholder", "Comment");
    $("input[name='s']").attr("placeholder", "Search");
    $("input#frm-email").attr("placeholder", "Enter your e-mail...");
    $("input#author").attr("placeholder", "Enter your name...");
    $("input#email").attr("placeholder", "Enter your e-mail...");
    $("input#url").attr("placeholder", "Website");

    /* Change text subscribe */
    if ($('input').hasClass('subscribeButton')) {
        document.getElementsByClassName("subscribeButton")[0].value = "Submit";
    }

    /* Move element form comment */
    $('.comment-body').each(function (index, el) {
        $(this).find('.reply').detach().appendTo($(this).find('.comment-meta'));
    });

    /* Check ie */
    var ie = $.browser.version;
    if ($.browser.msie && parseInt($.browser.version, 10) === 9) {
        $('body').addClass('ie9');
    }
    

    /* Potfolio */
    function cms_same_height_potfolio() {
        var center_gird_item = $('.template-cms_grid--layout1 .center-gird .cms-grid-item');
        var outer_most = $('.template-cms_grid--layout1 .cms-grid .outer-most .cms-grid-item');
        var first_outer_most_img = $('.template-cms_grid--layout1 .cms-grid .outer-most.fisrt-row .cms-grid-item img');
        var last_outer_most_img = $('.template-cms_grid--layout1 .cms-grid .outer-most.last-row .cms-grid-item img');
        var center_gird_height = $('.template-cms_grid--layout1 .center-gird').height() - 5;
        var last_grid_height = $('.template-cms_grid--layout1 .center-gird .cms-grid-item:last-child img').height();
        center_gird_item.css({
            height: last_grid_height + 'px',
        });
        outer_most.css({
            height: center_gird_height + 'px',
        });
        last_outer_most_img.css({
            height: center_gird_height + 'px',
        });
        first_outer_most_img.css({
            height: center_gird_height + 'px',
        });
    }

    function popup_position_potfolio() {
        $('.cms-grid-wraper.style1 .cms-grid-item').each(function (index, el) {
            var primary_height = $(this).find('.primary-content').outerHeight() - 2;
            $(this).find('.popup').css({
                bottom: primary_height + 'px'
            });
        });
        $('.cms-grid-wraper.style2 .cms-grid-item').each(function (index, el) {
            var primary_height = $(this).find('.primary-content').outerHeight() - 2;
            $(this).find('.popup').css({
                bottom: primary_height + 'px'
            });
        });
    }

    /* Woocomece*/
    $('body').on('click', 'input.minus', function () {

        var el = $(this).parent().find('input[type="number"]');
        var num = 0;

        if (el.val() != '') {
            num = parseInt(el.val());
        }

        num--;

        $(this).parent().find('input[type="number"]').val(num);
    });
    $('body').on('click', 'input.plus', function () {

        var el = $(this).parent().find('input[type="number"]');
        var num = 0;

        if (el.val() != '') {
            num = parseInt(el.val());
        }

        num++;

        $(this).parent().find('input[type="number"]').val(num);
    });

    /* Move add to add to cart button*/
    $('.cshero-carousel-item-wrap').each(function (index, el) {
        $(this).find('.cshero-add-to-cart').detach().appendTo($(this).find('.cshero-carousel-item'));
    });

    /* Move count number on categories product */
    $('.product-categories .cat-item').each(function (index, el) {
        $(this).find('.count').detach().appendTo($(this).find('a'));
    });

    /* Remove br in form comment*/
    $('.comment-body').find('br').remove();

    /* Fix active filter grid best seller product */
    $('.template-cms_grid--best-sellers-product .cms-grid-filter a').click(function () {
        var el = $('.template-cms_grid--best-sellers-product .cms-grid-filter a');
        if (el.hasClass('active')) {
            el.removeClass('active');
        }
    })

    /* Appen parent i in VC accordion */
    $(".vc_tta-style-classic .vc_tta-panel-title a i").wrap(function () {
        return '<span class="icon"></span>';
    });

    /* Page Modern Portfolio */

    var menu_height = 0;
    if($(window).width() >=1300 && $(window).width() < 1919){
        menu_height = $("#cshero-header.v3 .slider-show").outerHeight() -10;
    }else{
        menu_height = $("#cshero-header.v3 .slider-show .rev_slider_wrapper ").outerHeight();
    }

    $('#cshero-header.v3 .main-menu').css({
        height: menu_height + 'px',
    });

    /**
     * Auto width video iframe
     * 
     * Youtube, Vimeo.
     * @author Chinh Duong Manh
     * @since 2.0.0
     */
    function cms_auto_video_width() {
        $('.entry-video iframe , .entry-video  video, .entry-video .wp-video-shortcode').each(function(){
            var v_width = $(this).parent().width();
            var v_height = Math.floor(v_width / (16/9));
            $(this).attr('height',v_height + 40).css('height',v_height + 40);
            $(this).attr('width',v_width).css('width',v_width);
        });
        $('.video-item').each(function(){
            var v_width = $(this).parent().width();
            var v_height = Math.floor(v_width / (16/9));
            $(this).css('height',v_height);
            $(this).css('width',v_width);
        });
        $('.entry-content iframe , .entry-content  video, .entry-content .wp-video-shortcode').each(function(){
            var v_width = $(this).parent().width();
            var v_height = Math.floor(v_width / (16/9));
            $(this).attr('height',v_height + 40).css('height',v_height + 40);
            $(this).attr('width',v_width).css('width',v_width);
        });
    }

    /**
     * Scroll page 
     * @author Chinh Duong Manh
     * @since 2.0.0
    */
    $('body').on('click', '.cms-scroll, .onepage, .woocommerce-review-link', function () {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({scrollTop: target.offset().top - header_height}, 750);
            return false;
        }
    });
});
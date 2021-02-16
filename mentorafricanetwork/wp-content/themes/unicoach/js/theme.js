"use strict";

is_visible_init();
unicoach_slick_navigation_init();

jQuery(document).ready(function($) {
    unicoach_sticky_init();
    unicoach_search_init();
    unicoach_side_panel_init();
    unicoach_mobile_header();
    unicoach_woocommerce_helper();
    unicoach_woocommerce_login_in();
    unicoach_init_timeline_appear();
    unicoach_accordion_init();
    unicoach_services_accordion_init();
    unicoach_progress_bars_init();
    unicoach_carousel_slick();
    unicoach_image_comparison();
    unicoach_counter_init();
    unicoach_countdown_init();
    unicoach_img_layers();
    unicoach_page_title_parallax();
    unicoach_extended_parallax();
    unicoach_portfolio_parallax();
    unicoach_message_anim_init();
    unicoach_scroll_up();
    unicoach_link_scroll();
    unicoach_skrollr_init();
    unicoach_sticky_sidebar();
    unicoach_videobox_init();
    unicoach_parallax_video();
    unicoach_tabs_init();
    unicoach_circuit_service();
    unicoach_select_wrap();
    jQuery( '.wgl_module_title .carousel_arrows' ).unicoach_slick_navigation();
    jQuery( '.wgl-filter_wrapper .carousel_arrows' ).unicoach_slick_navigation();
    jQuery( '.wgl-products > .carousel_arrows' ).unicoach_slick_navigation();
    jQuery( '.unicoach_module_custom_image_cats > .carousel_arrows' ).unicoach_slick_navigation();
    unicoach_scroll_animation();
    unicoach_woocommerce_mini_cart();
    unicoach_text_background();
    unicoach_dynamic_styles();
    unicoach_learnpress_helper();
});

jQuery(window).load(function () {
    unicoach_images_gallery();
    unicoach_isotope();
    unicoach_blog_masonry_init();
    setTimeout(function(){
        jQuery('#preloader-wrapper').fadeOut();
    },1100);

    unicoach_particles_custom();
    unicoach_particles_image_custom();
    unicoach_menu_lavalamp();
    jQuery(".wgl-currency-stripe_scrolling").each(function(){
        jQuery(this).simplemarquee({
            speed: 40,
            space: 0,
            handleHover: true,
            handleResize: true
        });
    })
});

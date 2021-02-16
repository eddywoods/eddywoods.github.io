(function ($) {
    "use strict";

    jQuery(window).on('elementor/frontend/init', function () {
        if (window.elementorFrontend.isEditMode()) {
            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-blog.default',
                function ($scope) {
                    unicoach_parallax_video();
                    unicoach_blog_masonry_init();
                    unicoach_carousel_slick();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-blog-hero.default',
                function ($scope) {
                    unicoach_parallax_video();
                    unicoach_blog_masonry_init();
                    unicoach_carousel_slick();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-carousel.default',
                function ($scope) {
                    unicoach_carousel_slick();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-portfolio.default',
                function ($scope) {
                    unicoach_isotope();
                    unicoach_carousel_slick();
                    unicoach_scroll_animation();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-gallery.default',
                function ($scope) {
                    unicoach_images_gallery();
                    unicoach_carousel_slick();
                    unicoach_scroll_animation();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-progress-bar.default',
                function ($scope) {
                    unicoach_progress_bars_init();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-testimonials.default',
                function ($scope) {
                    unicoach_carousel_slick();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-toggle-accordion.default',
                function ($scope) {
                    unicoach_accordion_init();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-accordion-service.default',
                function ($scope) {
                    unicoach_services_accordion_init();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-team.default',
                function ($scope) {
                    unicoach_isotope();
                    unicoach_carousel_slick();
                    unicoach_scroll_animation();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-tabs.default',
                function ($scope) {
                    unicoach_tabs_init();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-clients.default',
                function ($scope) {
                    unicoach_carousel_slick();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-image-layers.default',
                function ($scope) {
                    unicoach_img_layers();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-video-popup.default',
                function ($scope) {
                    unicoach_videobox_init();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-countdown.default',
                function ($scope) {
                    unicoach_countdown_init();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-time-line-vertical.default',
                function ($scope) {
                    unicoach_init_timeline_appear();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-striped-services.default',
                function ($scope) {
                    unicoach_striped_services_init();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-image-comparison.default',
                function ($scope) {
                    unicoach_image_comparison();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-circuit-service.default',
                function ($scope) {
                    unicoach_circuit_service();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-counter.default',
                function ($scope) {
                    unicoach_counter_init();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-menu.default',
                function ($scope) {
                    unicoach_menu_lavalamp();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-header-search.default',
                function ($scope) {
                    unicoach_search_init();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-header-side_panel.default',
                function ($scope) {
                    unicoach_side_panel_init();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-courses.default',
                function($scope) {
                    unicoach_carousel_slick();
                    unicoach_isotope();
                }
            );

            window.elementorFrontend.hooks.addAction(
                'frontend/element_ready/wgl-courses-alt.default',
                function($scope) {
                    unicoach_carousel_slick();
                    unicoach_isotope();
                }
            );
        }
    });

})(jQuery);

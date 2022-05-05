(function ($) {
    "use strict";
    $(document).ready(function(){
        var $menu = $('.nav-menu');
        $menu.find('ul.sub-menu > li').each(function(){
            var $submenu = $(this).find('>ul');
            if($submenu.length == 1){
                $(this).hover(function(){
                    if($submenu.offset().left + $submenu.width() > $(window).width()){
                        $submenu.addClass('back');
                    }else if($submenu.offset().left < 0){
                        $submenu.addClass('back');
                    }
                }, function(){
                    $submenu.removeClass('back');
                });
            }
        });

        /* Search model */
        $('.search-model .search-button').click(function(){
            var el = $(this).parent().find('.search');    
            if(!el.hasClass('show-search')){
                el.addClass('show-search');
            }else {
                el.removeClass('show-search');
            }

        });

        /* Menu canvas */
        $('.menu-canvas .button-menu').click(function(){
            var el = $(this).parents().find('.main-canvas');    
            if(!el.hasClass('show-menu')){
                el.addClass('show-menu');
            }
        });

        /* Menu canvas close */
        $('.menu-canvas .close-menu').click(function(){
            var el = $(this).parents('.main-canvas');    
            if(el.hasClass('show-menu')){
               el.removeClass('show-menu');
            }
        });

        /* Modern portfolio */
        $('#cshero-header.v3 .cms-menu-toggle').click(function(){
            var el = $(this).parent().find('#cshero-header-navigation');
            if(!el.hasClass('show-menu')){
                el.addClass('show-menu');
            }
        });

        /* Modern portfolio */
        $('#cshero-header.v3 .close-menu').click(function(){
            var el = $(this).parent().parent().parent().find('#cshero-header-navigation');
            if(el.hasClass('show-menu')){
                el.removeClass('show-menu');
            }
        });
    });

    /* Menu one page */
    $('.nav-menu').find('a').addClass('cms-scroll');

})(jQuery);

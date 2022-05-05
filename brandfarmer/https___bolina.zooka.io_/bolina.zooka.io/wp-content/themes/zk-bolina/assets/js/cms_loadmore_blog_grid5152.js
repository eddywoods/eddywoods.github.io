/**
 * Created by Chien on 08/10/2015.
 */
jQuery(document).ready(function($) {
    "use strict";
    var pageNum = parseInt(cms_more_obj.startPage) + 1;
    var total = parseInt(cms_more_obj.total);
    var max = parseInt(cms_more_obj.maxPages);
    var perpage = parseInt(cms_more_obj.perpage);
    var nextLink = cms_more_obj.nextLink;

    $.countPost = function(total,perpage,pageNum){
        var cposts = total-perpage*pageNum;
        if(cposts>perpage){
            //return 'Load More('+perpage+' Of '+cposts+')';
            return 'Show More';
        }
        else{
            return 'Show More';
        }
    }
    $.loadData = function(){
        "use strict";

        $.get(nextLink,function(data){
            // Update page number and nextLink.
            var html='';
            $(data).find('#content > .post-item').each(function(){
                html += $('<div>').append($(this).clone()).html();
            });
            $('.cs_pagination').before(html);
            pageNum++;
            if(nextLink.indexOf('/page/')>-1){
                nextLink = nextLink.replace(/\/page\/[0-9]?/, '/page/'+ pageNum);
            }
            else{
                nextLink = nextLink.replace(/paged=[0-9]?/, 'paged='+ pageNum);
            }

            // Add a new placeholder, for when user clicks again.
            $('#event-load')
                .before('<div class="cms-placeholder-'+ pageNum +'"></div>')
            if(pageNum <= max) {
                $('#event-load a').text($.countPost(total,perpage,pageNum-1));
            } else {
                $('#event-load a').text('No more posts to load.');
            }
            $('#event-load').find('a').data('loading',0);
        });
    }
    if(pageNum <= max) {
        var text=$.countPost(total,perpage,1);
        $('.cs_pagination').append('<div class="cms-placeholder-'+ pageNum +'"></div><p id="event-load"><a data-loading="0" href="#" class="wpb_button_anone wpb_none btn btn-default cms-bounce-to-bottom">'+text+'</a></p>');

    }
    $('#event-load a').click(function(){
        if(pageNum <= max){
            $(this).text('Loading posts...');
            $.loadData();
        }else {
            $('#event-load a').append('.');
        }

        return false;
    });
})
jQuery(document).ready(function($){
	"use strict";
	var pageNum    = [];
 	var total      = [];
	var max        = [];
 	var perpage    = [];
	var nextLink   = [];
	var masonry    = [];
	var cposts     = [];
	var newItems   = [];
	$('.cms-grid-wraper').each(function(){
		var $this = $(this);
		var $masonry_container;
		var html_id = $this.attr('id');
		var cms_variable = window["cms_more_obj" + html_id.replace(new RegExp('-', 'g'),'_')];
		if(typeof cms_variable != 'undefined'){
			 pageNum[html_id]    = parseInt(cms_variable.startPage) + 1;
		 	 total[html_id]      = parseInt(cms_variable.total);
			 max[html_id]        = parseInt(cms_variable.maxPages);
		 	 perpage[html_id]    = parseInt(cms_variable.perpage);
			 nextLink[html_id]   = cms_variable.nextLink;
			 masonry[html_id]    = cms_variable.masonry;
			setInterval(function(){
				jQuery('#main').find('audio,video').mediaelementplayer();

			},3000);
			$.html_idPost = function(total,perpage,pageNum){
				cposts[html_id] = total-perpage*pageNum;
				return 'Show More';
			}
			$.loadData = function(html_id){
				"use strict";
				$.get(nextLink[html_id],function(data){
					// Update page number and nextLink.
					if(masonry[html_id] == 'masonry'){
						var items = $(data).find('#'+html_id + ' .cms-grid-masonry > .cms-grid-item');
						$('#'+html_id).children('.cms-grid-masonry').append(items);
						$(items).imagesLoaded(function(){
							$('#'+html_id).children('.cms-grid-masonry').shuffle('appended',items);
						})
					}
					else{
						newItems[html_id] = $($(data).find('#'+html_id).children('.cms-grid').html());
						$('#'+html_id).children('.cms-grid').append(newItems[html_id]);
					}
					pageNum[html_id]++;
					if(nextLink[html_id].indexOf('/page/') > -1){
						nextLink[html_id] = nextLink[html_id].replace(/\/page\/[0-9]?/, '/page/'+ pageNum[html_id]);
					}
					else{
						nextLink[html_id] = nextLink[html_id].replace(/paged=[0-9]?/, 'paged='+ pageNum[html_id]);
					}
					// Add a new placeholder, for when user clicks again.
					$('#'+html_id +' .cms-load-posts')
						.before('<div class="cms-placeholder-'+ pageNum[html_id] +'"></div>')
			 		// Update the button message.
					if(pageNum[html_id] <= max[html_id]) {
						$('#'+html_id +' .cms-load-posts a').text($.html_idPost(total[html_id],perpage[html_id],pageNum[html_id]-1));
					} else {
						$('#'+html_id +' .cms-load-posts a').text('No more posts to load.');
					}
					$('#'+html_id +' .cms-load-posts').find('a').data('loading',0);
					popup_position_potfolio();
					cms_popup_image();
					/* Grid same height */
					cms_grid_same_height('.template-cms_grid--our-blog2');
				});

			}
			if(pageNum[html_id] <= max[html_id]) {
				var text = $.html_idPost(total[html_id],perpage[html_id],1);
				$('#'+html_id +' .cms_pagination').append('<div class="cms-placeholder-'+ pageNum[html_id] +'"></div><p class="cms-load-posts"><a data-loading="0" href="#" class="wpb_button_anone wpb_none btn btn-default cms-bounce-to-bottom">'+text+'</a></p>');
			}
			$('#'+html_id +' .cms-load-posts a').click(function(){
				if(pageNum[html_id] <= max[html_id]){
					$(this).text('Loading posts...');
					$.loadData(html_id);
				}else {
					$('#'+html_id +' .cms-load-posts a').append('.');
				}
				return false;
			});
		}
	});

	function popup_position_potfolio(){
		$('.cms-grid-wraper.style1 .cms-grid-item').each(function(index, el) {
			var primary_height = $(this).find('.primary-content').outerHeight()-2;
			$(this).find('.popup').css({
				bottom: primary_height+'px'
			});
		});
		$('.cms-grid-wraper.style2 .cms-grid-item').each(function(index, el) {
			var primary_height = $(this).find('.primary-content').outerHeight()-84;
			$(this).find('.popup').css({
				bottom: primary_height+'px'
			});
		});
	}

	/* Grid same height */
	function cms_grid_same_height(group) {
		var max_height = 0;
		if( $(window).width() >= 767) {
			$(group).find('.cms-grid-item .inner-item').each(function () {
				var colum_height = $(this).outerHeight();
				/* get max height. */
				if (max_height < colum_height) max_height = colum_height;
			});
			$(group).find('.cms-grid-item .inner-item').css({
				height: max_height + 'px',
			});
		}
	}

	/* Popup image */
	function cms_popup_image(){
		$('.button-popup').magnificPopup({
			type: 'image',
			removalDelay: 500,
			callbacks: {
				beforeOpen: function() {
					this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
					this.st.mainClass = this.st.el.attr('data-effect');
				}
			},
			closeOnContentClick: true,
			midClick: true
		});
	}
});
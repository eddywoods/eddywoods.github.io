/*!
	Zoom 1.7.21
	license: MIT
	http://www.jacklmoore.com/zoom
*/
!function(d){var n={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};d.zoom=function(o,t,n,e){var i,u,a,c,r,l,m,s=d(o),f=s.css("position"),h=d(t);return o.style.position=/(absolute|fixed)/.test(f)?f:"relative",o.style.overflow="hidden",n.style.width=n.style.height="",d(n).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:n.width*e,height:n.height*e,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(o),{init:function(){u=s.outerWidth(),i=s.outerHeight(),a=t===o?(c=u,i):(c=h.outerWidth(),h.outerHeight()),r=(n.width-u)/c,l=(n.height-i)/a,m=h.offset()},move:function(o){var t=o.pageX-m.left,e=o.pageY-m.top;e=Math.max(Math.min(e,a),0),t=Math.max(Math.min(t,c),0),n.style.left=t*-r+"px",n.style.top=e*-l+"px"}}},d.fn.zoom=function(e){return this.each(function(){var i=d.extend({},n,e||{}),u=i.target&&d(i.target)[0]||this,o=this,a=d(o),c=document.createElement("img"),r=d(c),l="mousemove.zoom",m=!1,s=!1;if(!i.url){var t=o.querySelector("img");if(t&&(i.url=t.getAttribute("data-src")||t.currentSrc||t.src,i.alt=t.getAttribute("data-alt")||t.alt),!i.url)return}a.one("zoom.destroy",function(o,t){a.off(".zoom"),u.style.position=o,u.style.overflow=t,c.onload=null,r.remove()}.bind(this,u.style.position,u.style.overflow)),c.onload=function(){var t=d.zoom(u,o,c,i.magnify);function e(o){t.init(),t.move(o),r.stop().fadeTo(d.support.opacity?i.duration:0,1,!!d.isFunction(i.onZoomIn)&&i.onZoomIn.call(c))}function n(){r.stop().fadeTo(i.duration,0,!!d.isFunction(i.onZoomOut)&&i.onZoomOut.call(c))}"grab"===i.on?a.on("mousedown.zoom",function(o){1===o.which&&(d(document).one("mouseup.zoom",function(){n(),d(document).off(l,t.move)}),e(o),d(document).on(l,t.move),o.preventDefault())}):"click"===i.on?a.on("click.zoom",function(o){return m?void 0:(m=!0,e(o),d(document).on(l,t.move),d(document).one("click.zoom",function(){n(),m=!1,d(document).off(l,t.move)}),!1)}):"toggle"===i.on?a.on("click.zoom",function(o){m?n():e(o),m=!m}):"mouseover"===i.on&&(t.init(),a.on("mouseenter.zoom",e).on("mouseleave.zoom",n).on(l,t.move)),i.touch&&a.on("touchstart.zoom",function(o){o.preventDefault(),s?(s=!1,n()):(s=!0,e(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0]))}).on("touchmove.zoom",function(o){o.preventDefault(),t.move(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}).on("touchend.zoom",function(o){o.preventDefault(),s&&(s=!1,n())}),d.isFunction(i.callback)&&i.callback.call(c)},c.setAttribute("role","presentation"),c.alt=i.alt||"",c.src=i.url})},d.fn.zoom.defaults=n}(window.jQuery);
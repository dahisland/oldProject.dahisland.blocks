// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
function ws_fly(c,a,b){var d=jQuery;var e=d(this);var g={position:"absolute",left:0,top:0,width:"100%",height:"100%",transform:"translate3d(0,0,0)"};var f=d("<div>").addClass("ws_effect").css(g).css({overflow:"visible"}).appendTo(b.parent());this.go=function(n,k,q){e.trigger("effectStart",f);var j=!!c.revers;if(q){if(q>=1){j=1}if(q<=-1){j=0}}var i=-(c.distance||f.width()/4),l=Math.min(-i,Math.max(0,d(window).width()-f.offset().left-f.width())),h=(j?l:i),o=(j?i:l);var p=d(a.get(k)).clone().css(g).css({"z-index":1}).appendTo(f);var m=d(a.get(n)).clone().css(g).css({opacity:0,left:h,"z-index":3}).appendTo(f).show();m.animate({opacity:1},{duration:c.duration,queue:false});m.animate({left:0},{duration:2*c.duration/3,queue:false});setTimeout(function(){var r=b.find("ul").hide();p.animate({left:o,opacity:0},2*c.duration/3,function(){p.remove();e.trigger("effectEnd",n);m.remove()})},c.duration/3);return n}};// -----------------------------------------------------------------------------------
// http://wowslider.com/
// JavaScript Wow Slider is a free software that helps you easily generate delicious 
// slideshows with gorgeous transition effects, in a few clicks without writing a single line of code.
// Generated by WOW Slider 5.6
//
//***********************************************
// Obfuscated by Javascript Obfuscator
// http://javascript-source.com
//***********************************************
jQuery("#wowslider-container1").wowSlider({effect:"fly",prev:"",next:"",duration:20*100,delay:29*100,width:610,height:343,autoPlay:true,playPause:false,stopOnHover:false,loop:false,bullets:0,caption:false,captionEffect:"slide",controls:true,onBeforeStep:0,images:0});
// JavaScript Document

$(document).ready (function () {
	
	//Anim du carré haut-gauche
	
	$('.illu').click(function(){
		
		$(this).animate({"width" : "0px" , "height" : "0px"},1000);
		$('.anim').animate({"width" : "300px" , "height" : "200px"},1000);
		$('.xtras').animate({"width" : "300px" , "height" : "95px"},1000);
		
		$('#hg').animate({"width" : "0px" , "height" : "0px" , "opacity" : "0"},1000);
		$('#hd').animate({"top" : "600px" , "left" : "0px" , "width" : "300px" , "height" : "200px" , "opacity" : "1"},1000);
		$('#bg').animate({"top" : "600px" , "left" : "310px" , "width" : "300px" , "height" : "95px" , "opacity" : "1"},1000);
		$('#bd').animate({"top" : "705px" , "width" : "300px" , "height" : "95px"},1000);
		
		//Anim de la galerie
		$('#wowslider-container1').animate({"width" : "610px" , "height" : "343px" , "opacity" : "1"},1000);

		//Anim de la video
		$('#iframe').animate({"width" : "0px" , "height" : "0px" , "opacity" : "0" , "z-index" : "0"},1000);

		//Anim contenu Extras
		$('#contenux').animate({"width" : "0px" , "height" : "0px" , "opacity" : "0"},1000);
	
		//Anim footer
		$('#footer').animate({"top" : "820px"},1000);
	
	});
	
	//Anim du carré haut-droite

	$('.anim').click(function(){
		
		$(this).animate({"width" : "0px" , "height" : "0px"},1000);
		$('.illu').animate({"width" : "300px" , "height" : "200px"},1000);
		$('.xtras').animate({"width" : "300px" , "height" : "95px"},1000);
		
		$('#hg').animate({"top" : "600px" , "left" : "0px" ,"width" : "300px" , "height" : "200px" , "opacity" : "1"},1000);
		$('#hd').animate({"width" : "0px" , "height" : "0px" , "opacity" : "0"},1000);
		$('#bg').animate({"top" : "600px" , "left" : "310px" , "width" : "300px" , "height" : "95px" , "opacity" : "1"},1000);
		$('#bd').animate({"top" : "705px" , "width" : "300px" , "height" : "95px"},1000);
		
		//Anim de la galerie
		$('#wowslider-container1').animate({"width" : "0px" , "height" : "0px" , "opacity" : "0"},1000);

		//Anim de la video
		$('#iframe').animate({"width" : "610px" , "height" : "343px" , "opacity" : "1" , "z-index" : "500" },1000);

		//Anim contenu Extras
		$('#contenux').animate({"width" : "0px" , "height" : "0px" , "opacity" : "0"},1000);
		
		//Anim footer
		$('#footer').animate({"top" : "820px"},1000);

	});

	
	//Anim du carré bas-gauche

	$('.xtras').click(function(){
		
		$(this).animate({"width" : "0px" , "height" : "0px"},1000);
		$('.illu').animate({"width" : "300px" , "height" : "200px"},1000);
		$('.anim').animate({"width" : "300px" , "height" : "200px"},1000);
		
		$('#hg').animate({"top" : "600px" , "left" : "0px" ,"width" : "300px" , "height" : "200px" , "opacity" : "1"},1000);
		$('#hd').animate({"top" : "600px" , "left" : "310px" , "width" : "300px" , "height" : "95px" , "opacity" : "1"},1000);
		$('#bg').animate({"top" : "600px" , "left" : "310px" , "width" : "0px" , "height" : "0px" , "opacity" : "0"},1000);
		$('#bd').animate({"top" : "705px" , "width" : "300px" , "height" : "95px"},1000);
		
		//Anim de la galerie
		$('#wowslider-container1').animate({"width" : "0px" , "height" : "0px" , "opacity" : "0"},1000);

		//Anim de la video
		$('#iframe').animate({"width" : "0px" , "height" : "0px" , "opacity" : "0" , "z-index" : "0"},1000);

		//Anim contenu Extras
		$('#contenux').animate({"width" : "570px" , "height" : "304px" , "opacity" : "1"},1000);
		
		//Anim footer
		$('#footer').animate({"top" : "820px"},1000);
		
	});

});
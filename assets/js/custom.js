$(document).ready(function(){
	$().click(function(){
			$().slideToggle(700);
			return false;
		});
	//On Scroll Functionality
	$(window).scroll( () => {
	    var windowTop = $(window).scrollTop();
	    windowTop > 40 ? $('.header-area').addClass('navShadow') : $('.header-area').removeClass('navShadow');
	  });

	  $('.nav-icon').click(function(){
			$('.default-menu-left').toggleClass('off-canvas2');
			return false;
		});	
		


});




		





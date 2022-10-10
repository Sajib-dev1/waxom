$(function () {
	// ==========water mark plagin start=============
	$('#banner').ripples({
		resolution: 512,
		dropRadius: 20,
		perturbance: 0.04,
	});
	// ==========water mark plagin end===============
	$('.blog_slide').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		pauseOnHover: false,
		prevArrow: ".right_ang",
		nextArrow: ".left_ang",
		responsive: [{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: false,
				}
			},

		]
	});

	// ==========wow plagin end======================
	new WOW().init();
	// ==============wow plagin start================

	// ==============counter part start==============
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});
	// ==============counter part end================
	var mixer = mixitup('.box');
	// ===============back to top====================
	$('.back-to-top') .on('click',function(){
		$('html,body').animate({scrollTop:0},1000)
	});

	$(window).on('scroll',function(){
		var scroll = $(this).scrollTop()
		if(scroll >50){
			$('.back-to-top').fadeIn(500)
		}
		else{
			$('.back-to-top') .fadeOut(500)
		}
		if(scroll>50){
			$('.navbar').addClass('sticke-menu')
		}
		else{
			$('.navbar').removeClass('sticke-menu')
		}
	});
	// ===============back to top====================
	// ===============side par start==================
	$('.show').on('click',function(){
		$('.sidebar-bar').css('left','0px')
	});
	$('.cross').on('click',function(){
		$('.sidebar-bar').css('left','-100%')
	});
	$('.nav-link').on('click',function (){
		$('.sidebar-bar').css({left:'-100%'});
	});
	// ===============side par end====================
	// ===============nav part start==================
	$('#nav').onePageNav({
		currentClass: 'active',
		changeHash: false,
		scrollSpeed: 750,
		scrollThreshold: 0.5,
		filter: '',
		easing: 'swing'
	});
	// ===============nav part end====================
});
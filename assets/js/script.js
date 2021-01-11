(function($) {
	"use strict";
	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 700) {
				siteHeader.addClass('fixed-header');
				scrollLink.fadeIn(300);
			} else{
				siteHeader.removeClass('fixed-header');
				scrollLink.fadeOut(300);
			}
		}
	}
	headerStyle();
	//Sticky Header Hide/Show On Scroll
	(function($) {
		var iScrollPos = 0;
		var sticky_header = $('.main-header .sticky-header');
		$(window).scroll(function () {
		    var iCurScrollPos = $(this).scrollTop();
		    if (iCurScrollPos > iScrollPos) {
		        $('.main-header .sticky-header').css({"position": "fixed", "width": "100%", "top": "-120px"});
		    } else {
		        $('.main-header .sticky-header').css({"top": "0"});
		    }
		    iScrollPos = iCurScrollPos;
		});
	})(jQuery);

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-plus"></span></div>');
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){

		var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
		var mobileHeaderContent = $('.main-header .nav-outer .outer-box').html();
		var stickyMenuContent = $('.main-header .nav-outer .main-menu').html();
		$('.mobile-menu').append('<div class="close-btn"><span class="icon fa fa-times"></span></div>');
		$('.mobile-header .nav-outer').append('<div class="mobile-nav-toggler"><span class="icon fa fa-bars"></span></div>');
		$('.mobile-menu .menu-box').append(mobileMenuContent);
		$('.mobile-header .nav-outer').append(mobileHeaderContent);
		$('.sticky-header .main-menu').append(stickyMenuContent);
		$('.sticky-header .main-menu .navbar-collapse').addClass('show');
		$('.mobile-menu .menu-box .navbar-collapse').addClass('show');
		$('.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});

		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	//Single Item Carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop:true,
			margin:0,
			nav:true,
			smartSpeed: 700,
			autoplay: false,
			navText: [ '<span class="fa fa-arrow-left"></span>', '<span class="fa fa-arrow-right"></span>' ],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1024:{
					items:1
				}
			}
		});
	}

	//Make Content Sticky
	if ($('.sticky-sidebar').length) {
	    $('.sidebar-side').theiaStickySidebar({
	      // Settings
	      additionalMarginTop: 60
	    });
	}

	// Custom Select Box
	if ($('.sortby-select').length) {
    	$('.sortby-select').select2();
	}


/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

	$(window).on('scroll', function() {
		headerStyle();
	});

/* ==========================================================================
   When document is loading, do
   ========================================================================== */

	$(window).on('load', function() {
		handlePreloader();
	});


	$(window).on('load', function(){
	  $('.link-scrolling').on('click', function(){
	    const target = $(this).attr('data-target');
      scrollingToTarget(target)
    });

    $('.mobile-menu .link-scrolling').on('click', function() {
      $('body').removeClass('mobile-menu-visible');
      const target = $(this).attr('data-target');
      scrollingToTarget(target)
    });

	  function scrollingToTarget(target){
      $([document.documentElement, document.body]).animate({
        scrollTop: $(target).offset().top
      }, 1500);
    }

  })


})(window.jQuery);

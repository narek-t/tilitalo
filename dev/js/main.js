$(document).ready(function() {
	$('.menu-toggle').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$('.menu').toggleClass('visible');
	});

	$('.services__list .heading').click(function(event) {
		var parentLi = $(this).parents('li');
		if(parentLi.hasClass('active')) {
			parentLi.removeClass('active');
		}else {
			$('.services__list li').removeClass('active');
			parentLi.addClass('active');
		}
	});

	$('.slider-side__inner').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
	    {
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 3,
	        slidesToScroll: 1,
	      }
	    },
	    {
	      breakpoint: 550,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 1,
	      }
	    },
	  ]
	});
	$('.team-slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
	    {
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	      }
	    },
	  ]
	});

	$('.offers__inner').slick({
		infinite: true,
		slidesToShow: 6,
		// autoplay: true,
		prevArrow: false,
		nextArrow: false,
		responsive: [
	    {
	      breakpoint: 1400,
	      settings: {
	        slidesToShow: 3,
	      }
	    },
	    {
	      breakpoint: 1000,
	      settings: {
	        slidesToShow: 2,
	      }
	    },
	    {
	      breakpoint: 540,
	      settings: {
	        slidesToShow: 1,
	      }
	    },
	  ]
	});


	$('.fancybox').fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

	$('.detail-slider').slick({
		infinite: true,
		slidesToShow: 1,
		// responsive: [
	 //    {
	 //      breakpoint: 1000,
	 //      settings: {
	 //        slidesToShow: 1,
	 //        slidesToScroll: 1,
	 //      }
	 //    },
	 //  ]
	});
});
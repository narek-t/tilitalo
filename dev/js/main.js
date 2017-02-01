$(document).ready(function() {
	// $(".intro").vegas({
	// 	animation: 'random',
	// 	transitionDuration: 3000,
	// 	delay: 10000,
	//     slides: [
	//         { src: "/img/top.jpg" },
	//         { src: "/img/top2.jpg" },
	//     ],
	// });

	$('span.vegas-next').on('click', function () {
	    $(".intro").vegas('next');
	});
	$('span.vegas-prev').on('click', function () {
	    $(".intro").vegas('previous');
	});

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

	$('.stage-slider').slick({
		infinite: true,
		slidesToShow: 1,
		dots: true,
		nextArrow: $('.slick-next'),
  		prevArrow: $('.slick-prev'),
	});

	$('.talking-slider').slick({
		focusOnSelect: true,
		centerMode: true,
		centerPadding: '0px',
		// variableWidth: true,
		asNavFor: '.talking-text__slider',
		slidesToShow: 5,
		nextArrow: $('.talking-slick-next'),
  		prevArrow: $('.talking-slick-prev'),
  		responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 3,
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
	$('.talking-text__slider').slick({
		prevArrow: false,
		nextArrow: false,
		asNavFor: '.talking-slider'
	});

	

	var rangeSlider = document.getElementById('range-slider');
	if(rangeSlider) {
		noUiSlider.create(rangeSlider, {
			start: [ 90, 260 ],
			connect: true,
			range: {
				'min': 30,
				'max': 300
			}
		});
		var snapValues = [
		    document.getElementById('range-slider-min'),
		   	document.getElementById('range-slider-max')
		];
		rangeSlider.noUiSlider.on('update', function( values, handle ) {
	    snapValues[handle].innerHTML = values[handle] + ' <span>м<sup>2</sup></span>';
	    // snapInputs[handle].value = values[handle];
	   });
	}



	if(document.getElementById('chronology')) {
		var galleryTop = new Swiper('.chronology-top', {
	        nextButton: '.swiper-next',
	        prevButton: '.swiper-prev',
	        spaceBetween: 10,
	      onSlideChangeEnd: function(swiper){
	            var activeIndex = swiper.activeIndex;
	            $(galleryThumbs.slides).removeClass('is-selected');
	            $(galleryThumbs.slides).eq(activeIndex).addClass('is-selected');
	            galleryThumbs.slideTo(activeIndex,500, false);

	        }

	    });
	    var galleryThumbs = new Swiper('.chronology-bottom', {
	        freeMode: true,
	        centeredSlides: false,
	        slidesPerView: 'auto',
	        onClick: function (swiper, event){
	            var clicked = swiper.clickedIndex;
	            // swiper.activeIndex = clicked; //don't need this
	            // swiper.updateClasses() //don't need this
	            console.log('click')
	       
	            	$(swiper.slides).removeClass('is-selected');
	           		 $(swiper.clickedSlide).addClass('is-selected');
	            	galleryTop.slideTo(clicked,500, false);
	        
	        },
	    });
	    $('.chronology-bottom .swiper-slide:first-child').addClass('is-selected');
	}

	$('a[href*=#order]').on('click', function(event) {
    	event.preventDefault();
    	$('html,body').animate({scrollTop: $(this.hash).offset().top - 74}, 600);
	});


function makeFileList() {
	var input = document.getElementById("filesToUpload");
	var ul = document.getElementById("fileList");
	while (ul.hasChildNodes()) {
		ul.removeChild(ul.firstChild);
	}
	for (var i = 0; i < input.files.length; i++) {
		var li = document.createElement("li");
		li.innerHTML = input.files[i].name + ', ';
		ul.appendChild(li);
	}
	if(!ul.hasChildNodes()) {
		var li = document.createElement("li");
		li.innerHTML = 'Не выбрано ничего';
		ul.appendChild(li);
	}
}

$('#filesToUpload').on('change', function(event) {
	makeFileList();
});

     

});
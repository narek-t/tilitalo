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
});
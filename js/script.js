$(document).ready(function() {
	$('.header__burger').click( function(event) {
		$('.header__burger,.menu__list').toggleClass('active');
		$('body').toggleClass('lock');
	});
	$('.list__item').click( function(event) {
		if(screen.width <= 700)$('.header__burger,.menu__list').removeClass('active');
	});
});

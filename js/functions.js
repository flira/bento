$(function( ) {
	changeMenu( );
});

function changeMenu( ) {
	$(window).scroll(function( ) {
			if($(window).scrollTop( ) > 65) {
				$('header').addClass('small');
				$('div[role=main]').css('padding-top','6.5em');
			} else {
				$('header').removeClass('small');
				$('div[role=main]').css('padding-top','0');
			}
		}
	);	
}
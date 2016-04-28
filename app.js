function focus(elem) {
	$('.focus').removeClass('focus');
	elem.addClass('focus');
}

$(document).ready(function() {

	// Activate modal
	$('#pl1').click(function() {
		$('#modal').removeClass('hidden');
	});

	// close modal
	$('#close').click(function() {
		$('#modal').addClass('hidden');
	});

	// Enter explore
	$('#button').click(function() {
		var scrollX = $('#page2').position().left;
		console.log(scrollX);
		// $('#view').scrollLeft($('#page2').position().left);
		$('#view').css('overflow-x', 'scroll');
		TweenLite.to($('#view'), 0.2, {scrollTo: {x: scrollX}, ease: Power1.easeOut});
		focus($('#page2'));
		$('#view').css('overflow-x', 'hidden');
	});
});
$(document).ready(function() {

	// Make explore pages draggable
	Draggable.create('.explore', {type: 'scrollTop', throwProps: true, edgeResistance: 0.9});

	// Activate modal
	$('#pl1').click(function() {
		$('#modal').removeClass('hidden');
	});

	// close modal
	$('#close').click(function() {
		$('#modal').addClass('hidden');
	});

	// Backtrack to previous page
	$(document).on('click', '.breadcrumb', function(e) {
		e.stopPropagation();
		$(this).removeClass('breadcrumb');
		var scrollX;
		if ($(this).hasClass('page')) {
			scrollX = $(this).position().left;
		} else {
			scrollX = $('#page2').position().left;
		}
		$('#view').css('overflow-x', 'scroll');
		TweenLite.to($('#view'), 0.4, {scrollTo: {x: scrollX}, ease: Power1.easeInOut});
		$('#view').css('overflow-x', 'hidden');
	});

	// Enter explore
	$('#button').click(function(e) {
		e.stopPropagation();
		var scrollX = $('#page2').position().left;
		$('#view').css('overflow-x', 'scroll');
		TweenLite.to($('#view'), 0.3, {scrollTo: {x: scrollX}, ease: Power1.easeInOut});
		$('#view').css('overflow-x', 'hidden');
		$('#modal').addClass('breadcrumb');
	});

	// Reject clicks on dummy cards
	$('.card:not(#series)').click(function(e) {
		e.stopPropagation();
		$('#series').addClass('highlight');
		window.setTimeout(function() { $('#series').removeClass('highlight'); }, 1000);
	});

	// Series click
	$('#series').click(function(e) {
		e.stopPropagation();

		// If breadcrumb, backtrack to previous page
		if ($(this).hasClass('breadcrumb')) {
			e.stopPropagation();
			$(this).removeClass('breadcrumb');
			var scrollX = $('#page2').position().left;
			$('#view').css('overflow-x', 'scroll');
			TweenLite.to($('#view'), 0.4, {scrollTo: {x: '+='+scrollX}, ease: Power1.easeInOut});
			$('#view').css('overflow-x', 'hidden');
		} else {
			var scrollX = $('#page3').position().left;
			$('#view').css('overflow-x', 'scroll');
			TweenLite.to($('#view'), 0.3, {scrollTo: {x: '+='+scrollX}, ease: Power1.easeInOut});
			$('#view').css('overflow-x', 'hidden');
			$('#series').addClass('breadcrumb');
		}

	});

});
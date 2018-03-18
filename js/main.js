$(function(){

	var link = $('.start_test'),
		section = $('.section_2'),
		body = $('body');

	link.on('click', function(){
		body.css({
			'overflow' : 'hidden'
		})
		section.fadeIn(400, function(){
			$(this).css({
				'padding-right' : 0,
				'background-position' : '100% 0px'
			});
			body.css({
				'overflow' : 'auto'
			});
			fly();
		});
	});

	function fly(){
		var plane = $('#plane'),
			offsetBottom = parseInt(plane.css('bottom')),
			offsetLeft = parseInt(plane.css('left'));

		plane.css({
			'left' : ( plane.width() * 5 ),
			'bottom' : ( plane.height() * 5 )
		})
		$('.rules_description').delay(1000).addClass('open');			
	}

})
$(function(){

	var link = $('.start_test'),
		section = $('.section_2'),
		body = $('body');

	$(window).on('load', function(){
		
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

	})

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



/* Активация кнопки */
$(function(){
	var input = $('#site-name'),
		button = $('.send_block').find('button');
		
	input.on('input', function(){
		var value = $(this).val();
		if(value.length > 3) {
			button.removeAttr('disabled');
		} else {
			button.attr('disabled', 'disabled');
		}
	})
})


/* Выпадающее меню в шапке */

$(function(){
	var link = $('.menu_btn'),
		menu = $('.menu_list');

	link.on('click', function(){
		menu.slideToggle(200);
		return false; 
	})


})

/* Боковое меню */
$(function(){
	var link = $('.cat_btn'),
		menu = $('.aside_nav');

	link.on('click', function(){
		menu.slideToggle(200);
		return false; 
	})
})

// Модальное окно
$(function(){
	var modal = $('.modal_results'),
		overlay = $('.overlay'),
		close = modal.find('.close');

	close.on('click', function(){
		modal.add(overlay).fadeOut(500);
	})


})
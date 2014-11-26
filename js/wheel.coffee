---
---

initButtons = ($items)->
	i=0
	for item in $items
		$(item).css('-webkit-transform', "rotate(#{360 / $items.length * i}deg)")
				.find('span').css('-webkit-transform', "rotate(#{-360 / $items.length * i}deg)")
		i++;

$(document).on 'ready', ->
	diameter = $('nav').width()
	$items = $('nav > .item')

	i=0;
	initButtons($items)
	for item in $items
		do (item)->
			$(item).click ->
				$('#home').removeClass 'hide'
				$('body').css('background-color', $(item).find('.circle').css('background-color'))
				$('.display').addClass 'hide'
				navPos = $('nav').position()
				buttonPos = $(@).position()
				buttonWidth = $(@).width()
				$(@).addClass('selected')
					.siblings().removeClass('selected')
				$('.item').addClass('hide').css('-webkit-transform', 'rotate(0)').find('span').css('-webkit-transform', 'rotate(0)')
				$('#current-menu').html $(item).data('name')
			$(item).hover ->
					$('.display').html $(item).data('name')
				,
				->
					$('.display').html ''
		i++;

	$('#home').click ->
		$('body').css('background-color', '#fff')
		$items.removeClass('hide')
		initButtons($items)
		$('.display').removeClass('hide')
		$('#current-menu').html ''
		$(@).addClass 'hide'
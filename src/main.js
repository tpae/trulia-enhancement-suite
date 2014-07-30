
chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
		if (document.readyState === "complete") {
			clearInterval(readyStateCheckInterval);

			$('<div></div>')
				.appendTo('body')
				.addClass('keyboardContainer');

			$('<div></div>')
				.append('<img class="icon">')
				.append('<h3 class="title">Hello World</h3>')
				.appendTo('body')
				.addClass('keyboardWrapper');

			// bind key mapping
			_.each(keyMapping, function(map, key) {
				new Action(key, map);
			});

			// bind tooltips
			_.each(tooltipMapping, function(map, key) {
				$(map.selector).tooltipster({
					theme: 'tooltipster-light',
					position: map.position,
					content: map.content,
					trigger: 'hover'
				});
			});

			console.log("Hot keys are loaded.");
		}
	}, 10);
});

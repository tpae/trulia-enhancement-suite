
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
				new Action(key, _.clone(map));
			});

			console.log("Hot keys are loaded.");
		}
	}, 10);
});

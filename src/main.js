
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
			for(var key in keyMapping) {
				action(key, keyMapping[key]);
			}

			console.log("Hot keys are loaded.");
		}
	}, 10);
});

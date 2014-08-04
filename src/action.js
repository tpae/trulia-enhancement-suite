
function Action(key, map, helper) {
	this.key = key;
	this.map = map;
	this.helper = helper;

	this.initialize();
}

Action.prototype.initialize = function() {
	Mousetrap.bind(this.key, this.trigger.bind(this));
};

Action.prototype.trigger = function(e) {
	var self = this;
	if (this.map.requirement()) {
		setText(this.map.icon, this.map.title, function() {
			var count = self.incrementCount();
			if (count == 10) {
				self.helper.show();
				self.resetCount();
			}

			showWrapper();
		  self.map.action();
		});
	}
};

Action.prototype.incrementCount = function() {
	var current = localStorage.getItem('keyCount');

	if (current) {
		var value = parseInt(current, 10) + 1;
		localStorage.setItem('keyCount', value);
	} else {
		localStorage.setItem('keyCount', 1);
	}

	return parseInt(localStorage.getItem('keyCount'), 10);
};

Action.prototype.resetCount = function() {
	return localStorage.removeItem('keyCount');
}

var showWrapper = function() {
	$('.keyboardWrapper, .keyboardContainer').fadeIn(200);
	var wrapperTimeout = setTimeout(function() {
		$('.keyboardWrapper, .keyboardContainer').fadeOut(500);
	}, 800);
};

var setText = function(icon, title, cb) {
	$('.keyboardWrapper .icon').attr('src', chrome.extension.getURL("src/images/"+icon+"_2x.png")).one('load', cb);
	$('.keyboardWrapper .title').html(title);
};

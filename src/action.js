
function Action(key, map) {
	this.key = key;
	this.map = map;

	this.initialize();
}

Action.prototype.initialize = function() {
	Mousetrap.bind(this.key, this.trigger.bind(this));
};

Action.prototype.trigger = function(e) {
	var self = this;
	if (this.map.requirement()) {
		setText(this.map.icon, this.map.title, function() {
			showWrapper();
		  self.map.action();
		});
	}
};

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

var action = function(key, map) {
	return new Action(key, map);
}

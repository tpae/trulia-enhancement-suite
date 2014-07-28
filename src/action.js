
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
		this.setText(this.map.icon, this.map.title, function() {
			self.showWrapper();
			self.map.action(e);
		});
	}
};

Action.prototype.showWrapper = function() {
	$('.keyboardWrapper, .keyboardContainer').fadeIn(200);
	var wrapperTimeout = setTimeout(function() {
		$('.keyboardWrapper, .keyboardContainer').fadeOut(500);
	}, 800);
};

Action.prototype.setText = function(icon, title, cb) {
	$('.keyboardWrapper .icon').attr('src', chrome.extension.getURL("src/images/"+icon+"_2x.png")).on('load', cb);
	$('.keyboardWrapper .title').html(title);
};

var action = function(key, action) {
	return new Action(key, action);
}

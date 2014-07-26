
function Action(key, map) {
	this.key = key;
	this.map = map;

	this.initialize();
}

Action.prototype.initialize = function() {
	Mousetrap.bind(this.key, this.trigger.bind(this));
};

Action.prototype.trigger = function(e) {
	this.showWrapper();
	this.setText(this.map.icon, this.map.title);
	this.map.action(e);
};

Action.prototype.showWrapper = function() {
	$('.keyboardWrapper, .keyboardContainer').fadeIn(200);
	var wrapperTimeout = setTimeout(function() {
		$('.keyboardWrapper, .keyboardContainer').fadeOut(500);
	}, 800);
};

Action.prototype.setText = function(icon, title) {
	$('.keyboardWrapper .icon').attr('src', chrome.extension.getURL("src/images/"+icon+"_2x.png"));
	$('.keyboardWrapper .title').html(title);
};

var action = function(key, action) {
	return new Action(key, action);
}

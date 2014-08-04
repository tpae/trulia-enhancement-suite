
function Helper() {
	this.element = null;
	this.initialize();
}

Helper.prototype.initialize = function() {
	this.element = $('<div></div>')
										.append('<img src="'+chrome.extension.getURL("src/images/helpdrawer.png")+'">')
										.appendTo('body')
										.addClass('keyboardHelper');

	this.bindEvents();
};

Helper.prototype.bindEvents = function() {
	this.element.on('click', this.hide.bind(this));
};

Helper.prototype.show = function() {
	this.element.fadeIn();
};

Helper.prototype.hide = function() {
	this.element.fadeOut();
};
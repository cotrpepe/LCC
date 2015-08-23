'use strict';

var ss = require('./string-style.js');
var string = require('./string.js');

var updateHTML = function(fontSize, text) {
	var strLenElement = document.getElementById('strLen');
	strLenElement.style.fontSize = fontSize;
	strLenElement.innerText = text;
};

module.exports.printCalculating = function() {
	updateHTML('40vh', '...');
};

module.exports.update = function(strLen) {
	var fontSize;
	var text;

	if (string.isTooLong(strLen)) {
		fontSize = '45vh';
		text = 'too long';
	} else {
		fontSize = ss.getScaledFontSize(strLen);
		text = ss.addThousandsSeparator(strLen);
	}

	updateHTML(fontSize, text);
};

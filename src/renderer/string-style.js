'use strict';

module.exports.addThousandsSeparator = function(number) {
	// This regular expression is based on the answer of Stack Overflow
	// http://stackoverflow.com/questions/2901102/how-to-print-a-number-
	// with-commas-as-thousands-separators-in-javascript
	return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

module.exports.getScaledFontSize = function(number) {
	var length = number.toString().length;

	var fontSize;
	switch (length) {
		case 1:
		case 2:
			fontSize = 60;
			break;
		case 3:
		case 4:
			fontSize = 55;
			break;
		case 5:
		case 6:
			fontSize = 50;
			break;
		case 7:
		case 8:
		default:
			fontSize = 40;
	}

	return fontSize + 'vh';
};

'use strict';

var app = require('app');
var shell = require('shell');
var constants = require('../util/constants.js');

module.exports.aboutWindowMenu = function() {
	return {
		label: 'About ' + app.getName(),
		click: function () {
			require('./about-window.js').openAboutWindow();
		}
	};
};

module.exports.helpMenu = function() {
	return {
		label: app.getName() + ' Help',
		click: function() {
			shell.openExternal(constants.HELP_URL);
		}
	};
};

module.exports.quitMenu = function() {
	var quitShortcut = process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q';
	return {
		label: 'Quit',
		accelerator: quitShortcut,
		click: function () {
			app.quit();
		}
	};
};

'use strict';

var app = require('app');
var globalShortcut = require('global-shortcut');

module.exports.registerQuit = function() {
	var shortcut = process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q';
	var ret = globalShortcut.register(shortcut, function() {
		app.quit();
	});

	if (!ret) {
		console.log('registration failed');
	}
};

module.exports.unregisterAll = function() {
	globalShortcut.unregisterAll();
};

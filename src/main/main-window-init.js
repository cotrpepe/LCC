'use strict';

var path = require('path');
var BrowserWindow = require('browser-window');

module.exports.createMainWindow = function() {
	const WINDOW_WIDTH = 300;
	const WINDOW_HEIGHT = 120;

	var screen = require('screen');
	var displaySize = screen.getPrimaryDisplay().size;

	var mainWindow = new BrowserWindow({
		x: (displaySize.width / 2) - (WINDOW_WIDTH / 2),
		y: displaySize.height - WINDOW_HEIGHT - 50,
		width: WINDOW_WIDTH,
		height: WINDOW_HEIGHT,
		frame: false,
		resizable: true
	});

	mainWindow.setAlwaysOnTop(true);

	var htmlPath = path.join(__dirname, '/../../main.html');
	mainWindow.loadUrl('file://' + htmlPath);

	mainWindow.on('closed', function() {
		mainWindow = null;
	});

	return mainWindow;
};

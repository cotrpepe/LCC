'use strict';

var app = require('app');
var shortcut = require('./shortcut.js');

require('crash-reporter').start();

// Keep a global reference to prevent being GCed.
var mainWindow = null;
var trayIcon = null;

// Main in the main process
app.on('ready', function() {
	mainWindow = require('./main-window-init.js').createMainWindow();
	trayIcon = require('./tray.js').createTray();

	if (process.platform == 'darwin') {
		require('./menu.js').createMenu();
	}

	shortcut.registerQuit();
});

app.on('will-quit', function() {
	shortcut.unregisterAll();
});

'use strict';

var app = require('app');
var path = require('path');
var Tray = require('tray');
var Menu = require('menu');
var menuItem = require('./menu-item.js');

module.exports.createTray = function() {
	var iconPath = path.join(__dirname, '/../../image/tray_icon.png');
	var trayIcon = new Tray(iconPath);

	var contextMenu = Menu.buildFromTemplate([
		menuItem.aboutWindowMenu(),
		menuItem.helpMenu(),
		{ type: 'separator' },
		menuItem.quitMenu()
	]);

	trayIcon.setToolTip(app.getName());
	trayIcon.setContextMenu(contextMenu);

	return trayIcon;
};

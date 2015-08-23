'use strict';

var Menu = require('menu');
var menuItem = require('./menu-item.js');

module.exports.createMenu = function() {
	var menu = Menu.buildFromTemplate([
		{
			label: 'File',
			submenu: [
				menuItem.aboutWindowMenu(),
				{ type: 'separator' },
				menuItem.quitMenu()
			],
		},
		{
			label: 'Help',
			submenu: [
				menuItem.helpMenu()
			]
		}
	]);
	Menu.setApplicationMenu(menu);
};

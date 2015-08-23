'use strict';

var app = require('app');
var dialog = require('dialog');
var pjson = require('../../package.json');

module.exports.openAboutWindow = function() {
	dialog.showMessageBox({
		type: 'info',
		buttons: ['ok'],
		title: 'About ' + app.getName(),
		message: app.getName(),
		detail: pjson.description + '\nv' + app.getVersion()
	});
};

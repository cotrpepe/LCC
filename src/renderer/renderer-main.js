'use strict';

var clipboard = require('clipboard');
var mainWindow = require('./main-window.js');
var string = require('./string.js');

// Main in the renderer process
mainWindow.printCalculating();
var prevLen = string.getLengthInCrossPlatform(clipboard.readText());
mainWindow.update(prevLen);

var curLen = 0;
setInterval(function() {
  curLen = string.getLengthInCrossPlatform(clipboard.readText());

  if (prevLen != curLen) {
    prevLen = curLen;
    mainWindow.update(curLen);
  }
}, 500);

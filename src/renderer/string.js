'use strict';

var constants = require('../util/constants.js');

module.exports.isTooLong = function(strLen) {
  return strLen > constants.MAX_STRING_LENGTH;
};

module.exports.getLengthInCrossPlatform = function(str) {
  return str.replace(/\r?\n/g, '\n').length;
};

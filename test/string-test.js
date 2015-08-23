var assert = require('assert');
var string = require('../src/renderer/string.js');
var constants = require('../src/util/constants.js');

describe('string.js', function() {
  describe('isTooLong()', function() {
    it('should return true when a string is too long', function() {
      assert.equal(true, string.isTooLong(constants.MAX_STRING_LENGTH + 1));
    });

    it('should return false when a string is not too long', function() {
      assert.equal(false, string.isTooLong(''.length));
      assert.equal(false, string.isTooLong('a'.length));
      assert.equal(false, string.isTooLong(constants.MAX_STRING_LENGTH));
    });
  });

  describe('getLengthInCrossPlatform()', function() {
    it('should return zero when a string is nothing', function() {
      var str = '';
      assert.equal(0, string.getLengthInCrossPlatform(str));
    });

    it('should return string length when a space', function() {
      var str = ' ';
      assert.equal(1, string.getLengthInCrossPlatform(str));

      str = '   ';
      assert.equal(3, string.getLengthInCrossPlatform(str));
		});

    it('should return string length when an alphabet', function() {
      var str = 'a';
      assert.equal(1, string.getLengthInCrossPlatform(str));

      str = 'xyz';
      assert.equal(3, string.getLengthInCrossPlatform(str));
    });

    it('should return string length when Japanese', function() {
      var str = 'あ';
      assert.equal(1, string.getLengthInCrossPlatform(str));

      str = '朝昼夜';
      assert.equal(3, string.getLengthInCrossPlatform(str));
    });

    it('should return string length when LF', function() {
      var str = '\n';
      assert.equal(1, string.getLengthInCrossPlatform(str));

      str = '\n\n\n';
      assert.equal(3, string.getLengthInCrossPlatform(str));
    });

    it('should return string length when CRLF', function() {
      var str = '\r\n';
      assert.equal(1, string.getLengthInCrossPlatform(str));

      str = '\r\n\r\n\r\n';
      assert.equal(3, string.getLengthInCrossPlatform(str));
    });

    it('should return string length when TAB', function() {
      var str = '\t';
      assert.equal(1, string.getLengthInCrossPlatform(str));

      str = '\t\t\t';
      assert.equal(3, string.getLengthInCrossPlatform(str));
    });

    it('should return string length when various strings', function() {
      var str = '1\na\nあ\n \n\t\n';
      assert.equal(10, string.getLengthInCrossPlatform(str));

      str = '1\r\na\r\nあ\r\n \r\n\t\r\n';
      assert.equal(10, string.getLengthInCrossPlatform(str));
    });
  });
});

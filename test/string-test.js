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
      assert.equal(0, string.getLengthInCrossPlatform(''));
    });

    it('should return string length when a space', function() {
      assert.equal(1, string.getLengthInCrossPlatform(' '));
      assert.equal(3, string.getLengthInCrossPlatform('   '));
    });

    it('should return string length when an alphabet', function() {
      assert.equal(1, string.getLengthInCrossPlatform('a'));
      assert.equal(3, string.getLengthInCrossPlatform('xyz'));
    });

    it('should return string length when Japanese', function() {
      assert.equal(1, string.getLengthInCrossPlatform('あ'));
      assert.equal(3, string.getLengthInCrossPlatform('朝昼夜'));
    });

    it('should return string length when LF', function() {
      assert.equal(1, string.getLengthInCrossPlatform('\n'));
      assert.equal(3, string.getLengthInCrossPlatform('\n\n\n'));
    });

    it('should return string length when CRLF', function() {
      assert.equal(1, string.getLengthInCrossPlatform('\r\n'));
      assert.equal(3, string.getLengthInCrossPlatform('\r\n\r\n\r\n'));
    });

    it('should return string length when TAB', function() {
      assert.equal(1, string.getLengthInCrossPlatform('\t'));
      assert.equal(3, string.getLengthInCrossPlatform('\t\t\t'));
    });

    it('should return string length when various strings', function() {
      assert.equal(10, string.getLengthInCrossPlatform('1\na\nあ\n \n\t\n'));
      assert.equal(10, string.getLengthInCrossPlatform('1\r\na\r\nあ\r\n \r\n\t\r\n'));
    });
  });
});

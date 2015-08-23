var assert = require('assert');
var ss = require('../src/renderer/string-style.js');

describe('string-style.js', function() {
  describe('addThousandsSeparator()', function() {
    it('shouldn\'t add the thousands separator to zero', function() {
      assert.equal('0', ss.addThousandsSeparator(0));
    });

    it('should add the thousands separator to positive numbers', function() {
      assert.equal('1',             ss.addThousandsSeparator(1));
      assert.equal('12',            ss.addThousandsSeparator(12));
      assert.equal('123',           ss.addThousandsSeparator(123));
      assert.equal('1,234',         ss.addThousandsSeparator(1234));
      assert.equal('12,345',        ss.addThousandsSeparator(12345));
      assert.equal('123,456',       ss.addThousandsSeparator(123456));
      assert.equal('1,234,567',     ss.addThousandsSeparator(1234567));
      assert.equal('12,345,678',    ss.addThousandsSeparator(12345678));
      assert.equal('123,456,789',   ss.addThousandsSeparator(123456789));
      assert.equal('1,234,567,890', ss.addThousandsSeparator(1234567890));
    });

    it('should add the thousands separator to negative numbers', function() {
      assert.equal('-1',             ss.addThousandsSeparator(-1));
      assert.equal('-12',            ss.addThousandsSeparator(-12));
      assert.equal('-123',           ss.addThousandsSeparator(-123));
      assert.equal('-1,234',         ss.addThousandsSeparator(-1234));
      assert.equal('-12,345',        ss.addThousandsSeparator(-12345));
      assert.equal('-123,456',       ss.addThousandsSeparator(-123456));
      assert.equal('-1,234,567',     ss.addThousandsSeparator(-1234567));
      assert.equal('-12,345,678',    ss.addThousandsSeparator(-12345678));
      assert.equal('-123,456,789',   ss.addThousandsSeparator(-123456789));
      assert.equal('-1,234,567,890', ss.addThousandsSeparator(-1234567890));
    });
  });

  describe('getScaledFontSize()', function () {
    it('should return scaled font size', function () {
      assert.equal('60vh', ss.getScaledFontSize('1'));
      assert.equal('60vh', ss.getScaledFontSize('12'));
      assert.equal('55vh', ss.getScaledFontSize('123'));
      assert.equal('55vh', ss.getScaledFontSize('1234'));
      assert.equal('50vh', ss.getScaledFontSize('12345'));
      assert.equal('50vh', ss.getScaledFontSize('123456'));
      assert.equal('40vh', ss.getScaledFontSize('1234567'));
      assert.equal('40vh', ss.getScaledFontSize('12345678'));
      assert.equal('40vh', ss.getScaledFontSize('123456789'));
    });
  });
});

var expect = require('chai').expect;
var math = require('../math');

describe('mathematics calculation', function() {
  it('sums up the value', function() {
    expect(math.sum(5, 15)).to.equal(20);
  });

  it('multiplies value together', function() {
    expect(math.multiply(3, 5)).to.equal(15);
    expect(math.multiply(4, 2)).to.equal(8);
  });
});
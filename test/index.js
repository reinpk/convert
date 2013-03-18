var convert = require('..');

describe('convert scientific notation', function () {

  it('should return 1 for exp of 0', function () {
    convert.E(0).should.equal(1);
  });

  it('should return 0.1 for exp of -1', function () {
    convert.E(-1).should.equal(0.1);
  });

  it('should return 100 for exp of 2', function () {
    convert.E(2).should.equal(100);
  });

});

describe('convert timespans', function () {

  it('should convert years to years properly', function () {
    convert.years(1).should.equal(1);
    convert.years(37).should.equal(37);
  });

  it('should convert days to years properly', function () {
    convert.days(1).should.equal(1/365.25);
    convert.days(365.25*4).should.equal(4);
  });

  it('should convert hours to years properly', function () {
    convert.hours(365.25 * 24).should.equal(1);
    convert.hours(365.25 * 24 * 10).should.equal(10);
  });

  it('should convert minutes to years properly', function () {
    convert.minutes(365.25 * 24 * 60).should.equal(1);
    convert.minutes(365.25 * 24 * 60 * 10).should.equal(10);
  });

  it('should convert seconds to years properly', function () {
    convert.seconds(365.25 * 24 * 60 * 60).should.equal(1);
    convert.seconds(365.25 * 24 * 60 * 60 * 10).should.equal(10);
  });

});



describe('convert chemistry', function () {

  it('should return 1 for exp of 0', function () {
    convert.E(0).should.equal(1);
  });

});
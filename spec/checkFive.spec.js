const checkFive = require('../checkFive.js');

describe("checkFive", function() {
  it("should return 'num is less than 5' when num < 5", function() {
    const output = checkFive(2);
    expect(output).toEqual('2 is less than 5.');
  });

  it("should return 'num is equal to 5.' when num === 5", function() {
    const output = checkFive(5);
    expect(output).toEqual('5 is equal to 5.');
  });

  it("should return 'num is greater than 5' when num > 5", function() {
    const output = checkFive(7);
    expect(output).toEqual('7 is greater than 5.');
  });
})
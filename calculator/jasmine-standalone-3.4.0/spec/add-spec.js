let add = require('../src/add')

describe("Add function", function() {
  
  it("Should return 10", function() {
    expect(add(8, 2)).toBe(10);
  });

  it("Should return 30", function() {
    expect(add(8, 2, 20)).toBe(30);
  });

  it("Should return 100", function() {
    expect(add(50, 30, 19, 1)).toBe(100);
  });

});
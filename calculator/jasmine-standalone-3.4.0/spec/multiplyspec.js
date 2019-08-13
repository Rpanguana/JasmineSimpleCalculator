describe("multiply function", function() {
  
  it("Should return 12", function() {
    expect(multiply(3, 4)).toBe(12);
  });

  it("Should return 8", function() {
    expect(multiply(2, 2, 2)).toBe(8);
  });

  it("Should return 90", function() {
    expect(multiply(5, 3, 3, 2)).toBe(90);
  });

});
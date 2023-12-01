import addNums from "../../src/utils/addNums";
import { describe, it } from "mocha";
import { expect } from "chai";

// Describe what the suite of tests is actually testing. In this case,
// all tests in the suite are testing addNums
describe("addNums", function () {
  // It should return the sum of two numbers
  it("should return the sum of two numbers", function () {
    const result = addNums(7, 12);
    expect(result).to.be.a("number");
    expect(result).to.equal(19);
  });

  it("should return false if either input is not a number or numerical string", function () {
    const result = addNums("banana", 10);
    expect(result).to.be.a("boolean");
    expect(result).to.equal(false);
  });

  it("should return the sum if one or both inputs are numerical strings", function () {
    const result = addNums("7", 10);
    expect(result).to.be.a("number");
    expect(result).to.equal(17);
  });

  it("should return false if any inputs are missing", function () {
    const result = addNums();
    expect(result).to.be.a("boolean");
    expect(result).to.equal(false);
  });
});

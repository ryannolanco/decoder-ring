const { caesar } = require("../src/caesar");
const expect = require("chai").expect


//testing for decyrption

describe("ceasar function decodes and returns expected message", () => {
  it("should correctly decrypt the message with a positive number input", () => {
    const actual = caesar('wklqnixo', 3, false);
    const expected = 'thinkful';
    expect(actual).to.equal(expected);
  })

  it("should correctly decrypt the message with a negative number input", () => {
    const actual = caesar('qefkhcri', -3, false);
    const expected = 'thinkful';
    expect(actual).to.equal(expected);
  })

  it("should correctly decrypt the message and leave spaces and special characters unchanged", () => {
    const actual = caesar('BPQA qa I amkzmb umaaiom!', 8, false);
    const expected = 'this is a secret message!';
    expect(actual).to.equal(expected);
  })
})



//testing for encryption

describe("ceasar function encrypts and returns expected message", () => {
  it("should correctly encrypt the message with a positive number input", () => {
    const actual = caesar("thinkful", 3);
    const expected = 'wklqnixo';
    expect(actual).to.equal(expected);
  })

  it("should correctly encrypt the message with a negative number input", () => {
    const actual = caesar("thinkful", -3);
    const expected = 'qefkhcri';
    expect(actual).to.equal(expected);
  })

  it("should correctly encrypt the message and leave spaces and special characters unchanged", () => {
    const actual = caesar("This is a secret message!", 8);
    const expected = 'bpqa qa i amkzmb umaaiom!';
    expect(actual).to.equal(expected);
  })
})

//testing for false returns

describe("ceasar function returns false if value is not expected input", () => {
  it("should return false if no value is present", () => {
    const actual = caesar("thinkful", 0);
    const expected = false;
    expect(actual).to.equal(expected);
  })

  it("should return false if value is less than -25", () => {
    const actual = caesar("thinkful", -26);
    const expected = false;
    expect(actual).to.equal(expected);
  })

  it("should return false if value is greater than 25", () => {
    const actual = caesar("thinkful", 99);
    const expected = false;
    expect(actual).to.equal(expected);
  })

})
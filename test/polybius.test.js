const expect = require("chai").expect
const { polybius } = require("../src/polybius");


//testing decryption

describe('polybius function returns decrypted message', () => {
  it('should return decrypted message', () => {
    const actual = polybius("3251131343 2543241341", false);
    const expected = "hello world";
    expect(actual).to.equal(expected);
  })

  it('should return decrypted message with both j/i present', () => {
    const actual = polybius("4432423352125413", false);
    const expected = "th(i/j)nkful";
    expect(actual).to.equal(expected);
  })
})




//testing encryption

describe('polybius function returns encrypted message', () => {
  it('should return encrypted message.', () => {
    const actual = polybius("thinkful");
    const expected = "4432423352125413";
    expect(actual).to.equal(expected);
  })

  //substitute j to ensure i and j return 42

  it('should return encrypted message.', () => {
    const actual = polybius("thjnkful");
    const expected = "4432423352125413";
    expect(actual).to.equal(expected);
  })

  it('should return encrypted message with spaces unchanged', () => {
    const actual = polybius("Hello world");
    const expected = "3251131343 2543241341";
    expect(actual).to.equal(expected);
  })
})



//testing false values

describe('polybius function returns false value', () => {
  it('should return false if there is an uneven amount of numbers', () => {
    const actual = polybius("44324233521254134", false);
    const expected = false;
    expect(actual).to.equal(expected);
  })
})



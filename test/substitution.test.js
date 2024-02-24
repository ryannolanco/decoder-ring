const expect = require("chai").expect
const { substitution } = require("../src/substitution");


//testing decryption
describe('substitution function returns decrypted message', () => {
  it('should return decrypted message. No special characters included', () => {
    const actual = substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false);
    const expected = 'thinkful';
    expect(actual).to.equal(expected);
  })

  it('should return decrypted message. Special characters included', () => {
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    const expected = 'message';
    expect(actual).to.equal(expected);
  })   
})




//testing encryption
describe('substitution function returns encrypted message', () => {
  it('should return encrypted message. No special characters or spaces included', () => {
    const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
    const expected = 'jrufscpw';
    expect(actual).to.equal(expected);
  })

  it('should return encrypted message with spaces unchanged. No special characters included', () => {
    const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
    const expected = 'elp xhm xf mbymwwmfj dne';
    expect(actual).to.equal(expected);
  })
  
  it('should return encrypted message. Special characters included', () => {
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    const expected = 'y&ii$r&';
    expect(actual).to.equal(expected);
  })

})



//testing false values
describe('substitution function returns false value', () => {
  it('should return false if length of alphabet is not equal to 26', () => {
    const actual = substitution("thinkful", "short");
    const expected = false;
    expect(actual).to.equal(expected);
  })

  it('should return false if all characters in alphabet are not unique', () => {
    const actual = substitution("thinkful", "abcabcabcabcabcabcabcabcyz");
    const expected = false;
    expect(actual).to.equal(expected);
  })
})

// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  let startCode = "a".charCodeAt(0);
  let endCode = "z".charCodeAt(0);


  function lowerCaseLetters(input){
    return input.toLowerCase();
  }

  function getCharCodes(word) {
    letterCodes = [];
    for(let i = 0; i < word.length; i++) {
      let letterCode = word.charCodeAt(i);
      letterCodes.push(letterCode)
    }
    return letterCodes
  }

  function shiftCodes(codeArray, shift) {
    const newArr = [];
    codeArray.forEach((code) => {
      if (code >= startCode && code <= endCode) {
        code += shift
        if(code < startCode) {
          code += 26
        }
        else if (code > endCode) {
          code -= 26
        }
      } newArr.push(code)
    });
    return newArr
  }

  function convertToString(codeArr) {
    const newArr = [];
    codeArr.forEach((code) => {
      let letter = String.fromCharCode(code)
      newArr.push(letter)
    })
    let word = newArr.join("")
    return word
  }

  function caesar(input, shift, encode = true) {

    if (shift === 0 || shift > 25 || shift < -25) {
      return false
    }

    if (!encode) {
      shift *= -1
    }

    let shiftedWords = [];
    let loweredInput = lowerCaseLetters(input);
    //split message into array of words
    let splitInput = loweredInput.split(" ");
    // for each word change to code and shift code 
    splitInput.forEach((word) => {
      let wordCodes = getCharCodes(word)
      let shifted = shiftCodes(wordCodes, shift)
      let shiftedWord = convertToString(shifted)
      shiftedWords.push(shiftedWord)
    })
    let message = shiftedWords.join(" ")
    return message
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

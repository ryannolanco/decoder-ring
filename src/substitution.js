// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // creating alphanet objects for both decoding and encoding

  const alphNum = { 0: "a", 1: "b", 2: "c", 3: "d", 4: "e", 5: "f", 6: "g", 7: "h", 8: "i", 9: "j", 10: "k", 11: "l", 12: "m", 13: "n", 14: "o", 15: "p", 16: "q", 17: "r", 18: "s", 19: "t", 20: "u", 21: "v", 22: "w", 23: "x", 24: "y", 25: "z" };
  const numAlph = { "a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7, "i": 8, "j": 9, "k": 10, "l": 11, "m": 12, "n": 13, "o": 14, "p": 15, "q": 16, "r": 17, "s": 18, "t": 19, "u": 20, "v": 21, "w": 22, "x": 23, "y": 24, "z": 25, };

  //helper functions start 
  // changes input word to index numbers to get ready for encoding
  function stringToIndex(word) {
    let indexedWord = [];
    for (let i = 0; i < word.length; i++) {
      let letter = word[i]
      let index = numAlph[letter]
      indexedWord.push(index)
    }
    return indexedWord
  }

  //change encoded word into index number to get ready for decoding\
  function changeEncodedToIndex(word, alphabet) {
    let indexedWord = [];
    for (let i = 0; i < word.length; i++) {
      let letter = word[i]
      let index = alphabet.indexOf(letter)
      indexedWord.push(index)
    }
    return indexedWord


  }

  //changes encoded index array to decoded word and returns
  function changeEncodedIndex(arr) {
    let word = [];
    arr.forEach((num) => {
      let letter = alphNum[num]
      word.push(letter)
    })
    return word.join("")
  }

  //encodes word using given alphabet
  function changeIndexToWord(word, alphabet) {
    let message = [];

    word.forEach((num) => {
      let newLetter = alphabet[num]
      message.push(newLetter)
    });
    return message.join("")
  }

  function isUnique(str) {
    return new Set(str).size === str.length;
  }

//helper functions end





// main code
  function substitution(input, alphabet, encode = true) {
    const message = [];
    //splitting up message input into new array
    let splitInput = input.toLowerCase().split(" ");
    
    //checking for errors
    if (!alphabet ) {
      return false
    }
    let unique = isUnique(alphabet)
    if (alphabet.length !== 26 || !unique) {
      return false
    }


    //decoding message
    if (!encode) {
      splitInput.forEach((word) => {
        let wordIndexArr = changeEncodedToIndex(word, alphabet);
        let decodedWord = changeEncodedIndex(wordIndexArr)
        message.push(decodedWord)
      })
      return message.join(" ")
    }

    //encoding the message
    splitInput.forEach((word) => {
      let indexedWordArr = stringToIndex(word)
      let newWord = changeIndexToWord(indexedWordArr, alphabet)
      message.push(newWord)
    })
    return message.join(" ")
  }



  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };

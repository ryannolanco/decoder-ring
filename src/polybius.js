// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  //let startCode = "1".charCodeAt(0);
  //let endCode = "5".charCodeAt(0);
  //check if string is digits
  //function isDigitCode(n) {
  // return(n >= startCode && n <= endCode);
  //}
  

  const letterPairs = {"a": "11", "b": "21", "c": "31", "d": "41", "e": "51", "f": "12", "g": "22",
   "h": "32", "k": "52", "l": "13", "m": "23", "n": "33", "o": "43", "p": "53", "q": "14",
    "r": "24", "s": "34", "t": "44", "u": "54", "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"};

  const numberPairs = {"11": "a", "21": "b", "31": "c", "41": "d", "51": "e", "12": "f", "22": "g",
    "32": "h", "42": "(i/j)", "52": "k", "13": "l", "23": "m", "33": "n", "43": "o", "53": "p", "14": "q",
    "24": "r", "34": "s", "44": "t", "54": "u", "15": "v", "25": "w", "35": "x", "45": "y", "55": "z"};

    
  //split digit string by twos
  function splitByTwo(numbers) {
    let letterNumbers = [];
    for (let i = 0; i < numbers.length; i += 2) {
      letterNumbers.push(numbers.substring(i, i + 2))
    } return letterNumbers
  }

  function checkDigitLength (numArray) {
    let str = numArray.join("");
    if (str.length % 2 === 0) {
      return true
    }
    return false
  }

 
  // change string to relative numbers function
  function changeToNumber(word) {
    let numberedWord = ""
    for (let i = 0; i < word.length; i++) {
      let letter = word[i]
      if (letter === "i" || letter === "j") {
        numberedWord += "42"
        continue
      }
      let num = letterPairs[letter]
      numberedWord += num
    } return numberedWord
  }

  function changeToLetter(word) {
    let letteredWord = ""
    let splitNumbers = splitByTwo(word)
    splitNumbers.forEach((number) => {
      let letter = numberPairs[number]
      letteredWord += letter
    })
    return letteredWord
  }


   

  function polybius(input, encode = true) {
    const splitInput = input.toLowerCase().split(" ");
    // assigning a empty array to pushed encoded words into
    let changedWords = [];
    if (encode === true) {
      splitInput.forEach((word) => {
        changedWords.push(changeToNumber(word))
      });
      return changedWords.join(" ")
    }
    if (!checkDigitLength(splitInput)) {
      return false
    }
    splitInput.forEach((word) => {
      changedWords.push(changeToLetter(word))
    }); 
    return changedWords.join(" ")


  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

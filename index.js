function capitalFirstChar(word) {
    const firstLetter = word.charAt(0)
    const firstLetterCap = firstLetter.toUpperCase()
    const remainingLetters = word.slice(1)
    const capWord = firstLetterCap + remainingLetters
    return capWord;
  }


const reverseString = (string) => string.split("").reverse().join("")

const calculator = {
    sum: function(a, b) {
        return a + b
    },
    subtract: function(a, b) {
        return a - b
    },
    divide: function(a, b) {
        return a / b
    },
    multiply: function(a, b) {
        return a * b
    }

}

let plainText = 'ATTACK AT DAWN'

const cipherTextFunc = (key, text) => {
    //all text lower cased
    const lowerCaseText = text.toLowerCase()
    let cipherText = ''
    let alphabet = /[a-z]/
    //handle negative key values
    if (key < 0) key = 26 + key
    for (let i = 0; i < text.length; i++) {
        if (alphabet.test(lowerCaseText.charAt(i))) cipherText += String.fromCharCode((lowerCaseText.charCodeAt(i) - 97 + key) % 26 + 97)
        else cipherText += text.charAt(i) //append non alphabet characters
    }
    return cipherText
}

const cipherText = cipherTextFunc(3, plainText)
console.log(cipherText)

const testArray = [1,8,3,4,2,6]

const analyzeArray = (array) => {
    
    const sortedArray = array.slice().sort((a, b) => a - b)
    const arraySum = array.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    const arrayAverage = arraySum / array.length

  return {
    average: arrayAverage,
    min: sortedArray[0],
    max: sortedArray[sortedArray.length - 1],
    length: array.length
    }
}

const resultObject = analyzeArray(testArray)
console.log(resultObject)





module.exports = {
    capitalFirstChar,
    reverseString,
    calculator,
    plainText,
    cipherText,
    cipherTextFunc,
    testArray,
    analyzeArray,

}

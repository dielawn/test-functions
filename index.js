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
    const lowerCaseText = text.toLowerCase()
    let cipherText = ''
    let alphabet = /[a-z]/
    for (let i = 0; i < text.length; i++) {
        if (alphabet.test(lowerCaseText.charAt(i))) {
            let shiftedCharCode = (lowerCaseText.charCodeAt(i) - 97 + key) % 26 + 97        
            if (shiftedCharCode < 0) {
                shiftedCharCode = (shiftedCharCode + 26) % 26
            }
            cipherText += String.fromCharCode(shiftedCharCode + 97)
        } else cipherText += text.charAt(i) //append non alphabet characters
    }
    return cipherText
}

const cipherText = cipherTextFunc(3, plainText)
console.log(cipherText)



module.exports = {
    capitalFirstChar,
    reverseString,
    calculator,
    plainText,
    cipherText,
    cipherTextFunc,

}

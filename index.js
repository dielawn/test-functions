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



module.exports = {
    capitalFirstChar,
    reverseString,
    calculator,
}

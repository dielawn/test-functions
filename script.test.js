


const {capitalFirstChar, reverseString, calculator} = require('./index')

test('capitalizes first character and handles remaing letters', () => expect(capitalFirstChar('example')).toBe('Example'))

test('reverses a string', () =>  expect(reverseString('example')).toBe('elpmaxe'))

test('calculator that can add, subtract, divide, and multiply', () => {
    expect(calculator.sum(1, 2)).toBe(3)
    expect(calculator.subtract(2, 1)).toBe(1)
    expect(calculator.divide(4, 2)).toBe(2)
    expect(calculator.multiply(4, 2)).toBe(8)
})
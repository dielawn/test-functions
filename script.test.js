


const {capitalFirstChar, reverseString, calculator, plainText, cipherText, cipherTextFunc,} = require('./index')

test('capitalizes first character and handles remaing letters', () => expect(capitalFirstChar('example')).toBe('Example'))

test('reverses a string', () =>  expect(reverseString('example')).toBe('elpmaxe'))

test('calculator that can add, subtract, divide, and multiply', () => {
    expect(calculator.sum(1, 2)).toBe(3)
    expect(calculator.subtract(2, 1)).toBe(1)
    expect(calculator.divide(4, 2)).toBe(2)
    expect(calculator.multiply(4, 2)).toBe(8)
})

describe('Caesar Cipher Encryption', () => {
    const testCases = [
        {
            key: 12, 
            input: 'attack at dawn',
            output: 'mffmow mf pmiz'
        },
        {
            key: 12,
            input: 'ATTACK AT DAWN',
            output: 'mffmow mf pmiz'
        },
        {
            key: 12,
            input: 'AtTack At DawN',
            output: 'mffmow mf pmiz'
        },
        {
            key: 12,
            input: 'attack, "at" dawn!',
            output: 'mffmow, "mf" pmiz!'
        },
        {
            key: -3,
            input: 'abc',
            output: 'xyz'
        }
    ]

testCases.forEach(({ key, input, output }) => {
    test(`encrypts "${input}" with key ${key}`, () => {
        expect(cipherTextFunc(key, input)).toBe(output)
    })

    test('handle uppercase letters', () => {        
        expect(cipherTextFunc(key, input)).toBe(output)
    })

    test('handle non-alphbet characters', () => {
        expect(cipherTextFunc(key, input)).toBe(output)
    })

    test('handle negative key values', () => {
        expect(cipherTextFunc(key, input)).toBe(output)
    })
})
}
)
